// Fetch the JSON data
fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
        const productList = document.getElementById("product-list");

        // Filter products with IDs 6 to 10
        const filteredProducts = data.filter(product => product.id >= 21 && product.id <= 25);

        // Render the filtered products
        filteredProducts.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p><strong>Details:</strong> ${product.longDescription || "No additional details available."}</p>
                    <p class="old-price">Old Price: ₱${product.oldPrice.toFixed(2)}</p>
                    <p class="price">New Price: ₱${product.newPrice.toFixed(2)}</p>
                    <div class="button-container">
                        <button class="button buy-now">Buy Now</button>
                        <button class="button add-to-cart">Add to Cart</button>
                    </div>
                </div>
            `;
            productList.appendChild(productItem);
        });
    })
    .catch((error) => {
        console.error("Error fetching the product data:", error);
    });
