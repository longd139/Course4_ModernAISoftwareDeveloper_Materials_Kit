// Quy tắc nghiệp vụ: phí vận chuyển và mã giảm giá. Tiền tệ: VND, số nguyên.

function assertAmount(n) {
  if (!Number.isFinite(n) || n < 0) throw new RangeError("subtotal must be a non-negative number");
}

export function shippingFee(subtotal, country) {
  assertAmount(subtotal);
  if (country !== "VN") return 150_000;
  return subtotal >= 500_000 ? 0 : 30_000;
}

export function applyCoupon(subtotal, code) {
  assertAmount(subtotal);
  if (String(code).trim().toUpperCase() !== "SAVE10") return subtotal;
  return subtotal - Math.min(Math.round(subtotal * 0.1), 50_000);
}
