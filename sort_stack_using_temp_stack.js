function sortStack(stack) {
  let tempStack = [];

  while (stack.length > 0) {
    let temp = stack.pop();

    while (
      tempStack.length > 0 &&
      tempStack[tempStack.length - 1] > temp
    ) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}

let stack = [3, 1, 4, 2];

console.log(sortStack(stack));

//time complexity O(n²)
//space complexity O(n)