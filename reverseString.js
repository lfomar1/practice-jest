const reverseString = (string) => {
  const newString = string.split("");
  const reverseStringSplit = newString.reverse();
  return reverseStringSplit.join("");
};
console.log(reverseString("lucas"));
module.exports = reverseString;
