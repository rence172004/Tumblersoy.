// Shopping cart array to store added products
let cart = [];
let cartCount = 0;

// Fetch products from JSON
async function fetchProducts() {
  try {
    const response = await fetch("product.json");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// Display products dynamically
function displayProducts(products) {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-details">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-old-price">Old Price: <s>₱${product.oldPrice.toFixed(2)}</s></p>
        <p class="product-new-price">New Price: ₱${product.newPrice.toFixed(2)}</p>
        <p class="product-description">${product.description}</p>
        <div class="buttons">
          <button class="button" onclick="buyNow('${product.title}')">Buy Now</button>
          <button class="button" onclick="addToCart(${product.id}, '${product.title}', ${product.newPrice})">Add to Cart</button>
        </div>
      </div>
    `;

    productContainer.appendChild(productCard);
  });
}


// Handle Buy Now button
function buyNow(title) {
  alert(`Thank you for buying ${ title}!`);
}

// Handle Add to Cart button
function addToCart(id, title, price) {
  // Add the product to the cart array
  cart.push({ id, title, price });

  // Update cart count
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;

  // Notify the user
  alert(`${title} has been added to your cart.`);
}

// Initialize
document.addEventListener("DOMContentLoaded", fetchProducts);
