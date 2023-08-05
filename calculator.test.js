const Calculator = require("./calculator");

test("multiply the values", () => {
  expect(Calculator.multiply(2, 2)).toBe(4);
});
test("divide the values", () => {
  expect(Calculator.divide(4, 2)).toBe(2);
});
test("substract the values", () => {
  expect(Calculator.substract(2, 2)).toBe(0);
});
test("sum the values", () => {
  expect(Calculator.sum(2, 2)).toBe(4);
});
