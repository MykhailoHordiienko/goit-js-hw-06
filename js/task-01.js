const categoriesRef = document.querySelector("#categories");
let categoriesLength = categoriesRef.children.length;
const messageAllCategories = `Number of categories: ${categoriesLength}`;
console.log(messageAllCategories);

const categoriRef = categoriesRef.querySelectorAll(".item");
let messageCategori = categoriRef.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
