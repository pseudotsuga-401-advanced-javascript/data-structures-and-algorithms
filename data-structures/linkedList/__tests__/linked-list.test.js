'use strict';

const {Node, LinkedList} = require('../linked-list.js');

describe('Tests for linked lists', () => {
  test('can successfully add a node to the end of the linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    expect(linkedList.head.next.value).toBe(2);
  });
  test('can succesfully add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.head.next.next.value).toBe(3);
  });
  test('can succesfully insert a node before a node located in the middle fo the a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertBefore(3, 5);
    expect(linkedList.head.next.next.value).toBe(5);
  });
  test('can successfully insert a node before the first node of a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.insertBefore(1, 10);
    expect(linkedList.head.value).toBe(10);
  });
  test('can succesfully insert a node after a node in the middle of a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertAfter(2, 14);
    expect(linkedList.head.next.next.value).toBe(14);
  });
  test('can successfully insert a node after a node at the end of a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertAfter(3, 4);
    expect(linkedList.head.next.next.next.value).toBe(4);
  });
  test('can successfully remove a node with a target value from the front of a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    linkedList.append(3);
    linkedList.delete(1);
    expect(linkedList.head.value).toBe(2);
  });
  test('can successfully remove a node from the middle of a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    linkedList.append(3);
    linkedList.delete(2);
    expect(linkedList.head.next.value).toBe(3);
  });
  test('can successfully remove a node from the end of a linked list', () => {
    let linkedList = new LinkedList(new Node(1));
    linkedList.append(2);
    linkedList.append(3);
    linkedList.delete(3);
    expect(linkedList.head.next.next).toBe(null);
  });
});