async function getAllProductData() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  renderCards(products);
}

getAllProductData();

function renderCards(products) {
  const productsElement = document.getElementById("products-container");
  let allCardsHTML = "";

  products.map((product) => {
    const { id, title, description, price, discountPercentage, thumbnail } =
      product;

    allCardsHTML += `
        <div class="card">
          <img class="card-img" src="${thumbnail}" alt="${title}" />
          <div class="card-body">
            <h2 class="title">${title}</h2>
            <p class="description">${description}</p>
            <div class="price-section">
              <span class="discounted-price">$${price}</span>
              <span class="discount">${discountPercentage}% OFF</span>
            </div>
            <button class="btn"onclick="showSingleProduct(${id})">View Detail</button>
          </div>
        </div>`;
  });

  productsElement.innerHTML = allCardsHTML;
}
function showSingleProduct(id) {
  window.location.href = `./singleProduct.html?id=${id}`;
}
