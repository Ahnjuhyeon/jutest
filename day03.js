/*3. 배열 다루기
당신이 구현하고하자 하는 함수는  
배열과 정수를 파라미터로 전달 받습니다. 함수 이름은 정해지지 않았으니 마음대로 하셔도 괜찮습니다. 
전달받은 배열은 정확히 각 요소마다 값을 10을 더 합니다. 이후 값이 10씩 더해진 배열에서, 
나머지 파라미터로 전달받은 정수가 있는지 확인하여
값이 없다면 콘솔에 검사하고자 하는 값이 없다는 로그를 보인 후 함수를 종료하세요
값이 있다면 해당 숫자를 제외한 배열을 반환하는 함수를 만드세요. 
최종 목표
1. 해당 함수는 배열과 검사하고자 하는 수를 파라미터로 전달 받습니다. 
2. 해당 함수는 배열의 각 요소에 10을 더한 후 검사하고자 하는 수가 있는지 검사합니다. 
3. 만약 값이 없다면 결과값이 없습니다를 콘솔에 로그합니다. 
4. 값이 있다면 검사하고자하는 수를 제외한 배열을 반환합니다. 
5. 값이 없을 때 console.log에 undefined가 찍혀서는 안됩니다. 
ex)
const arr = [1,2,3,4,5]
const a =함수명(arr, 11)
console.log (a)
결과값
[12,13,14,15] ( 값 있음 ) 
”결과값이 없습니다“ ( 값 없음 )
-----------------------------------------------------------------------------
*/
// const name = "ju";
// console.log(name === "juhyeon" ? "yes" : "no");

//이게뭔데엥..

// 6/18 19일 째
/*
function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const a = map(arr, (item) => {
  return item + 10;
});
console.log(a);
*/

function random(arr, test) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 10);
    // result.shift();
  }
  for (let i = 0; i < arr.length; i++) {
    if (test === test) return result.slice(1);
    // 요기부터 내일 필터로 다시 해보자!

    if (result[i] === test) return " 값이 있음";
  }
  return " 값이 없음";
}
const arr = [1, 2, 3, 4, 5];
const a = random(arr, 11);
console.log(a);
