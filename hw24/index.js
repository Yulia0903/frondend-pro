const categories = [
  { id: 1, name: "Техніка для кухні" },
  { id: 2, name: "Велика техніка" },
  { id: 3, name: "Мілка техніка" },
];

const products = [
  { id: 1, categoryId: 1, name: "Холодильник", price: 20000 },
  { id: 2, categoryId: 1, name: "Духова шафа", price: 10000 },
  { id: 3, categoryId: 2, name: "Пральна машина", price: 12000 },
  { id: 4, categoryId: 2, name: "Телевізор", price: 150000 },
  { id: 5, categoryId: 3, name: "Праска", price: 5000 },
  { id: 6, categoryId: 3, name: "Стайлер", price: 4000 },
];

const categoriesElement = document.getElementById("categories");
const productsElement = document.getElementById("products");
const productInfoElement = document.getElementById("productInfo");
const buyButtonElement = document.getElementById("buyButton");
const purchaseMessageElement = document.getElementById("purchaseMessage");

categories.forEach((category) => {
  const categoryElement = document.createElement("a");
  categoryElement.href = "#";
  categoryElement.classList.add("list-group-item", "list-group-item-action");
  categoryElement.textContent = category.name;
  categoryElement.addEventListener("click", () => showProducts(category.id));
  categoriesElement.appendChild(categoryElement);
});

function showProducts(categoryId) {
  productsElement.innerHTML = "";

  const categoryProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  categoryProducts.forEach((product) => {
    const productElement = document.createElement("a");
    productElement.href = "#";
    productElement.classList.add("list-group-item", "list-group-item-action");
    productElement.textContent = product.name;
    productElement.addEventListener("click", () => showProductInfo(product));
    productsElement.appendChild(productElement);
  });

  buyButtonElement.style.display = "none";
  purchaseMessageElement.style.display = "none";
}

function showProductInfo(product) {
  productInfoElement.innerHTML = `
        <h4>${product.name}</h4>
        <p>Ціна: ${product.price} грн</p>
      `;

  buyButtonElement.style.display = "block";
  buyButtonElement.addEventListener("click", () => purchaseProduct(product));
}

function purchaseProduct(product) {
  purchaseMessageElement.style.display = "block";
  buyButtonElement.style.display = "none";

  setTimeout(() => {
    purchaseMessageElement.style.display = "none";
    productInfoElement.innerHTML = "";
  }, 2000);
}
