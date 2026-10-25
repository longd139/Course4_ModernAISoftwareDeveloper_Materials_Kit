# 02. KỊCH BẢN ĐỨNG LỚP & SỔ TAY SƯ PHẠM CHO TRỢ GIẢNG (TA CLASSROOM PLAYBOOK)
> **Mục tiêu tối thượng của TA:** Để học sinh tự làm, tự vấp ngã và tự phát hiện ra lỗi. TA chỉ đóng vai trò người khơi gợi tư duy và gỡ rối kỹ thuật.

---

## 1. BỐN NGUYÊN TẮC VÀNG VỀ VAI TRÒ CỦA TRỢ GIẢNG (TA)

1. **TUYỆT ĐỐI KHÔNG GÕ CODE HỘ:**
   * Khi học sinh giơ tay, TA đứng cạnh, chỉ tay vào màn hình và đặt câu hỏi.
   * Nếu bắt buộc phải gõ, **chỉ gõ lệnh sửa môi trường** (như `Set-ExecutionPolicy`, `taskkill` hoặc PATH), tuyệt đối không gõ prompt hay viết code thay học sinh.
2. **HỎI TRƯỚC KHI CHỈ DẪN:**
   * Luôn dùng bộ câu hỏi chuẩn:
     * *"Cho anh/chị xem `git diff` xem AI vừa đổi những dòng nào?"*
     * *"Lệnh này làm gì? Em đọc to lên xem?"*
     * *"AI có tự ý thêm biến hay thư viện nào mà em không yêu cầu không?"*
     * *"Em kiểm tra bằng cách nào để biết chắc code này chạy đúng?"*
3. **KHEN NGỢI LỖI BẮT ĐƯỢC:**
   * Mỗi khi học sinh phát hiện ra: *"Anh ơi con AI nó code sai chỗ này!"* $\rightarrow$ Khen ngợi ngay lập tức: *"Rất tốt! Em đã bắt bài được nó!"* và ghi tên bạn đó lại để mời lên demo cuối giờ.
4. **BẢO MẬT ĐÁP ÁN:**
   * Tuyệt đối không phát code trong thư mục `solutions/` cho học sinh trước hoặc trong giờ lab. Chỉ dùng làm tài liệu đối chiếu nội bộ.

---

## 2. KỊCH BẢN LIVE DEMO CỦA GIẢNG VIÊN (PHÚT 0–20, ~8 PHÚT)

Giảng viên mở Terminal trên máy chiếu, cỡ chữ lớn (Zoom 150%), mở thư mục trống và thực hiện 4 bước biểu diễn:

### Bước 1: Demo "Hello World & Xin phép" (2 phút)
* **Prompt gõ vào:**
  > *"Create hello.js that prints 'Hello' and today's date, then run it."*
* **Điểm nhấn sư phạm:** Khi AI hiện hộp thoại xin phép chạy lệnh `node hello.js`, giảng viên dừng lại 10 giây, chỉ vào chữ `[y/n]` và hỏi cả lớp:
  > *"Nếu thầy bấm Yes liên tục mà không đọc lệnh, điều gì sẽ xảy ra nếu nó xin chạy lệnh xóa ổ đĩa `rm -rf`?"*

### Bước 2: Demo "Prompt mơ hồ (Vague Prompt)" (3 phút)
* **Prompt gõ vào:**
  > *"Make me a team task board app"*
* **Điểm nhấn sư phạm:** Khi AI bắt đầu xin tạo hàng chục file và cài đặt thư viện tá lả, giảng viên dừng lại và hỏi:
  > *"Các em nhìn xem, thầy có yêu cầu nó cài các thư viện này không? Nó đang tự suy diễn và bịa ra đấy!"*

### Bước 3: Demo "Phanh khẩn cấp bằng phím ESC" (1 phút)
* Khi AI đang tuôn ra code lan man, giảng viên nhấn phím `Esc` (hoặc `Ctrl + C`). AI dừng ngay lập tức.
* **Thông điệp:** *"Các em là người nắm quyền điều khiển, không phải AI. Thấy nó đi sai hướng thì dập phanh ngay!"*.

### Bước 4: Demo "Bắt bài giả định sai của AI" (2 phút)
* Hỏi AI một câu đơn giản: *"Which version of React did you use?"*.
* Đối chiếu xem câu trả lời của AI có khớp với `package.json` hay không để chứng minh AI có thể trả lời rất tự tin nhưng sai sự thật.

---

## 3. BẢNG CÂU HỎI CHẤT VẤN KHI TA ĐI VÒNG LỚP (LAB TIME)

| Hiện tượng quan sát ở bàn học sinh | Ý nghĩa hành vi | Câu hỏi chất vấn của TA |
| :--- | :--- | :--- |
| Học sinh gõ `y/Enter` liên tục như máy | Bấm mù quáng, không đọc code | *"Dừng lại! Lệnh vừa rồi làm gì? Nó chạy ở thư mục nào?"* |
| Màn hình hiện nhiều file lạ trong `git status` | AI sinh rác lan man | *"Plan lúc nãy của em có những file này không? Tại sao có file này?"* |
| Học sinh gõ prompt chỉ có tính từ (*"làm đẹp, xịn"*) | Prompt mơ hồ | *"Em đã đưa ra số đo kỹ thuật chưa? Tối đa bao nhiêu ký tự? Dữ liệu lưu ở đâu?"* |
| Test vẫn đỏ mà học sinh ngồi nhìn | Bế tắc, không biết đọc lỗi | *"Em đọc dòng chữ đỏ cuối cùng xem nó đang kỳ vọng số mấy và nhận được số mấy?"* |
| Học sinh nói: *"Con AI bảo nó sửa xong rồi"* | Quá tin tưởng AI | *"Nó bảo xong nhưng em đã chạy `npm test` kiểm tra lại chưa?"* |

---

## 4. CHECKLIST QUAN SÁT 5 PHÚT CUỐI GIỜ (DÀNH CHO TA)

Trợ giảng mang theo sổ tay, đánh dấu nhanh theo từng nhóm học sinh:
- [ ] $\ge 80\%$ học sinh trong lớp biết dùng phím `Esc` khi AI đi sai hướng.
- [ ] $\ge 70\%$ học sinh mở `git diff` ra đọc trước khi chấp nhận thay đổi.
- [ ] 100% các nhóm chạy thành công lệnh `npm test` và chỉ ra được ít nhất 1 chỗ AI làm sai.
- [ ] Không có trường hợp nào bị mất code do AI xóa nhầm file (nhờ biết quy tắc `git restore`).
