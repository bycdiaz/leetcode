// Given a string S, return the "reversed" string where all characters that are
// not a letter stay in the same place, and all letters reverse their positions.

function reverseOnlyLetters(S) {
  const stringArray = S.split('');
  let leftIndex = 0;
  let rightIndex = stringArray.length -1;

  while (leftIndex <= rightIndex) {
    const currentLeft = stringArray[leftIndex];
    const currentRight = stringArray[rightIndex];
    
    if (!(/[a-zA-Z]/).test(currentLeft)) {
      leftIndex++;
      continue;
    }
    if (!(/[a-zA-Z]/).test(currentRight)) {
      rightIndex--;
      continue;
    }

    const temp = stringArray[leftIndex];
    stringArray[leftIndex] = stringArray[rightIndex];
    stringArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return stringArray.join('');
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
// "j-Ih-gfE-dCba"

console.log(reverseOnlyLetters("ab-cd"));
// "dc-ba"
