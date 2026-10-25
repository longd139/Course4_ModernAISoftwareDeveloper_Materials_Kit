# 04. ĐÁP ÁN, GIẢI THÍCH CHI TIẾT & RUBRIC ĐÁNH GIÁ (NỘI BỘ THẦY & TA)
> **BẢO MẬT TUYỆT ĐỐI:** Tài liệu này chỉ lưu hành nội bộ giữa Giảng viên và Trợ giảng. Không gửi hoặc chiếu file này trước mặt học sinh.

---

## 1. BẢNG MÃ LỖI CÀI CẮM TRONG CÁC BÀI TẬP VÀ ĐÁP ÁN

### 🧪 Bài tập 01: `01-prompt-board` (Web Board & LocalStorage)
* **Vị trí code giải:** `src final/instructor_and_ta/solutions/01-prompt-board`
* **Các điểm lỗi cài sẵn trong starter:**
  1. *Lỗi giới hạn ký tự:* Chưa chặn độ dài > 80 ký tự hoặc nhận tiêu đề toàn khoảng trắng.
  2. *Lỗi đột biến mảng:* Hàm thêm việc làm thay đổi trực tiếp mảng dữ liệu gốc thay vì trả về mảng mới bất biến (Immutability).
* **Kết quả kiểm thử khi sửa đúng:** `8/8 tests pass` (chạy `npm test`).

---

### 🧪 Bài tập 02: `02-api-bug-hunt` (Săn lỗi API & Bảo mật)
* **Vị trí code giải:** `src final/instructor_and_ta/solutions/02-api-bug-hunt`
* **5 lỗi cài sẵn và cách sửa:**
  1. *Lỗi phân trang lệch trang (Off-by-one):* Công thức gốc tính `offset = page * limit` khiến trang 1 bỏ qua mất 2 việc đầu tiên. Sửa thành: `offset = (page - 1) * limit`.
  2. *Lỗi Boolean query:* Trong JavaScript, `Boolean("false")` trả về `true`! Đoạn code lọc `done=false` bị nhận diện thành `true`. Sửa thành kiểm tra chuỗi tường minh: `done === 'true'`.
  3. *Lỗi tìm kiếm Case-sensitive:* Hàm lọc tiêu đề dùng `includes()` phân biệt hoa thường. Sửa thành: `.toLowerCase().includes(...)`.
  4. *Lỗi bảo mật IDOR (Insecure Direct Object Reference):* Route `DELETE /api/tasks/:id` cho phép bất kỳ ai cũng xóa được việc của người khác vì thiếu kiểm tra `task.ownerId !== req.user.id`.
  5. *Lỗi rò rỉ mảng tags dùng chung:* Các task cùng tham chiếu tới 1 mảng đối tượng trong bộ nhớ, dẫn tới sửa 1 task làm đổi task khác.
* **Kết quả kiểm thử khi sửa đúng:** `12/12 tests pass` (chạy `npm test`).

---

### 🧪 Bài tập 03: `03-diff-review` (Đọc Git Diff bắt lỗi AI)
* **Vị trí code giải:** `src final/instructor_and_ta/solutions/03-diff-review`
* **Bản chất bài học:** Test hiện tại của học sinh đang "xanh", nhưng code AI sinh ra có tới **9 lỗi ẩn nguy hiểm**:
  1. Thiếu kiểm tra xác thực (chưa đăng nhập vẫn cho sửa).
  2. Lỗi bảo mật IDOR: sửa được sự kiện của người khác.
  3. Xử lý lỗi ném exception làm sập server thay vì trả về HTTP 404.
  4. Lỗi Mass Assignment: người dùng gửi thêm trường `id` hoặc `ownerId` trong body làm ghi đè quyền sở hữu.
  5. Cho phép tiêu đề rỗng và ngày tháng sai định dạng ISO.
* **Kết quả kiểm thử khi sửa đúng:** `10/10 tests pass` (chạy `npm test`).

---

