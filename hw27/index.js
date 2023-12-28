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
const myOrdersElement = document.getElementById("myOrders");
const backToMainMenuButtonElement = document.getElementById(
  "backToMainMenuButton"
);

const myOrdersButtonElement = document.getElementById("myOrdersButton");
myOrdersButtonElement.addEventListener("click", showMyOrders);

function showMyOrders() {
  categoriesElement.style.display = "none";
  productsElement.style.display = "none";
  myOrdersElement.style.display = "block";
  backToMainMenuButtonElement.style.display = "block";

  const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  displayOrders(savedOrders);
}

function backToMainMenu() {
  categoriesElement.style.display = "block";
  productsElement.style.display = "block";
  myOrdersElement.style.display = "none";
  backToMainMenuButtonElement.style.display = "none";
}

function displayOrders(orders) {
  while (myOrdersElement.firstChild) {
    myOrdersElement.removeChild(myOrdersElement.firstChild);
  }

  orders.forEach((order, index) => {
    const orderElement = document.createElement("div");
    orderElement.classList.add("order");
    orderElement.innerHTML = `<p>Замовлення #${index + 1}</p><p>Дата: ${
      order.date
    }</p><p>Ціна: ${
      order.price
    } грн</p><button onclick="removeOrder(${index})">Видалити</button>`;
    myOrdersElement.appendChild(orderElement);
  });
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
    date: new Date().toLocaleString(),
    fullName,
    city,
    deliveryPoint,
    paymentMethod,
    quantity,
    comment: document.getElementById("comment").value,
  };

  const price = calculatePrice(
    document.getElementById("productInfo").textContent
  );
  orderDetails.price = price;

  const confirmed = window.confirm(
    `Інформація про замовлення:\n${JSON.stringify(
      orderDetails,
      null,
      2
    )}\n\nПідтверджуєте замовлення?`
  );

  if (confirmed) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(orders));

    displayOrders(orders);

    alert("Дякую за замовлення");
    window.location.reload();
  }
}

function removeOrder(index) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));

  displayOrders(orders);
}

function calculatePrice(productInfo) {
  const priceMatch = productInfo.match(/Ціна: (\d+) грн/);
  return priceMatch ? parseInt(priceMatch[1]) : 0;
}

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
