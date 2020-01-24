# Linked Lists

# Linked List Insertions

# Challenge Summary
Insert nodes into a linked list with some slight variations. 

## Challenge Description
Append a node to the of a linked list, insert a node before a given target value, and insert a node after a given target value. As a stretch, remove a node with a given target value. 

## Approach & Efficiency
The append method will always have a time complexity of O(n) because the entire linked list must be traversed in order to add the node to the end (an O(1) operation), the other three methods are O(n) in the worst case but they do have the capability of returning earlier. The common approach to all of these methods is to "forecast" the position of a target value, be it an actual integer or null representing the end of the list, and then changing the reference pattern of the surrounding nodes accordingingly so that they are removed from the linked list. 

## Solution
Ran out of time and didn't do a whiteboard process for this challenge.