// BỘ TEST ẨN (TA): bắt các lỗi mà test của agent bỏ sót.
import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { updateEvent } from "../src/handlers.mjs";
import { events, reset } from "../src/store.mjs";

beforeEach(() => reset());
const call = (user, id, body) => updateEvent({ user, id, body });

test("chưa đăng nhập → 401", () => assert.equal(call(null, 1, { title: "x" }).status, 401));
test("không phải chủ sở hữu → 403 và dữ liệu không đổi", () => {
  assert.equal(call({ id: 2 }, 1, { title: "hacked" }).status, 403);
  assert.equal(events[0].title, "Club meeting");
});
test("sự kiện không tồn tại → 404 (không được ném lỗi)", () => {
  assert.equal(call({ id: 1 }, 999, { title: "x" }).status, 404);
});
test("title rỗng → 400", () => assert.equal(call({ id: 1 }, 1, { title: "  " }).status, 400));
test("ngày sai định dạng → 400", () => assert.equal(call({ id: 1 }, 1, { date: "tomorrow" }).status, 400));
test("mass assignment: không đổi được id / ownerId", () => {
  const res = call({ id: 1 }, 1, { title: "ok", ownerId: 2, id: 99 });
  assert.equal(res.status, 200);
  assert.equal(events[0].ownerId, 1);
  assert.equal(events[0].id, 1);
});
test("chủ sở hữu sửa hợp lệ → 200", () => {
  const res = call({ id: 1 }, 1, { title: "Moved", date: "2026-12-24" });
  assert.equal(res.status, 200);
  assert.deepEqual(events[0], { id: 1, title: "Moved", date: "2026-12-24", ownerId: 1 });
});
