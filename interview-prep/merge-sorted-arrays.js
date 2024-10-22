// Merge Two Sorted Lists

function mergeTwoLists(l1, l2){
    let dummy= new ListNode(0);
    let current=dummy;

    while(l1!==null && l2!==null){
        if(l1.value<l2.value){
            current.next=l1;
            l1=l1.next;
        } else {
            current.next=l2;
            l2=l2.next;
        }
        current=current.next
    }

    current.next= l1 || l2;
    return dummy.next;
}

// Time Complexity: O(n + m)
// Space Complexity: O(1)