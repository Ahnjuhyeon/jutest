// 1.페이지가 로딩 될 때 이곳의 글씨를 변경하시오.
window.onload = function () {
  const $p = document.getElementsByTagName("p")[0];
  // $h2.innerText = "<p>회원가입</p>";
  $p.innerHTML = "<p>뭐라고 바꾸나요?</p>";
};

//2.탭을 선택하면 선택한 탭의 배경과 글자의색이 바뀌도록 하시오
/*
const $classDom = document.getElementsByClassName("tab");
console.log($classDom);

$classDom[0].style.color = "blue";
$classDom[0].style.backgroundColor = "skyblue";
*/
/*
const $items = document.querySelectorAll(".tab");
console.log($items);
for (let i = 0; i < $items.length; i++) {
  $items[i].onclick = ;
}
*/
// 지원님이 공유해주신 코드로 복붙..
/*여기서
const $tab = document.getElementsByClassName("tab");
function handleClick(event) {
  여기까지*/
// console.log(event.target);
// console.log(this);
// 콘솔창을 보면 둘다 동일한 값이 나온다

// console.log(event.target.classList);
// if (event.target.classList[1] === "clicked") {
//   // [1] 이 아니여도 다른 숫자여도 정상작동을 하는데..? 왜일까
//   event.target.classList.remove("clicked");
// } else {
// 지워도 잘 작동이 된다는 사실을 알았다
/*여기서
  for (let i = 0; i < $tab.length; i++) {
    $tab[i].classList.remove("clicked");
  }

  event.target.classList.add("clicked");
}

function init() {
  for (let i = 0; i < $tab.length; i++) {
    $tab[i].addEventListener("click", handleClick);
  }
}
//addEventListener는 함수 부분에서 event 또는 e 라는 매개변수를 받을 수 있다.

init();
여기까지*/
// forEach
// const $tab = document.getElementsByClassName("tab");
// $tab.forEach(function("tab") {
//   console.log("tab");
// });

// $classDom[1].onclick.add($classDom[1]);

// const $button = document.getElementsByTagName("button");
// $button[0].onclick = onClickLoginBtn();
/*
구글에서 찾은거
var items = document.querySelectorAll(".tabs-list li");
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function (e) {
    e.preventDefault();
  };
}
for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    var tabId = this.querySelector("a").getAttribute("href");
    console.log(this.classList);
    document.querySelectorAll(".tab_host, .tab").forEach(function (item) {
      item.classList.remove("active");
      console.log(item);
    });
    document.querySelector(tabId).classList.add("active");
    this.classList.add("active");
  };
}
*/

//3. 위의 탭 클릭시 아래의 컨텐츠 중 탭과 숫자가 같은 것만 보이게 하시오.
/*
const $block = document.querySelectorAll(".block");
for (let i = 0; i < $block.length; i++) {
  $tab[i].onclick = function () {
    $block[i].style.display = "block";
  };
}
*/
// 1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
const $tab = document.querySelectorAll(".tab");
const $tabContent = document.querySelectorAll(".block");

// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
$tab.forEach((item, index) => {
  // 3. 탭 버튼에 클릭 이벤트를 준다.
  item.addEventListener("click", () => {
    // 4. 버튼을 a 태그에 만들었기 때문에,
    // 태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가한다.

    // 5. 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
    $tabContent.forEach((content) => {
      // 6. 탭 내용 부분들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 7. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    $tab.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 9. 탭 버튼과 탭 내용 영역의 index에 해당하는 부분에 active 클래스를 추가한다.
    // ex) 만약 첫번째 탭(index 0)을 클릭했다면, 같은 인덱스에 있는 첫번째 탭 내용 영역에
    // active 클래스가 추가된다.
    $tab[index].classList.add("active");
    $tabContent[index].classList.add("active");
  });
});
