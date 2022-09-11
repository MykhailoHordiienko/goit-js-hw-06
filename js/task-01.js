const categoriesRef = document.querySelector("#categories");
let categoriesLength = categoriesRef.children.length;
const messageAllCategories = `Number of categories: ${categoriesLength}`;
console.log(messageAllCategories);

const categoriRef = categoriesRef.querySelectorAll(".item");
let messageCategori = categoriRef.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});

const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`В списке ${items.length} категории:`);
items.forEach((node) => {
  const h2 = node.querySelector("h2");
  const nodeItems = node.querySelectorAll("li");
  console.log(
    ` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`
  );
});
