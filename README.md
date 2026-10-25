# SRC FINAL: BỘ CÔNG CỤ TỔNG HỢP GIẢNG DẠY & TRỢ GIẢNG AI (THE ULTIMATE AI TEACHING KIT)
> **Dự án: The Modern AI Software Developer (Course 4)**  
> **Nguyên tắc bảo mật:** ĐÁP ÁN CHỈ LƯU TẠI THƯ MỤC CỦA GIẢNG VIÊN & TRỢ GIẢNG (`instructor_and_ta/`). HỌC SINH CHỈ NHẬN GÓI BÀI TẬP VÀ PHIẾU HỌC TẬP SẠCH (`student_kit/`).

---

## 1. CẤU TRÚC TỔNG QUAN

Bộ công cụ này kết hợp trọn vẹn điểm mạnh của cả 3 nguồn (src 1, src 2, src 3):
* **Cứu hộ kỹ thuật trong 10 giây** (từ `src 1`): Xử lý ngay các lỗi PowerShell, Port, Git CRLF trên Windows.
* **Kịch bản sư phạm phản biện & Bắt bài AI gian lận** (từ `src 2`): Kịch bản live demo, timeline từng phút, bộ câu hỏi chất vấn sinh viên, lab kiểm tra mutation testing.
* **Cấu trúc phân hóa trình độ & Đóng gói sạch** (từ `src 3`): Phân cấp 4 độ khó, đề xuất 2 khung giờ (10 buổi × 120' hoặc 20 buổi × 90'), file zip phát riêng cho học sinh không chứa đáp án.

```text
src final/
├── README.md                                  # Hướng dẫn điều hướng tổng quan (file này)
├── 01_DANH_GIA_VA_CHIEN_LUOC.md               # Đánh giá sư phạm, độ khó từng buổi, tiếp thu gì, cách đo
├── HUONG_DAN_SU_DUNG_SRC_FINAL.docx           # Tài liệu Word chuẩn xuất bản docx-skill
├── HUONG_DAN_SU_DUNG_SRC_FINAL.md             # Hướng dẫn sử dụng & bản đồ đối chiếu
├── student_kit.zip                            # File nén sạch gửi trực tiếp cho học sinh qua Zalo/Drive
│
├── instructor_and_ta/                         # DÀNH CHO GIẢNG VIÊN & TA (TUYỆT ĐỐI KHÔNG GỬI HỌC SINH)
│   ├── 01_TA_EMERGENCY_CHEATSHEET.md          # Cứu hộ lỗi Windows, PowerShell, Port, Node trong 10 giây
│   ├── 02_TA_CLASSROOM_PLAYBOOK.md            # Kịch bản đứng lớp, live demo 8', câu hỏi đi vòng lớp
│   ├── 03_GIAO_AN_VA_KE_HOACH_GIANG_DAY.md    # Giáo án chi tiết (Khung 10 buổi × 120' & 20 buổi × 90')
│   ├── 04_DAP_AN_VA_GIAI_THICH_CHI_TIET.md    # Rubric chấm điểm, giải thích mã lỗi, câu hỏi miệng
│   └── solutions/                             # Mã nguồn lời giải hoàn chỉnh (100% tests pass)
│       ├── 01-prompt-board/                   # Lời giải web board + localStorage (8/8 tests pass)
│       ├── 02-api-bug-hunt/                   # Lời giải 5 lỗi logic & bảo mật API (12/12 tests pass)
│       ├── 03-diff-review/                    # Lời giải sửa 9 lỗi do AI sinh (10/10 tests pass)
│       ├── 04-test-cheat-honest/              # Lời giải hàm pricing & coupon chuẩn (8/8 tests pass)
│       ├── 04-test-cheat-demo/                # Bản demo AI gian lận test để thầy chiếu lớp
│       ├── 05-agent-safety-evals/             # Lời giải kiểm tra an toàn tool AI (15/15 tests pass)
│       └── 06-agent-loop-lab/                 # Lời giải phanh an toàn cho agent (8/8 tests pass)
│
└── student_kit/                               # GÓI PHÁT CHO HỌC SINH (CHỈ CÓ ĐỀ BÀI VÀ CODE KHỞI TẠO)
    ├── START_HERE.md                          # Hướng dẫn học sinh bắt đầu trong 3 phút (zero npm install)
    ├── PHIEU_HOC_TAP.md                       # Phiếu học tập cá nhân trước và sau buổi học
    └── exercises/                             # Các bài thực hành phân cấp độ
        ├── 01-prompt-board/                   # Cấp 1: Giao diện trực quan trên browser, localStorage
        ├── 02-api-bug-hunt/                   # Cấp 2: Săn lỗi API (phân trang, boolean, quyền sở hữu)
        ├── 03-diff-review/                    # Cấp 2: Đọc git diff bắt lỗi AI bịa code
        ├── 04-test-cheat/                     # Cấp 2: Bắt AI sửa code bằng unit test chặt chẽ
        ├── 05-agent-safety-evals/             # Cấp 3: Kiểm soát quyền thực thi và giới hạn bước của Tool
        └── 06-agent-loop-lab/                 # Cấp 3: Tự code vòng lặp an toàn và cơ chế xin phép cho AI
```

