'use strict';

const {Stack, Queue} = require('../challenges/stacks-and-queues/stacks-and-queues.js');
const stack = new Stack;
const queue = new Queue;


describe('Stack functionality', () => {
  test('can successfully push onto a stack', () => {
    stack.push('test');
    expect(stack.top.value).toEqual('test');
  });
  test('can successfully push multiple values off the stack', () => {
    stack.push(2);
    stack.push({lookhere: 'hello!'});
    expect(stack.top.value.lookhere).toBe('hello!');
  });
  test('can successfully pop off the stack', () => {
    stack.pop();
    expect(stack.top.value).toBe(2);
  });
  test('can successfully empty a stack after multiple pops', () => {
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });
  test('can successfully peek the next item on the stack', () => {
    stack.push(1);
    expect(stack.peek()).toHaveProperty('value', 1);
  });
  test('can successfully instantiate an empty stack', () => {
    let emptyStack = new Stack;
    expect(emptyStack).toBeDefined();
    expect(emptyStack).toHaveProperty('top', null);
    expect(emptyStack.isEmpty()).toBeTruthy();
    emptyStack.push(1);
    expect(emptyStack.isEmpty()).toBeFalsy();
  });
});

describe('Queue functionality', () => {
  test('can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.rear.value).toEqual(1);
  });
  test('can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.next.value).toBe(2);
    expect(queue.rear.value).toBe(3);
  });
  test('can successfully dequeue out of a queue the expected value', () =>{
    queue.dequeue();
    expect(queue.front.value).toBe(2);
  });
  test('can successfully peek into a queue and see the expected value', () => {
    expect(queue.peek()).toHaveProperty('value', 2);
  });
  test('can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });
  test('can successfully instantiate an empty queue', () => {
    let newQueue = new Queue;
    expect(newQueue).toBeDefined();
    expect(newQueue).toHaveProperty('front', null);
    expect(newQueue).toHaveProperty('rear', null);
    expect(newQueue.isEmpty()).toBeTruthy();
    newQueue.enqueue(1);
    expect(newQueue.isEmpty()).toBeFalsy();
  });
});
