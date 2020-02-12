function fib(){
  let i;
  let arr = [];
  arr.push(0);
  arr.push(1);
  arr.push(1);
  arr.push(2);
  for( i =4; i< 50; i ++ ){
    arr.push(arr[i-1] + arr[i-2]);

  }
  return arr;
}

function numsToStrings(arr){
  let n = [];
  for(; i = 0; i <arr.length; i++){
    n.push(toString())
  }
}
console.log(fib());