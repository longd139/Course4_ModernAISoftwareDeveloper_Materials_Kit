# 03. GIÁO ÁN & KẾ HOẠCH GIẢNG DẠY (CURRICULUM PLANS)
> Cung cấp 2 phương án tổ chức lớp học tùy thuộc vào đối tượng học viên và thời lượng thực tế của trung tâm/nhà trường.

---

## 🎯 PHƯƠNG ÁN 1: KHUNG 20 BUỔI × 90 PHÚT (KHUYÊN DÙNG CHO HỌC SINH MỚI)
*Lộ trình chia nhỏ, giảm áp lực, nhịp học 2 buổi/tuần, phù hợp tâm sinh lý lứa tuổi.*

### Giai đoạn 1: Khởi động & Nền tảng điều khiển AI (Buổi 1 – 6)
* **Buổi 1:** Làm quen với AI Agent & Nhận thức về Token/LLM. Live demo lệnh xin phép. Thực hành bài `01-prompt-board` (phần tạo việc).
* **Buổi 2:** Kỹ thuật viết Prompt có cấu trúc (5 thành phần: Goal, Context, Schema, Constraints, Verification). Ràng buộc độ dài 80 ký tự.
* **Buổi 3:** Thiết lập bối cảnh dự án qua file `CLAUDE.md` / `AGENTS.md`. Tránh ảo giác bằng tài liệu đặc tả (Spec).
* **Buổi 4:** Quản lý mã nguồn với Git: Đọc hiểu `git diff`, nhận biết thay đổi an toàn vs nguy hiểm.
* **Buổi 5:** Lưu trữ cục bộ với LocalStorage: Không cần backend, xây dựng ứng dụng Web tương tác hoàn chỉnh.
* **Buổi 6 (Checkpoint 1):** Báo cáo sản phẩm mini-board đầu tiên. Đánh giá khả năng tự giải thích code của học sinh.

### Giai đoạn 2: Kỹ năng Kỹ sư & Bắt bài AI (Buổi 7 – 12)
* **Buổi 7:** Quy trình Plan $\rightarrow$ Build $\rightarrow$ Verify. Thực hành bài `03-diff-review`: tìm 9 lỗi tiềm ẩn trong diff.
* **Buổi 8:** Tư duy kiểm thử tự động (TDD). Viết test trước khi nhờ AI sinh code.
* **Buổi 9:** Vạch trần AI "gian lận test": Thực hành bài `04-test-cheat`. Học cách viết assertion chặt chẽ.
* **Buổi 10:** Đo độ mạnh của bộ kiểm thử bằng Mutation Testing: Tại sao test 100% xanh mà phần mềm vẫn chết?
* **Buổi 11:** Giới thiệu về HTTP & Giao tiếp API mạng: Cách AI gọi và phân tích dữ liệu JSON.
* **Buổi 12 (Checkpoint 2):** Thi đấu "Săn lỗi code do AI sinh ra" giữa các nhóm học sinh.

### Giai đoạn 3: An toàn, Bảo mật & Săn lỗi hệ thống (Buổi 13 – 16)
* **Buổi 13:** Thực hành bài `02-api-bug-hunt` (Lỗi 1 & 2: Phân trang trang 1/trang 2 và lỗi xử lý Boolean query).
* **Buổi 14:** Thực hành bài `02-api-bug-hunt` (Lỗi 3 & 4: Lỗ hổng IDOR - kiểm tra quyền sở hữu và bảo vệ dữ liệu người khác).
* **Buổi 15:** Nhận biết và phòng chống tấn công Prompt Injection: Khi dữ liệu độc hại ra lệnh cho AI xóa file.
* **Buổi 16:** Thực hành bài `05-agent-safety-evals`: Giới hạn quyền đọc/ghi và số bước thực thi của AI Tool.

### Giai đoạn 4: Chuyên sâu Agent & Dự án tốt nghiệp (Buổi 17 – 20)
* **Buổi 17:** Tự lập trình vòng lặp Agentic Loop: Thực hành bài `06-agent-loop-lab` (Think $\rightarrow$ Act $\rightarrow$ Observe).
* **Buổi 18:** Tích hợp Model Context Protocol (MCP) cơ bản: Kết nối AI với file hệ thống và trình duyệt.
* **Buổi 19:** Tối ưu hóa dự án cuối khóa: Đóng gói sản phẩm, viết tài liệu hướng dẫn và diễn tập bảo vệ.
* **Buổi 20 (Demo Day):** Thuyết trình sản phẩm 7 phút + Trả lời câu hỏi chất vấn cá nhân 5 phút.

---

## 🎯 PHƯƠNG ÁN 2: KHUNG 10 BUỔI × 120 PHÚT (CHO SINH VIÊN CNTT / LỚP NÂNG CAO)
*Bám sát cấu trúc nguyên bản của Stanford CS146S, dồn lực theo mô hình đồ án lớn.*

1. **Buổi 1 (120'):** From Prompt to Running App (Bài `01-prompt-board`).
2. **Buổi 2 (120'):** Context Is Everything: Specs & CLAUDE.md.
3. **Buổi 3 (120'):** Working with an Agent: Plan $\rightarrow$ Build $\rightarrow$ Verify (`03-diff-review`).
4. **Buổi 4 (120'):** Testing with AI & Mutation Testing (`04-test-cheat`).
5. **Buổi 5 (120'):** Extending Your Agent: Commands, Subagents & Safety Evals (`05-agent-safety-evals`).
6. **Buổi 6 (120'):** Rapid UI with AI + MVP Checkpoint (Trình diễn sản phẩm giữa kỳ).
7. **Buổi 7 (120'):** Secure AI Code & Tool Execution Sandbox (`06-agent-loop-lab`).
8. **Buổi 8 (120'):** Code Review & Debugging with AI (`02-api-bug-hunt`).
9. **Buổi 9 (120'):** Ship It: Deploy, Logging & Incident Drill (Diễn tập sự cố thực tế).
10. **Buổi 10 (120'):** Demo Day & Vấn đáp cá nhân: *"Code bạn không giải thích được thì không phải của bạn"*.
