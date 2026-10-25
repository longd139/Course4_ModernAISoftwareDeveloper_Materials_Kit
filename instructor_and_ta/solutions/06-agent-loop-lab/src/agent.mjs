// Vòng lặp agent tối giản:  LLM → (tool call → kết quả → LLM)* → câu trả lời.
// `model` là một hàm async nhận { messages } và trả về { content: [...], stop_reason } giống API của Anthropic.

export async function runAgent({ model, tools, userMessage, ask = async () => true, maxSteps = 10, log = () => {} }) {
  const messages = [{ role: "user", content: userMessage }];

  let steps = 0;
  while (true) {
    const res = await model({ messages });
    messages.push({ role: "assistant", content: res.content });
    if (res.stop_reason !== "tool_use") return { messages, stopped: "end_turn" };

    if (++steps > maxSteps) return { messages, stopped: "max_steps" };

    const results = [];
    for (const block of res.content) {
      if (block.type !== "tool_use") continue;
      const tool = tools[block.name];
      let content;
      let is_error = false;

      let decision = "auto";
      if (tool.sideEffect) decision = (await ask(block.name, block.input)) ? "approved" : "denied";
      if (decision === "denied") {
        content = "Denied by user";
        is_error = true;
      } else {
        try {
          content = String(tool.run(block.input));
        } catch (e) {
          content = `Error: ${e.message}`;
          is_error = true;
        }
      }
      log({ tool: block.name, input: block.input, decision, ok: !is_error });
      results.push({ type: "tool_result", tool_use_id: block.id, content, is_error });
    }
    messages.push({ role: "user", content: results });
  }
}
