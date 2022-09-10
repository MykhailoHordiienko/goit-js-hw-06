const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
let createElement = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  return item;
});
ingredientsRef.append(...createElement);
