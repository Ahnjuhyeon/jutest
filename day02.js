/*
2. 편의점 물건 확인하기
당신은 편의점에서 야간 아르바이트를 하는 학생입니다
당신이 일하는 시간에 편의점에 채워놓을 물건이 들어오며
당신은 재고의 개수와 물품이 맞는지 확인해야 합니다. 일의 순서는 아래와 같습니다. 1. 당신은 아래와 같은 전산표를 전달받습니다. 품목 갯수
야채곱창 5
바나나우유 10
삼각김밥 15
도시락 10
샌드위치 10
2. 당신은 물품을 세어본 후 해당 제품이 표의 갯수와 같은지 확인해야 합니다.
-----------------------------------------------------------
-----------------------------------------------------------
 최종목표
1. 물품명과 갯수를 파라미터로 전달받는 함수를 만듭니다. 함수의 이름은 마음대로 하셔도 괜찮습니다.

 2. 만약 표의 값과 갯수가 일치하지 않는다면 “전산표와 일치하지 않습니다”를 로그 합니다.
 같다면
 “전사표와 일치합니다“를 로그 합니다. 
 3. 전산표에 없는 물건이라면 확인을 위해
 해당 물건의 이름을 콘솔에 로그 합니다. 
 ex) 함수명(물품명, 갯수); 결과값 

 ”전산표와 일치합니다.“ (일치) 
 ”전산표와 일치하지 않습니다.“ (불일치) 
 ”바사삭치킨“ (품목 없음) 
*/

//6/17 다시 문제 풀어보기 => 실패
//6/18 다시 문제 풀어보기 =>스엉공..이지만 왜???????????????

function type(value, item) {
  const menu = {
    야채곱창: 5,
    바나나우유: 10,
    삼각김밥: 15,
    도시락: 10,
    샌드위치: 10,
  };
  const count = menu[item];

  if (!count) return console.log("품목없음");
  if (count === value) return console.log("전산표와일치합니다");
  if (count !== value) return console.log("전산표와일치하지않습니다");

  return console.log(item, value);
}
type(6, "야채곱창");
//뭘자꾸 일치하지 않대 맞뀨만..

// let yagop = 5;
// let banana = 10;
// let gimbob = 15;
// let bento = 10;
// let sand = 10;
// let answer;

// if (yagop === 5) {
//   // if = 만약에
//   answer = "전산표와 일치합니다";
// } else {
//   answer = "전산표와 일치하지 않습니다.";
//   // else = 아니면?
// }
// console.log(answer); //음수

// 대경님의 문제풀이
/*
function answer(x, y) {
  let item = ["야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"];
  let num = [5, 10, 15, 10, 10];

  let result = "";

  for (i = 0; i < 5; i++) {
    if (item[i] == x && num[i] == y) {
      result = "전산표와 일치합니다";
      break;
    } else if (item[i] == x && num[i] != y) {
      result = "전산표와 일치하지않습니다";
      break;
    } else if (item[i] != x) {
      result = "해당 품목이 없습니다.";
    }
  }
  return console.log(result);
}
answer("바나나우유", 11);
//-----------------------------------------------

//페어문제풀이

// function answer(x, y) {
//   let store = {
//     yagop: ["야채곱창", 5],
//     banana: ["바나나우유", 10],
//     samgak: ["삼각김밥", 15],
//     dosirak: ["도시락", 10],
//     sandwhich: ["샌드위치", 10],
//   };

//   let result = "";

//   for (i = 0; i < 5; i++) {
//     if (store.i == x && store.i == y) {
//       result = "값이 일치합니다";
//     } else if (store.i == x && store.i != y) {
//       result = "값이 일치하지 않습니다";
//     } else {
//       result = "울랄라";
//     }
//     return console.log(result);
//   }
// }
// 너무 어려워영ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ이해가안가아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
*/
