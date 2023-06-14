// 1. 가장 큰 값 구하기
// 함수의 이름은 maxValue 입니다. 인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다. 배열로 전달받은 숫자 중 가장 큰 숫자와
// 숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다.
//  const a = maxvalue([1,2,3,4,5])
//  console.log(a)
//  결과값
//  {
//  maxValue: 5,
//  sortArr = [5,4,3,2,1]
//  }
// let array = [1, 2, 3, 4, 5];
// let a = Math.max.apply(null, array);
// console.log(a);

// 6/13 문제풀이 시작
// const nums = [3, 1, 5, 2, 4, 20];
// nums.sort();
// console.log(nums); //[1, 2, 20, 3, 4, 5]

// nums.sort(function (a, b) {
//   return b - a; // 여기만 순서를 바꿔줬습니다.
// });
// console.log(nums); //[20, 5, 4, 3, 2, 1]

// 6/14 문제풀이 시작
// const a = maxvalue([1, 2, 3, 4, 5]);
// let b = Math.max.apply(null, array);

// console.log(a);
// console.log(b);

// 배열은 하나의 저장공간에 여러가지가 담긴다
// []비어있는 배열
// 배열의 요소갯수를 알려주는 기능 렝스

// []인덱스번호
// 언시프트 배열의 가로안에 수를 맨처음에 끼여넣는것 4

// 팝 배열의 맨 마지막 값을 삭제

// 슬라이스 지정한 임의의 수

/*---------

maxValue([2, 5, 1, 3, 4]);
let sortArr = [];  -> 새로운 정의
i 는 인덱스 
  for (i = 0; i <= a.length; i++) {
a[i] > a [i+1] --> a[0] > a[0+1]  -> a[0]은 sortArr = [];의 첫번째 자리의 0  i가 3이면 []의 네번째 자리의 위치  
a[(i=0)2] > a[0+1] --> 2 > 5 // f 이므로 , 아래의
else if (a[i] > a[i + 2]) { 
      sortArr.unshift(i);  넘어간다  
마찬가지로 대입했을때, a[0] > a[0+2] -> 2 > 1//t 이므로 ,
sortArr.unshift(i); (unshift=> 배열의 맨 앞으로 간다.)  
다시 처음로 돌아가서  같은 방법으로 내려올때에는 i++ (+1)씩 내림차순으로 
내려오면 ... 결과값인 
sortArr = [5,4,3,2,1,0] 이 나온다

  sortArr.pop(); --> pop은 맨 뒤에 값을 삭제한다 (=0 삭제)
  let bigNum = sortArr[0];  --> bigNum은 새로운 변수 가장 큰 숫자를 sortArr[0]; 인덱스 맨 처음에 둔다 (=5)

  let b = {
    maxValue: bigNum,
    sortArr: sortArr.slice(0),
  };                            --> : 은 = 이거랑 같은 의미이다.    maxValue = bigNum  sortArr=sortArr.slice(0),
                                      slice(0)는 0 번부터 숫자 배열

return console.log(b);  --> 실행문, 지금까지 위에 적어두었던 내용은 선언!!문 return 을 사용하거나 또는, 
밖에다가 console.log(b); 를 따로 써주야함 /걍 리턴,,해

const c = maxValue([2, 5, 1, 3, 4]); 이게 있어야 선언이 가능
--------*/
function maxValue(a) {
  let sortArr = [];
  for (i = 0; i <= a.length; i++) {
    if (a[i] > a[i + 1]) {
      sortArr.unshift(i);
    } else if (a[i] > a[i + 2]) {
      sortArr.unshift(i);
    } else if (a[i] > a[i + 3]) {
      sortArr.unshift(i);
    } else if (a[i] > a[i + 4]) {
      sortArr.unshift(i);
    } else {
      sortArr.unshift(i);
    }
  }
  sortArr.pop();
  let bigNum = sortArr[0];

  let b = {
    maxValue: bigNum,
    sortArr: sortArr.slice(0),
  };

  return console.log(b);
}

const c = maxValue([2, 5, 1, 3, 4]);
console.log(c);
// console.log(c);
