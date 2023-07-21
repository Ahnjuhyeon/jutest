const user = {
  name: "김성용",
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것
/* 
(1) user[”key”], user.key
undifinde
(2) Object.keys()
오브젝트의 keys값을 가지고온다
(3) Object.values()
오브젝트의 values값을 가지고 온다
(4) Object.entries()
오브젝트의 keys와values값을 가져와 배열로 반환
(5) for in
*/
//(1)
console.log(user["key"]);
//undefined
//(2)
const userkeys = Object.keys(user);
console.log(userkeys);
//[ 'name', 'age', 'height' ]
//(3)
const uservalues = Object.values(user);
console.log(uservalues);
//[ '김성용', 20, 190 ]
//(4)
const userentries = Object.entries(user);
console.log(userentries);
//[ [ 'name', '김성용' ], [ 'age', 20 ], [ 'height', 190 ] ]
//(5)
for (let key in user) {
  console.log(key); //name , age , height
  console.log(user[key]);
  /*name
  김성용
  age
  20
  height
  190*/
}

// 문제2. 값이 “김성용”인 속성의 key 찾기
// console.log(user.name);
const zizon = userkeys.find((name) => user[name] == "김성용");
console.log(zizon);

// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
const copyuser = Object.assign({}, user);
copyuser.name = "안주현";
console.log(copyuser);

//1️⃣ Object.assign()

//- 문법: Object.assign(생성할 객체, 복사할 객체);
