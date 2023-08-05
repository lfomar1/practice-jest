function caesarCipher(inputString, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char === " ") {
      result += " ";
    } else {
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toLowerCase());
      const shiftedIndex = (index + shift) % 26;
      const shiftedChar = isUpperCase
        ? alphabet[shiftedIndex].toUpperCase()
        : alphabet[shiftedIndex];
      result += shiftedChar;
    }
  }

  return result;
}

module.exports = caesarCipher;
