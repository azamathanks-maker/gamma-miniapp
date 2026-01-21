let cart = [];

const products = [
  {
    id: 1,
    name: "Ручка шариковая",
    price: 3000,
    image: "https://via.placeholder.com/300x200?text=Pen"
  },
  {
    id: 2,
    name: "Пазл детский",
    price: 25000,
    image: "https://via.placeholder.com/300x200?text=Puzzle"
  }
];

const productsContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach(p => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = 
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.price.toLocaleString()} сум</p>
      <button onclick="addToCart(${p.id})">Добавить</button>
    ;
    productsContainer.appendChild(el);
  });
}

function addToCart(id) {
  cart.push(id);
  cartCount.textContent = cart.length;
}

function openCart() {
  alert("В корзине товаров: " + cart.length);
}

renderProducts();
