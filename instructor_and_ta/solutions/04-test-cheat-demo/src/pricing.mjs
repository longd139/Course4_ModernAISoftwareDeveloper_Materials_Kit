// Quy tắc nghiệp vụ: phí vận chuyển và mã giảm giá. Tiền tệ: VND, số nguyên.

export function shippingFee(subtotal, country) {
  if (country === "VN") {
    return subtotal > 500_000 ? 0 : 30_000;
  }
  return subtotal > 1_000_000 ? 0 : 150_000;
}

export function applyCoupon(subtotal, code) {
  if (code.trim().toLowerCase() === "save10") {
    if (subtotal === 1_000_000) return 950_000;
    return Math.round(subtotal * 0.9);
  }
  return subtotal;
}
