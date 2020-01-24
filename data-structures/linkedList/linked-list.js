'use strict';

class Node{
  constructor(value = null, next = null){
    this.value =value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head;
  }
  append(value){
    const node = new Node(value);
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = node;
  }
}

