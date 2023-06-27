/*
4. 짝수와 홀수의 개수 구하기
숫자로 된 배열을 파라미터로 받는 함수 solution이 있습니다. 이 솔루션은 파라미터로 전달받은 함수에서 짝수와 홀수의 개수를 배열로 반환합니다.
최종목표
1. 함수 solution을 숫자 배열을 파라미터로 받는다.
2. 배열 중 짝수와 홀수를 각각 구분하여 길이를 구한다.
3. 길이를 구한 후 각각의 개수를 요소로 담은 배열을 반환한다.
 단, 요소의 순서는 짝수, 홀수 순이다. ex)
const arr = [1,2,3,4,5]
const a = solution(arr)
console.log(a)
 결과값
[2,3]
[짝수의 개수, 홀수의 개수]
*/
//6/18문제풀이  성공

// function solution(arr) {
//   let a = 0;
//   let b = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       a++;
//     } else {
//       b++;
//     }
//   }
//   return [a, b];
// }

// const arr = [1, 2, 3, 4, 5];
// const a = solution(arr);
// console.log(a);

//6/20 필터사용 해봐야징잉 지원님 덕분에 성공
function solution(arr) {
  let a = arr.filter((item) => item % 2 === 0);
  let b = arr.filter((item) => item % 2 === 1);
  return [a.length, b.length];
}

const arr = [1, 2, 3, 4, 5];
const a = solution(arr);
console.log(a);

/*
for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    // continue;
    console.log(`답.${i}`);
  }
}
//이거 아닌디.. 도움이 되려나 .. 강의에서 보고.. 따라 적어보옴..
*/
