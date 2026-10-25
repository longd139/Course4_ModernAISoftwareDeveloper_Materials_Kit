// Các handler trả về { status, body } (không cần server thật → dễ test).
import { events, addEvent } from "./store.mjs";

const isIsoDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);

export function listEvents() {
  return { status: 200, body: events };
}

export function createEvent({ user, body }) {
  if (!user) return { status: 401, body: { error: "Sign in first" } };
  const title = typeof body?.title === "string" ? body.title.trim() : "";
  if (!title) return { status: 400, body: { error: "Title is required" } };
  if (!isIsoDate(body.date)) return { status: 400, body: { error: "Date must be YYYY-MM-DD" } };
  return { status: 201, body: addEvent({ title, date: body.date, ownerId: user.id }) };
}

export function updateEvent({ user, id, body }) {
  if (!user) return { status: 401, body: { error: "Sign in first" } };
  const event = events.find((e) => e.id === Number(id));
  if (!event) return { status: 404, body: { error: "Not found" } };
  if (event.ownerId !== user.id) return { status: 403, body: { error: "Forbidden" } };

  // Chỉ cho phép sửa title và date (không Object.assign cả body).
  const next = {};
  if (body?.title !== undefined) {
    const title = typeof body.title === "string" ? body.title.trim() : "";
    if (!title) return { status: 400, body: { error: "Title is required" } };
    next.title = title;
  }
  if (body?.date !== undefined) {
    if (!isIsoDate(body.date)) return { status: 400, body: { error: "Date must be YYYY-MM-DD" } };
    next.date = body.date;
  }
  Object.assign(event, next);
  // Việc thông báo cho người tham gia: để sau, đọc khóa từ biến môi trường (process.env.NOTIFY_KEY), không hard-code.
  return { status: 200, body: event };
}
