const caesarCipher = require("./caesarCipher");
test("Testing the caeser cipher method", () => {
  expect(caesarCipher("TEST CAESER CIPHER", 1)).toEqual("UFTU DBFTFS DJQIFS");
});
