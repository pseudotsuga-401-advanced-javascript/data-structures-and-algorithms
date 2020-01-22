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
});

