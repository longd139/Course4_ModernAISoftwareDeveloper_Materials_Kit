// Các "công cụ" (tools) của agent: hàm thường + cờ sideEffect cho biết có thay đổi máy hay không.
import fs from "node:fs";
import path from "node:path";

export function createTools(root) {
  const rootAbs = path.resolve(root);
  const resolveInside = (p) => {
    const abs = path.resolve(rootAbs, p);
    const rel = path.relative(rootAbs, abs);
    // rel bắt đầu bằng ".." hoặc là đường dẫn tuyệt đối (khác ổ đĩa trên Windows) → nằm ngoài root.
    if (rel === ".." || rel.startsWith(".." + path.sep) || path.isAbsolute(rel)) {
      throw new Error(`Path is outside the project folder: ${p}`);
    }
    return abs;
  };

  return {
    list_files: {
      sideEffect: false,
      run: ({ dir }) => fs.readdirSync(resolveInside(dir ?? ".")).join("\n"),
    },
    read_file: {
      sideEffect: false,
      run: ({ file }) => fs.readFileSync(resolveInside(file), "utf8"),
    },
    write_file: {
      sideEffect: true,
      run: ({ file, content }) => {
        fs.writeFileSync(resolveInside(file), content);
        return `Wrote ${file}`;
      },
    },
    delete_file: {
      sideEffect: true,
      run: ({ file }) => {
        fs.rmSync(resolveInside(file));
        return `Deleted ${file}`;
      },
    },
  };
}
