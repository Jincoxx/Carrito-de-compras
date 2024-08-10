// script.js

// Productos de ejemplo
const products = [
  { id: 1, name: "BloodBorne", price: 20, image: "imagenenes/bloodborne.png" },
  { id: 2, name: "Elden Ring", price: 40 },
  { id: 3, name: "Lies of P", price: 30 },
  { id: 4, name: "Sekiro", price: 20 },
  { id: 5, name: "Dark Souls", price: 40 },
  { id: 6, name: "Nioh", price: 40 },
  // Añade más productos según sea necesario
];

// Inicializar el carrito
let cart = [];

// Mostrar productos en la página
const productContainer = document.getElementById("products");

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.className = "product";

  productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
    `;

  productContainer.appendChild(productElement);
});

// Función para agregar productos al carrito
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  renderCart();
}

// Renderizar el carrito en la página
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Limpiar carrito
  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(cartItem);
  });
}

// Función para vaciar el carrito
document.getElementById("clear-cart").addEventListener("click", () => {
  cart = [];
  renderCart();
});
