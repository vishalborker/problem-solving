var mergeSortedLinkedList = function (ListA, ListB) {
    if (ListA == null) return ListB
    if (ListA == null) return ListA

    if(ListA.data < ListB.data) {
        ListA.next = mergeSortedLinkedList(ListA.next, ListB);
        return ListA;
    } else {
        ListB.next = mergeSortedLinkedList(ListA, ListB.next);
        return ListB;
    }
}