---

## 2. HƯỚNG DẪN DÀNH CHO TRỢ GIẢNG (TA) THEO TRỤC THỜI GIAN

### 🕒 Trước ngày lên lớp (T-2 ngày)
1. Đọc kỹ file [01_TA_EMERGENCY_CHEATSHEET.md](file:///d:/FPT/project/Course_4/src%20final/instructor_and_ta/01_TA_EMERGENCY_CHEATSHEET.md) và lưu sẵn trên điện thoại/máy tính bảng.
2. Gửi file `student_kit.zip` cho học sinh trước buổi học kèm yêu cầu: Cài đặt Node.js (phiên bản 20 hoặc 22) và kiểm tra lệnh `node -v` trên terminal.
3. Không gửi bất kỳ tài liệu hay mã nguồn nào trong thư mục `instructor_and_ta/`.

### 🕒 Trong giờ học (120 phút hoặc 90 phút)
* **0–20' (Concept):** Giảng viên demo trên máy chiếu theo kịch bản [02_TA_CLASSROOM_PLAYBOOK.md](file:///d:/FPT/project/Course_4/src%20final/instructor_and_ta/02_TA_CLASSROOM_PLAYBOOK.md). TA quan sát xem học sinh nào chưa mở được Terminal.
* **20–30' (Bắt đầu Lab):** Đi vòng quanh các bàn, bảo đảm 100% học sinh mở được bài tập và chạy `npm test`. Nếu máy bị chặn PowerShell hoặc trùng cổng, rút ngay CheatSheet sửa trong 10 giây.
* **30–75' (Làm bài):** Bắt lỗi hành vi: Nếu thấy học sinh bấm `Accept/Yes` liên tục cho AI chạy mà không đọc diff, dừng lại và chất vấn: *"Cho anh/chị xem git diff? Lệnh này làm gì?"*.
* **75–90' (Demo & Exit Ticket):** Mời 1 nhóm làm tốt và 1 nhóm bị AI "bịa code" lên chia sẻ bài học. Thu phiếu học tập [PHIEU_HOC_TAP.md](file:///d:/FPT/project/Course_4/src%20final/student_kit/PHIEU_HOC_TAP.md).

---

## 3. NỀN TẢNG KỸ THUẬT: ZERO SETUP
Tất cả các bài tập trong `src final` đều chạy trên **Node.js tiêu chuẩn (>=20/22) với bộ test có sẵn (`node --test`)**.
* **Không cần `npm install`** (không kéo mạng, không kẹt proxy, không lỗi dependencies).
* Mỗi bài tập chỉ cần 2 lệnh duy nhất:
  ```bash
  npm test    # Chạy kiểm thử tự động
  npm start   # Khởi động ứng dụng (với các bài có giao diện hoặc server)
  ```
