export const statuses = ['todo', 'doing', 'done'];

export function validateTitle(value) {
  if (typeof value !== 'string') return { ok: false, error: 'Tiêu đề phải là chữ.' };
  const title = value.trim();
  if (!title) return { ok: false, error: 'Hãy nhập tên việc.' };
  if (title.length > 80) return { ok: false, error: 'Tên việc tối đa 80 ký tự.' };
  return { ok: true, value: title };
}

export function remaining(tasks) {
  return tasks.filter(t => t.status !== 'done').length;
}

export function addTask(tasks, title, id) {
  const check = validateTitle(title);
  if (!check.ok) return { tasks, error: check.error };
  return { tasks: [...tasks, { id, title: check.value, status: 'todo' }] };
}

export function moveTask(tasks, id, status) {
  if (!statuses.includes(status)) return tasks;
  return tasks.map(t => t.id === id ? { ...t, status } : t);
}
