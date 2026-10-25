# Đáp án và cách dẫn
Starter: 8 tests, 6 fail / 2 pass. Solution: 8 pass.
B1 sửa validateTitle: kiểm tra kiểu, trim, chặn rỗng và dài hơn 80, trả thông báo lỗi.
B2 sửa remaining: filter status !== 'done'.
Không nhận “AI bảo đúng” làm giải thích. Hỏi: với 2 done và 1 todo thì kết quả là gì?
Kiểm thử UI thêm: nhập <img src=x onerror=alert(1)> để xác nhận chỉ hiển thị chữ, reload, đổi trạng thái, dùng Tab.
localStorage có thể bị chặn, UI có báo lỗi lưu. Đây là bài thực hành một máy, không phải app dùng chung cả lớp.
