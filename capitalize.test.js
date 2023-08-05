const capitalize = require("./capitalize");
test("Capitalize first letter of any word", () => {
  expect(capitalize("lucas")).toBe("Lucas");
});
