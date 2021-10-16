/*
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *   1. Open brackets must be closed by the same type of brackets.
 *   2. Open brackets must be closed in the correct order.
 */

/*
 ? s consists of parentheses only '()[]{}'. 
 */

/*
 * Example
 * "()"     -> true
 * "()[]{}" -> true
 * "(]"     -> false
 * "([)]"   -> false
 * "{[]}"   -> true
 */

const testcases = ["()", "()[]{}", "(]", "([)]", "{[]}", undefined, "{", "(("];

const getParenType = (s) => {
  if (["(", "{", "["].includes(s)) return "open";
  return "close";
};

const isSameType = (open, close) => {
  if (open === "(" && close === ")") return true;
  else if (open === "{" && close === "}") return true;
  else if (open === "[" && close === "]") return true;

  return false;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  try {
    if (s.length <= 1) throw false

    const arr = s.split("");
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
      const type = getParenType(arr[i]);

      if (type === 'close') {
        if (stack.length <= 0) throw false
        if (!isSameType(stack[stack.length - 1], arr[i])) throw false

        stack.pop()
      } else {
        stack.push(arr[i])
      }
    }

    if (stack.length !== 0) throw false

    return true;
  } catch {
    return false;
  }
};

testcases.forEach((testcase) => {
  console.table({
    testcase,
    isValid: isValid(testcase),
  });
});


// WAY SIMPLER CODE

// var isValid = function(s) {
//   var stack = [];
//    let map = {
//       "(": ")",
//       "[": "]",
//       "{": "}",
//     };
//   for(let i = 0; i < s.length; i++){
//       if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
//           stack.push(s[i]);
//       } else{
//           if(map[stack.pop()] != s[i]) return false;
//       }
//   }
//   return stack.length === 0;
// };