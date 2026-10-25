# Đáp án
Starter 15 tests: 6 fail / 9 pass. Solution 15 pass.
T1 kiểm tra call.name === 'read_document'. T2 dùng allowlist hai key, không dùng `key in docs` vì prototype cũng có thể khớp.
T3 kiểm tra maxSteps nguyên 1..10 và từ chối plan dài trước khi map executeTool.
Hai ca E09/E10 bắt lỗi prototype/ép kiểu, hữu ích hơn chỉ thử happy path.
Nói rõ: eval 10 trường hợp dữ liệu + 5 test bổ sung, không phải 15 lần gọi mô hình.
Không sử dụng score này để tuyên bố một agent/LLM an toàn ngoài đời.
