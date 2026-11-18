//   while

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }

// function createLinkedList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     for (let num of arr) {
//         current.next = new ListNode(num);
//         current = current.next;
//     }
//     return dummy.next;
// }

// function printLinkedList(head) {
//     let result = [];
//     while (head !== null) {
//         result.push(head.val);
//         head = head.next;
//     }
//     console.log("While Loop Output:", result);
// }

// var addTwoNumbers = function(l1, l2) {
//     let dummyHead = new ListNode(0); 
//     let current = dummyHead;
//     let carry = 0;

//     while (l1 !== null || l2 !== null || carry > 0) {
//         let val1 = l1 ? l1.val : 0;
//         let val2 = l2 ? l2.val : 0;

//         let sum = val1 + val2 + carry;
//         carry = Math.floor(sum / 10);
//         current.next = new ListNode(sum % 10);

//         current = current.next;
//         if (l1) l1 = l1.next;
//         if (l2) l2 = l2.next;
//     }

//     return dummyHead.next;
// };

// let l1 = createLinkedList([2, 4, 3]);
// let l2 = createLinkedList([5, 6, 4]);
// printLinkedList(addTwoNumbers(l1, l2));




// for

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log("For Loop Output:", result);
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    for (; l1 || l2 || carry; l1 = l1?.next, l2 = l2?.next, current = current.next) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
    }

    return dummyHead.next;
};

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
printLinkedList(addTwoNumbers(l1, l2));


