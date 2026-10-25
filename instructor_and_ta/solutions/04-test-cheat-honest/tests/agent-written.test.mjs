// Các test "bổ sung" mà agent tự đề xuất khi được hỏi "thêm test case đi". Chúng trông có vẻ nhiều, nhưng... đủ mạnh chưa?
import { test } from "node:test";
import assert from "node:assert/strict";
import { shippingFee, applyCoupon } from "../src/pricing.mjs";

test("shippingFee trả về số", () => assert.equal(typeof shippingFee(100_000, "VN"), "number"));
test("shippingFee đơn lớn nội địa miễn phí", () => assert.equal(shippingFee(2_000_000, "VN"), 0));
test("applyCoupon trả về số không âm", () => assert.ok(applyCoupon(200_000, "SAVE10") >= 0));
test("applyCoupon có giảm giá", () => assert.ok(applyCoupon(200_000, "SAVE10") < 200_000));
test("applyCoupon mã lạ không làm hỏng", () => assert.doesNotThrow(() => applyCoupon(200_000, "NOPE")));
