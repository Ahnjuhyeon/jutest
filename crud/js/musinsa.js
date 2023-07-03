import postMock from "../mock/musinsa.json" assert { type: "json" };
console.log(postMock);

//read
//어디에다가 추가하고 싶은지?
const $postList = document.querySelector(".post-list");

postMock.forEach((post) => {
  renderPost({
    id: post.id,
    name: post.name,
    price: post.price,
  });
});

//create
//어디에다가 추가하고 싶은지?
const $writeBtn = document.querySelector(".write-btn");
const $id = document.querySelector(".id");
const $content = document.querySelector(".content");

$writeBtn.addEventListener("click", () => {
  if (!$id.value.trim() || !$content.value.trim()) {
    return alert("제대로 입력해");
  }
  const shortId = Math.floor(Math.random() * 1000000);
  renderPost({
    id: shortId,
    name: $id.value,
    price: $content.value,
  });
  // 새로운 게시글이 포함된 데이터 요청이 불가하니
  //직접 배열에 데이터 추가
  postMock.push({
    id: shortId,
    name: $id.value,
    price: $content.value,
  });
  document.querySelector(".id").value = "";
  document.querySelector(".content").value = "";
});

function renderPost(post) {
  const article = document.createElement("article");
  article.className = "post-card";
  article.setAttribute("data-role", post.id);
  article.addEventListener("click", getPostDetail);
  article.innerHTML = `
  <h3 class="flex-center"> ${post.title}
  <button>삭제</button>
  </h3>
  <div class="flex-center">
  ${post.content}
  </div>
  `;
  $postList.appendChild(article);
}
//detail
const $postDetail = document.querySelector(".post-detail");
function getPostDetail(e) {
  console.log(e.currentTarget);

  const postId = e.currentTarget.getAttribute("data-role");
  console.log(postId);
  const post = postMock.find((post) => post.id === parseInt(postId));
  $postDetail.innerHTML = `
<button>수정</button>
<p>${board.title}</p>
<div>${board.content}</div>
`;
}

//title 부분 id로 바꾼것들을 다시 name 으로 바꾸기
