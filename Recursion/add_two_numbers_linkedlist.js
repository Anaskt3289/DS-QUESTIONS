/* Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
and each of their nodes contains a single digit.Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

const addTwoNumbers = (l1, l2) => {
    // Start the recursion with an initial carry of 0.
    return addRec(l1, l2, 0);
};
const addRec = (l1, l2, carry) => {
    // 🛑 Base Case: Stop recursion when both lists are exhausted AND there is no carry.
    if (!l1 && !l2 && carry === 0) {
        return null;
    }

    // Get the value of the current digit. Use 0 if the list is null (i.e., digits are finished).
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // 🧮 Math: Perform the sum with the current carry.
    const sum = val1 + val2 + carry;

    // Calculate the value for the current node (the digit at this position).
    const currentVal = sum % 10;
    // Calculate the new carry to be passed to the next recursive call.
    const newCarry = Math.floor(sum / 10);

    // Create the new node for the current sum digit.
    const newNode = new ListNode(currentVal);

    // 🔁 Recursive Step: Call the function for the next nodes and link the result.
    // Move to the next node in the respective lists, or pass null if done.
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;

    newNode.next = addRec(next1, next2, newCarry);

    // Return the head of the current sublist (the node we just created).
    return newNode;
};

//NOT CLEAR - THIS AI ANSWER