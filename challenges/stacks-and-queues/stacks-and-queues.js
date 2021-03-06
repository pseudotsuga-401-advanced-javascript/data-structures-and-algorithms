'use strict';

class Node {
  constructor(value, next = null){
    this.next = next;
    this.value = value;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  peek(){
    return this.top;
  }
  pop(){
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp;
  }
  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  isEmpty(){
    if(!!this.top){
      return false;
    }
    else{
      return true;
    }
  }
}

class Queue {
  constructor(front = null, rear = null){
    this.front = front;
    this.rear = rear;
  }
  enqueue(value){
    let node = new Node(value);
    if(!this.rear){
      this.front = node;
      this.rear = node;
    }
    else{
      this.rear.next = node;
      this.rear = node;
    }
  }
  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp;
  }
  peek(){
    return this.front;
  }
  isEmpty(){
    if(!!this.front){
      return false;
    }
    else{
      return true;
    }
  }
}

module.exports = {Node: Node, Stack: Stack, Queue: Queue};
