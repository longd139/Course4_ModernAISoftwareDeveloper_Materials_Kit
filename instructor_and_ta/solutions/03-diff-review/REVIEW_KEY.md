# Đáp án review — `feat/edit-event` (CHỈ DÀNH CHO TA)

Diff chứa **9 vấn đề**. Test của agent (1 test happy-path) vẫn xanh → bài học "xanh ≠ đúng".

| # | Danh mục | Vị trí | Vấn đề | Vì sao nghiêm trọng | Cách sửa |
|---|----------|--------|--------|--------------------|----------|
| 1 | security | `const API_KEY = "sk-live-…"` | Bí mật nằm trong code → vào Git history vĩnh viễn | Ai đọc repo cũng lấy được khóa; xóa dòng sau này không xóa khỏi lịch sử | Đọc từ `process.env`, thu hồi/xoay khóa, thêm vào `.env.example` |
| 2 | security | đầu `updateEvent` | Không kiểm tra đăng nhập (`user` có thể `null`) | Người lạ sửa được dữ liệu | Trả 401 khi chưa đăng nhập |
| 3 | security | `Object.assign(event, body)` | Không kiểm tra chủ sở hữu (broken access control, OWASP A01) | User 2 sửa được sự kiện của user 1 | So `event.ownerId !== user.id` → 403 + test |
| 4 | security/correctness | `Object.assign(event, body)` | **Mass assignment**: body đi thẳng vào dữ liệu → đổi được `id`, `ownerId` | Có thể "cướp" sự kiện: gửi `{ownerId: 2}` | Chỉ copy field cho phép (`title`, `date`) |
| 5 | correctness | sau `find` | Không có nhánh 404; `Object.assign(undefined, …)` ném TypeError | Gửi id sai → server crash/500 | Trả 404 khi không tìm thấy |
| 6 | correctness | thiếu validate | `title` rỗng, `date` sai định dạng đều được lưu | Vi phạm tiêu chí (b)(c) của story; dữ liệu rác | Dùng lại logic validate của `createEvent` |
| 7 | privacy | `console.log("DEBUG update", …, user)` | Log cả body và user | Rò rỉ dữ liệu cá nhân vào log | Xóa; nếu cần thì log có cấu trúc, đã che dữ liệu |
| 8 | readability | khối `// old version` | Code cũ bị comment nằm lại | Gây nhiễu, đánh lừa agent/người đọc sau; Git đã lưu lịch sử | Xóa |
| 9 | tests | `tests/events.test.mjs` | Chỉ 1 test happy-path; không test 401/403/404/400 | Các lỗi trên lọt qua CI | Test cho từng tiêu chí chấp nhận (xem bộ test ẩn) |

Phụ (điểm cộng nếu sinh viên nêu): `notifyAttendees` gọi mạng mà không `await`/xử lý lỗi; thông báo thêm không có trong story (scope creep);
`net.mjs` là file thừa. Câu hỏi để TA đặt: *"Story có yêu cầu gửi thông báo không? Vì sao agent tự thêm?"* (liên hệ exit ticket Buổi 1: "điều agent làm mà bạn không yêu cầu").

## Cách chạy bộ test ẩn để kiểm chứng đáp án
```bash
git checkout feat/edit-event
git checkout ta-answer -- tests/update-event.hidden.test.mjs
node --test        # nhánh lỗi: nhiều test đỏ
git checkout ta-answer && node --test   # nhánh đáp án: tất cả xanh
```
