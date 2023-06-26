const Posts = [
  {
    number: 2398692,
    price: 42000,
    brand: "HARDCORE HAPPINESS",
    id: "HARDCORE LOGO VINTAGE TEE White",
  },
  {
    number: 2425648,
    price: 98000,
    brand: "BLUR",
    id: "BLUR EDITION COLLARED SWEATSHIRT - NAVY",
  },
  {
    number: 2946464,
    price: 79000,
    brand: "DORKY",
    id: "럭키 클로버 오버핏 후드 그린",
  },
  {
    number: 2591426,
    price: 84000,
    brand: " TRIP LE SENS",
    id: "타이다이 크로셰 하프 셔츠_BROWN",
  },
  {
    number: 3224926,
    price: 35000,
    brand: " LEATHERY",
    id: "LR 로고 크롭 반팔 티셔츠 [WHITE] ",
  },
];

// const post = Posts.find((post) => post.id === 2);
// post.content = "exmaple";
// console.log(Posts);
/*
1.두번째 아이템 삭제(filter 사용)
2.40000원이상 아이템 조회..?(find 사용)
3.모든 상품 10000원씩 올리기(map사용)

ex)
post.content = "exmaple";
console.log(Posts);

const deletePost = Posts.filter((post) => post.id !== 1);
console.log(deletePost);
*/
//1
const deletePost = Posts.filter((post) => post.number !== 2398692);
// console.log(deletePost);

//2 - 아직
const Post = Posts.filter((post) => post.price > 50000);
// post.content = "exmaple";
console.log(Post);

//3
const addPost = Posts.map((post) => ({
  number: post.number,
  price: post.price + 10000,
  brand: post.brand,
  id: post.id,
}));
/* 
{
  ...post,
  price: post.price + 10000
}
*/

// const Post = Posts.find((post))
// console.log(addPost);
// ${element.RESTDE_DATE} ${element.RESTDE_NM} ${element.PRICE + 1000})
//${post.number}${post.price + 10000}${post.brand}${post.id})
