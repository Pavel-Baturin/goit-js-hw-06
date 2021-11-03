const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const titleCategoryAnimals = categories[0].firstElementChild.textContent;
console.log(`Category: ${titleCategoryAnimals}`);

const listAnimals = categories[0].lastElementChild;
const itemAnimal = listAnimals.children.length;
console.log(`Elements: ${itemAnimal}`);

const titleCategoryProducts = categories[1].firstElementChild.textContent;
console.log(`Category: ${titleCategoryProducts}`);

const listProducts = categories[1].lastElementChild;
const itemProduct = listProducts.children.length;
console.log(`Elements: ${itemProduct}`);

const titleCategoryTechnologies = categories[2].firstElementChild.textContent;
console.log(`Category: ${titleCategoryTechnologies}`);

const listTechnologies = categories[2].lastElementChild;
const itemtechnology = listTechnologies.children.length;
console.log(`Elements: ${itemtechnology}`);