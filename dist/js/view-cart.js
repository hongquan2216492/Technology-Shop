$(function () {

    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.map((val) => {

        if (val.sale) {
            $(`<div data-id=${val.id} class="item flex a-center j-between">
          <img src=${val.image} alt="">
          <div class="info">
            <div class="name">
              <a class = "show" href = "http://localhost:3000/viewproduct.html">
              <span>${val.name}</span>
              </a>
            </div>
            <div class="price-content">
              <span class="quantity">${val.quantity} x</span>
              <span class="price">$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
            </div>
          </div>
          <button id="delete">X</button>
        </div>`).appendTo(".products-on-cart")
        }
        else {
            $(`<div data-id=${val.id} class="item flex a-center j-between">
          <img src=${val.image} alt="">
          <div class="info">
            <div class="name">
              <a class = "show" href = "http://localhost:3000/viewproduct.html">
              <span>${val.name}</span>
              </a>
            </div>
            <div class="price-content">
              <span class="quantity">${val.quantity} x</span>
              <span class="price">$${val.price}.00</span>
            </div>
          </div>
          <button id="delete">X</button>
        </div>`).appendTo(".products-on-cart")
        }
    })
})