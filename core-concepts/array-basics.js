// Core Concepts: Data Structures, Algorithms, and Interview Tricks

// 1. Arrays
var array=[1,2,3,4,5];
for(let i=0; i<array.length; i++){
    
    console.log(array[i])
}

// 2. Linked List
class ListNode{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

let node1=new ListNode(1);
let node2=new ListNode(2);
node1.next=node2;

console.log(node1.value);
console.log(node1.next.value);