// 1.페이지가 로딩 될 때 이곳의 글씨를 변경하시오.
window.onload = function () {
  const $p = document.getElementsByTagName("p")[0];
  // $h2.innerText = "<p>회원가입</p>";
  $p.innerHTML = "<p>뭐라고 바꾸나요?</p>";
};

//2.탭을 선택하면 선택한 탭의 배경과 글자의색이 바뀌도록 하시오
const $classDom = document.getElementsByClassName("tab");
console.log($classDom);
/*
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
const tab = document.getElementsByClassName("tab");
function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < tab.length; i++) {
      tab[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", handleClick);
  }
}

init();

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

//3번 문제풀이
