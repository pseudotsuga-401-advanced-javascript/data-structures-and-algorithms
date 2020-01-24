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
  insertBefore(targetValue, newVal){
    const node = new Node(newVal);
    let current = this.head;
    if(targetValue === current){
      node.next = this.head;
      this.head = node;
    }
    while(current.next.value !== targetValue){
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  insertAfter(targetValue, newVal){
    const node = new Node(newVal);
    let current = this.head;
    while(current.value !==)
  }
}

