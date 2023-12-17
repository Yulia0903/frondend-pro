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
  while (productsElement.firstChild) {
    productsElement.removeChild(productsElement.firstChild);
  }

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
  while (productInfoElement.firstChild) {
    productInfoElement.removeChild(productInfoElement.firstChild);
  }

  const productNameElement = document.createElement("h4");
  productNameElement.textContent = product.name;

  const priceElement = document.createElement("p");
  priceElement.textContent = `Ціна: ${product.price} грн`;

  productInfoElement.appendChild(productNameElement);
  productInfoElement.appendChild(priceElement);

  buyButtonElement.style.display = "block";
  buyButtonElement.addEventListener("click", () => showOrderForm(product));
}

function showOrderForm(product) {
  document.getElementById("orderForm").style.display = "block";

  document.getElementById("quantity").value = 1;
}

function confirmOrder() {
  const fullName = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;
  const deliveryPoint = document.getElementById("deliveryPoint").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const quantity = document.getElementById("quantity").value;

  if (!fullName || !city || !deliveryPoint || !paymentMethod || !quantity) {
    alert("Будь ласка, заповніть всі обов'язкові поля.");
    return;
  }

  const orderDetails = {
    fullName,
    city,
    deliveryPoint,
    paymentMethod,
    quantity,
    comment: document.getElementById("comment").value,
  };

  alert(`Інформація про замовлення:\n${JSON.stringify(orderDetails, null, 2)}`);

  alert("Дякую за замовлення");
  window.location.reload();
}
