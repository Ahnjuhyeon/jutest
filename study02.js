//혼자 풀어보기..
//는 잘안되니까 문제풀이 보고라도 이해해보기

/*
1번 문제
전화번호 가리기 
010 1234 1234 => 010 **** 1234
번호 input 어떤 것이든 들어가도 위와 같은 결과가 나와야한다
010 0000 00000 => 010 **** 0000
*/

const num = "010-1234-1234";

function hashNum(num) {
  const hashNumber = num.split("-"); //num.split => 문자열을 배열로 바꿔줌
  hashNumber[1] = "****";
  return hashNumber.join("-"); // 배열로 바뀐 hashNumber을 다시 문자열로 바꿔서 리턴
}

console.log(hashNum(num));

//2번 문제 혼자 이해하면서 설명추가

const userNumbers = genertaedUserNumber();
const winningNumbers = [6, 18, 28, 30, 32, 38, 15];

function genertaedUserNumber() {
  const numbers = Array(7)
    .fill()
    .map(() => Math.floor(Math.random() * 45 + 1));

  //flii 원하는 value의 값을 배열의 요소에 대신 채우는것
  //Math.floor 안하면 소수점 까지 나와서

  // new Set();
  // 중복번호 --> 예외상황
  // 중복 번호를 제거할 수 있는 방법은 무엇이 있을까? --> 구글링 해보자
  // 배열 내 중복된 요소를 제거하는 방법 --> 재사용

  const lotto = new Set();
  //해쉬 테이블로 검색 및 추가가 굉장히 빠르고 중복된 데이터의 저장을 허용하지 않습니다.

  //   for (let i = 0; lotto.size <= 6; i++) {
  //     const randomNumber = Math.floor(Math.random() * 45) + 1;
  //     lotto.add(randomNumber)
  //   }
  // size = number
  //요소의 길이(반복횟수)가 명확하지 않기 때문에 반복문 사용
  while (lotto.size <= 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    lotto.add(randomNumber);
    //add 가장 끝에 요소 추가
  }
  //set ->  유사배열객체  -> Array.from
  // + Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
  return Array.from(lotto);
}
console.log(userNumbers);

const lottery = (numberArray) => {
  //내가 작성한 로또번호와 실제 당첨 로또 번호를 비교해야하는데
  // 보너스 , 실제 당첨번호, 보너스를 맞췄는지 비교할 flag, 맞춘갯수

  let rank = "미당첨";
  let winningCoumt = 0;
  let bonusNum = winningNumbers.pop();
  let bonusflag = false;
  //bonusNum 변수에는 보너스 번호가 담기고
  // 실제 당첨번호는 보너스를 제외한 번호들의 집함

  //실제 당첨번호에서 내가 몇개 당첨했는지
  //내 당첨 번호를 순회하여 내가 뽑은 번호가 실제 당첨 번호에 포함되어 있는지 확인
  // 배열을 순회하여 해당 배열 내 요소가 다른 배열 내 요소에 포함되어 있는지 확인

  for (let num of numberArray) {
    if (winningNumbers.includes(num)) {
      winningCoumt++;
    }
  }
  if (numberArray.includes(bonusNum)) {
    bonusflag = true;
  }
  switch (winningCoumt) {
    case 6:
      rank = 1;
      break;
    case 5:
      if (bonusflag) {
        rank = 2;
      } else {
        rank = 3;
      }
      break;
    case 4:
      rank = 4;
      break;
    case 3:
      rank = 5;
      break;
  }
  return rank;
};
