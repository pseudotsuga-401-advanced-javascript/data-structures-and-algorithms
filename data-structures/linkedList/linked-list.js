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
    if(targetValue === current.value){
      node.next = this.head;
      this.head = node;
    }
    else {
      while(current.next.value !== targetValue){
        current = current.next;
      }
    }
    node.next = current.next;
    current.next = node;
  }

  insertAfter(targetValue, newVal){
    const node = new Node(newVal);
    let current = this.head;
    while(current.value !== targetValue){
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  
  delete(targetValue){
    let current = this.head;
    if(current.value === targetValue){
      this.head = current.next;
    }
    else{
      while(current.next.value !== targetValue){
        current = current.next;  
      }
      current.next = current.next.next;
    }
  }
}

module.exports = {Node: Node, LinkedList: LinkedList};