// script.js
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Không thể lấy dữ liệu từ products.json: ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((products) => {
    const productContainer = document.querySelector("#product1 .pro-container");
    let htmlContent = "";
    products.forEach((product) => {
      htmlContent += `
        <div class="pro">
          <img src="${product.image || "img/products/f1.jpg"}" alt="${
        product.name || "Product"
      }">
          <div class="des">
            <span>${product.brand || "Unknown Brand"}</span>
            <h5>${product.name || "Unnamed Product"}</h5>
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4>$${product.price ? product.price.toLocaleString() : "N/A"}</h4>
          </div>
          <a href="#"><i class="fa-solid fa-cart-plus cart"></i></a>
        </div>
      `;
    });
    productContainer.innerHTML = htmlContent;
  })
  .catch((error) => {
    console.error("Lỗi khi lấy dữ liệu JSON:", error);
  });
fetch("products2.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Không thể lấy dữ liệu từ products.json: ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((products) => {
    const productContainer = document.querySelector("#product2 .pro-container");
    let htmlContent = "";
    products.forEach((product) => {
      htmlContent += `
        <div class="pro">
          <img src="${product.image || "img/products/n1.jpg"}" alt="${
        product.name || "Product"
      }">
          <div class="des">
            <span>${product.brand || "Unknown Brand"}</span>
            <h5>${product.name || "Unnamed Product"}</h5>
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4>$${product.price ? product.price.toLocaleString() : "N/A"}</h4>
          </div>
          <a href="#"><i class="fa-solid fa-cart-plus cart"></i></a>
        </div>
      `;
    });
    productContainer.innerHTML = htmlContent;
  })
  .catch((error) => {
    console.error("Lỗi khi lấy dữ liệu JSON:", error);
  });
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
