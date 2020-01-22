'use strict';

const {Node, Stack, Queue} = require('./stacks-and-queues.js');
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
    expect(emptyStack.top).toBe(null);
  });
});

describe('Queue functionality', () => {
  test('can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.rear.value).toEqual(1);
  });
})
