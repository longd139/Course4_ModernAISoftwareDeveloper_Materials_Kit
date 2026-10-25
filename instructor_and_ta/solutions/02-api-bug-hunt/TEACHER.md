# Đáp án
Starter: 12 tests, 7 fail / 5 pass. Solution: 12 pass (11 unit/domain + 1 HTTP scenario).
B1 Boolean('false') bằng true vì chuỗi không rỗng. Parse query.done === 'true'.
B2 chỉ số bắt đầu (page-1)*limit. Sửa phân trang trước giúp nhìn rõ lỗi B1.
B3 so task.ownerId với userId trước khi xóa. Chặn ở server, không chỉ ẩn nút UI.
HTTP scenario kiểm chứng status và vòng đời tạo/xóa qua server thật trên cổng tạm.
Không diễn giải 401 demo là auth an toàn. Hai id là nhân vật hư cấu chọn bằng header.
Mục tiêu nâng cao: thay danh tính demo bằng session thật, DB riêng cho test, test chéo 2 user.
