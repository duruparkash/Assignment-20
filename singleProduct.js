async function getSingleProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();

  renderProductDetail(product);
}

function renderProductDetail(product) {
  const container = document.getElementById("product-detail-container");

  const { title, description, price, thumbnail, category, rating, stock } =
    product;

  container.innerHTML = `
        <div class="detail-wrapper">
            <button onclick="window.location.href = 'index.html'">← Back to Products</button>
            <div class="detail-content">
                <img src="${thumbnail}" alt="${title}" class="detail-img">
                <div class="detail-info">
                    <h1>${title}</h1>
                    <p class="category-tag">${category}</p>
                    <p class="desc">${description}</p>
                    <h2 class="price">$${price}</h2>
                    <p>Rating: ⭐ ${rating}</p>
                    <p>Stock: ${stock} units left</p>
                    <button class="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

getSingleProduct();
