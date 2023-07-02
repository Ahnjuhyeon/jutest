//재귀함수
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}
countdown(10);

//책을.. 오또케 다 본단..말인가아

// 어디까지 공부했더라
/*
crud
1.read 를 가장먼저 한다
2.create
3.delete
4.update
*/

import boardMock from "../mock/mock.json" assert { type: "json" };
console.log(boardMock);

//read
//어디에다가 추가하고 싶은지?
//board-list
const $boardList = document.querySelector(".board-list");

//최종 구현 상태
/*
<article class="board-card">
    <h3 class="flex-center"> example-title
    <button>삭제</button>
    </h3>
    <div class="flex-center">example-content</div>
</article>
*/
// const boardList = boardMock
//   .map((board) => {
//     return `
//     <article class="board-card" data-role=${board.id}>
//     <h3 class="flex-center"> ${board.title}
//     <button>삭제</button>
//     </h3>
//     <div class="flex-center">
//     ${board.content}
//     </div>
//     </article>
//     `;
//   })
//   .join("");
// ["article","article","article"] -> ["article article article"]
// 약점 -> 이벤트 추가 addEventLisener
// $boardList.innerHTML = boardList;
//

boardMock.forEach((board) => {
  rednerBoard({
    id: board.id,
    title: board.title,
    content: board.content,
  });
});

//
//create
//어디에다가 추가하고 싶은지?
//최종 구현 상태
const $writeBtn = document.querySelector(".write-btn");
const $title = document.querySelector(".title");
const $content = document.querySelector(".content");

$writeBtn.addEventListener("click", () => {
  //예외처리
  if (!$title.value.trim() || !$content.value.trim()) {
    return alert("내용을 입력해주세요");
  }
  // *getAttribute , setAttribute
  const shortId = Math.floor(Math.random() * 100000);
  // <artice data-role=${shortId}>\
  rednerBoard({
    id: shortId,
    title: $title.value,
    content: $content.value,
  });
  // 백엔드가 없기 때문에
  // 새로운 게시글이 포함된 데이터 요청이 불가하니
  //직접 배열에 데이터 추가
  boardMock.push({
    id: shortId,
    title: $title.value,
    content: $content.value,
  });
  document.querySelector(".title").value = "";
  document.querySelector(".content").value = "";
});

function rednerBoard(board) {
  const article = document.createElement("article");
  //html에 빈 article 을 추가 한다
  article.className = "board-card";
  // 그 아티클의 이름은 이거다
  article.setAttribute("data-role", board.id);
  // setAttribute board.id 는 "data-role" 다. 내마음대로 임의로 짓는느..?
  article.addEventListener("click", getBoardDetail);
  article.innerHTML = `
    <h3 class="flex-center"> ${board.title}
    <button>삭제</button>
    </h3>
    <div class="flex-center">
    ${board.content}
    </div>
    `;
  $boardList.appendChild(article);
}

//detail

const $boardDetail = document.querySelector(".board-detail");
function getBoardDetail(e) {
  console.log(e.currentTarget);
  // e.target 실제클릭대상 (h3,div)
  // e.currentTargrt 이벤트 등록 대상 (article)
  /*
   $boardDetail.innerHTML = `
  <button>수정</button>
  <p></p>
  <div></div>
  `;



  db -> 게시글이 등록 -> 새로운 게시글이 추가된 데이터를 
  mockPost => 새로운 게시들이 이미 추가된 상태의배열 
  */
  const boardId = e.currentTarget.getAttribute("data-role"); //string
  console.log(boardId);
  const board = boardMock.find((board) => board.id === parseInt(boardId)); //행변환
  $boardDetail.innerHTML = `
  <button>수정</button>
  <p>${board.title}</p>
  <div>${board.content}</div>
  `;
}

//delete
// function deleteBoard{
//  console.log(e.currentTargrt);
// 과제 id, fiiter, 슬라이스 초기화, rednerBoard,innerHTML, 공통된 로직 분리?
//}
