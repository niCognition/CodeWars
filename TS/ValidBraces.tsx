/**
 * Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
 * This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
 * All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
 */

export function validBraces(braces: string): boolean {
  const stack: string[] = [];

  const braceMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of braces) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if ([")", "]", "}"].includes(char)) {
      if (stack.length === 0 || stack.pop() !== braceMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}