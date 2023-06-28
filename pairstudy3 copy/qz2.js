/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]

function division() {}
    */
// const arr = Array(80)
//   .fill()
//   .map((_, i) => i + 1);

// console.log(arr);

//나의것;
const arr = [];
for (let i = 1; i <= 80; i++) {
  arr.push(i);
  // console.log(arr);
}
function division() {
  const result = [];
  for (i = 0; i < arr.length; i += 5) result.push(arr.slice(i, i + 5));
  //   += 는 값의 누적이라서 저희가 i+=5로 했으니까 앞에 썼던 i 값에서 5씩 커지는거같아요!
  return result;
}
console.log(division(arr));

//지원님것
function MakeArray() {
  const MakeArrays = [];
  for (i = 1; i <= 80; i++) {
    MakeArrays.push(i);
  }
  return MakeArrays;
}
const NumberArray = MakeArray();

//-----------------division 함수를 만들어보자!-------

function division(arr) {
  const result = [];

  while (arr.length > 0) {
    let tempArray = arr.splice(0, 5);
    result.push(tempArray);
  }
  /*for문일때
  for (i = 1; i < arr.length; i += 5) {
    let tempArray = arr.slice(i, i + 5);

    result.push(tempArray);
  }
  */
  return result;
}

const result = division(NumberArray);
console.log(result);

//slice 지원님께서 제공!!
/*
i=0 arr.slice(0,5) //1,2,3,4,5
i=5 arr.slice(5,10) //6,7,8,9,10
i=10 arr.slice(10,15)//11,12,13,14,15
    ...
i=75 arr.slice(75,80)//76,77,78,79,80
    arr.length가 80이기때문에 i=80 x
    만약 i<=arr.length라면 i=80 은 비어있기때문에 [] 빈배열 반환
    */