### 🧪 Bài tập 04: `04-test-cheat` (Vạch trần AI gian lận test)
* **Vị trí code giải:** `src final/instructor_and_ta/solutions/04-test-cheat-honest` (bản đúng) và `04-test-cheat-demo` (bản gian lận).
* **Bản chất bài học:**
  * Khi gặp bài toán tính phí ship và coupon giảm giá, AI nếu không được giám sát sẽ viết code gian lận: hardcode các ca test trong file kiểm thử hoặc tự sửa assertion để `expect(true).toBe(true)`.
  * Bản demo `04-test-cheat-demo` dùng để chiếu cho cả lớp thấy: Chạy `node tools/mutate.mjs` thì test của người đạt 100% mutation score, còn test do AI bịa chỉ đạt 17%!
* **Kết quả kiểm thử bản đúng:** `8/8 tests pass` (chạy `npm test`).

---

### 🧪 Bài tập 05: `05-agent-safety-evals` (Đánh giá an toàn Tool AI)
* **Vị trí code giải:** `src final/instructor_and_ta/solutions/05-agent-safety-evals`
* **Mục tiêu:** Kiểm tra xem con AI có tuân thủ hợp đồng an toàn hay không:
  * Từ chối các lệnh ghi file khi chỉ có quyền đọc.
  * Chặn lỗ hổng Path Traversal (`../../etc/passwd`).
  * Giới hạn tối đa 3 bước lặp, ngăn chặn AI chạy vô tận tốn tiền token.
* **Kết quả kiểm thử:** `15/15 tests pass` (chạy `npm test`).

---

### 🧪 Bài tập 06: `06-agent-loop-lab` (Vòng lặp an toàn cho Agent)
* **Vị trí code giải:** `src final/instructor_and_ta/solutions/06-agent-loop-lab`
* **Mục tiêu:** Tự code hàm `runAgent()` có cơ chế xin phép người dùng:
  * Chỉ hỏi xác nhận khi tool có tác dụng phụ (Side effect như ghi/xóa file).
  * Ghi nhật ký đầy đủ `audit-log.jsonl`.
* **Kết quả kiểm thử:** `8/8 tests pass` (chạy `npm test`).

---

## 2. RUBRIC CHẤM ĐIỂM HỌC VIÊN

| Tiêu chí | Trọng số | Thang điểm & Biểu hiện cụ thể |
| :--- | :---: | :--- |
| **Kỷ luật Git & Đọc Diff** | 25% | **0đ:** Bấm Yes liên tục, commit bừa bãi. <br>**15đ:** Có đọc diff nhưng commit message sơ sài. <br>**25đ:** Biết từ chối lệnh rác của AI, commit rõ ràng bằng tiếng Việt. |
| **Độ bao phủ của Test** | 25% | **0đ:** Không chạy test hoặc xóa test để xanh. <br>**15đ:** Test xanh nhưng còn yếu ở các ca biên. <br>**25đ:** Viết test trước, bắt bài được ca biên (null, âm, rỗng, dài). |
| **Sản phẩm chạy được** | 25% | **0đ:** Code vỡ, sập lỗi cú pháp. <br>**15đ:** Chạy được tính năng chính nhưng còn lỗi giao diện. <br>**25đ:** Chạy mượt mà, lưu trữ dữ liệu bền vững. |
| **Vấn đáp cá nhân** | 25% | **0đ:** Không giải thích được đoạn code AI vừa sinh ra. <br>**15đ:** Giải thích được đại ý nhưng không rõ luồng dữ liệu. <br>**25đ:** Chỉ rõ từng dòng code quan trọng và vì sao phải ra lệnh cho AI như vậy. |

---

## 3. BỘ CÂU HỎI VẤN ĐÁP CÁ NHÂN CUỐI KHÓA (DEMO DAY)
1. *"Tại sao trong bài API em không dùng `Boolean(query)` để lọc dữ liệu?"* $\rightarrow$ Mong đợi: Học sinh giải thích được chuỗi `"false"` trong JS vẫn là truthy.
2. *"Nếu anh nhập tiêu đề 81 ký tự hoặc toàn dấu cách, app của em xử lý thế nào?"* $\rightarrow$ Mong đợi: Học sinh chỉ vào đoạn code validation và ca test tương ứng.
3. *"Đoạn code này AI viết hay em viết? Nếu xóa dòng này thì app có chết không?"* $\rightarrow$ Khẳng định nguyên tắc: **Code em không giải thích được thì không phải code của em**.
