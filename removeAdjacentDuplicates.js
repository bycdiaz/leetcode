// Given a string S of lowercase letters, a duplicate removal consists
// of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been
// made.  It is guaranteed the answer is unique.


function removeDuplicates(S) {
  const stringStack = [];

  for (const letter of S) {
    const lastInStack = stringStack[stringStack.length - 1];
    
    if (letter === lastInStack) {
      stringStack.pop();
    } else {
      stringStack.push(letter);
    }
  }

  return stringStack.join('');
};

console.log(removeDuplicates("abbaca"));
// "ca"
