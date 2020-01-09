function insertShiftArray(arr, addedValue){
  let newArr = [];
  let midpoint = arr.length / 2;
  if(midpoint % 2 !== 0) midpoint + 0.5;
  for(let i = 0; i < arr.length; i++){
    i < midpoint ? newArr += arr[i]:
    i === midpoint ? (newArr += addedValue, newArr += arr[i]) :
    newArr += arr[i];
  }
  return newArr;
}

function removeShiftArray(arr){
  let newArr = [];
  let midpoint = arr.length / 2;
  if(midpoint % 2 !== 0) midpoint + 0.5;
  for (let i = 0; i < arr.length - 1; i++){
    i < midpoint ? newArr[i] = arr[i]:
    newArr[i] = arr[i + 1];
  }
  return newArr;
}