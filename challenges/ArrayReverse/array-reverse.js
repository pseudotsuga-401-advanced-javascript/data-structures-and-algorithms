'use strict';

const newArray = [];
let counter = 0;

function reverseArray (array){
  for(let i = array.length-1; i >= 0; i--){
    newArray[counter] = array[i];
    counter ++;
  }
  return newArray;
}
