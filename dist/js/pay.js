$(function () {

    const cart = JSON.parse(localStorage.getItem("cart"));


    const quantity_cart = cart.reduce((acc, val) => {
        return acc + val.quantity;
    }, 0);
    const total_cart = cart.reduce((acc, val) => {
        return acc + val.total;
    }, 0);
    //console.log(quantity_cart);
    $(".quantity-cart").text(`${quantity_cart}`)
    $(".total-cart-price").text(`$${total_cart}.00`)
    $(".products-on-cart").empty()
    if (!cart.length) {
        $(".none-product").css({
            'display': 'block'
        })
        $(".total-cart").css({
            'display': 'none'
        })

    }
    else {
        $(".button-view").css({
            'display': 'flex'
        })
        $(".none-product").css({
            'display': 'none'
        })
        $(".total-cart").css({
            'display': 'block'
        })
    }
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
    $("body").on('click', '#cart_view', function () {
        $('.show-view-cart').css({
            'right': 0
        })


        $("#exit").click(function (e) {
            e.preventDefault();
            $('.show-view-cart').css({
                'right': '-30%'
            })
        });
    })
    $("body").on("click", "#delete", function () {
        const removeId = $(this).parents(".item").data("id");
        //const currentItem = products.find((val) => val.id === cartId);
        const index = cart.findIndex(val => val.id === removeId);
        cart.splice(index, 1)
        const totalCart_Remove = cart.reduce((acc, val) => {
            return acc + Math.floor(val.total);
        }, 0);
        const quantity_remove = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        $(".quantity-cart").text(`${quantity_remove}`)
        $(".total-cart-price").text(`${quantity_remove} `);
        $(".products-on-cart").empty();
        if (!cart.length) {
            $(".none-product").css('display', 'block')
            $(".total-cart").css({
                'display': 'none'
            })
            $(".button-view").css({
                'display': 'none'
            })
        }
        else {
            $(".none-product").css('display', 'none')
            $(".total-cart").css({
                'display': 'block'
            })
            $(".button-view").css({
                'display': 'flex'
            })
            $(".total-cart-price").text(`$${totalCart_Remove} .00`)
            cart.map(val => {
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

        }
        localStorage.setItem("cart", JSON.stringify(cart))
    });
})

$(function () {
    const cart_show = JSON.parse(localStorage.getItem("cart_show"));
    cart_show.map((val) => {
        $(".cart_show").empty();
        if (val.sale) {
            $(`
        <div class="col">
            <div class="col-left">
                <div class="col-img-head ">
                    <img src=${val.image}
                        alt="">
                    </div>
                <div class="col-img-under flex">
                    <img src=${val.galeries.slice(0, 1)}
                        alt="">
                    <img src=${val.galeries.slice(1, 2)}
                        alt="">
                    <img src=${val.galeries.slice(2, 3)}
                        alt="">
                    <img src=${val.galeries.slice(3, 4)}
                        alt="">
                </div>
            </div>
            <div class="col-right">
                <div data-id=${val.id} class="item">
                    <h3>${val.name}</h3>
                    <p>Categories: <span class="categories">${val.categories}</span> </p>
                    <br>
                    <div class="star flex">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <p class="review">(4 customer reviews)</p>
                    </div>
                    <span class="description">${val.description}</span>
                    <div class="price">
                        <span class="price-default">$${val.price}.00</span> <br>
                        <span class="price-discount">$${Math.round(val.price - (val.price * val.sale / 100))}.00</span>
                    </div>
                    <div class="flex a-center">
                    <form class="flex a-center" action="#">
                        <div class="btn flex  a-center">
                            <div class="dec-button">-</div>
                            <input type="text" id="quantity" value="1">
                            <div class="inc-button">+</div>
                        </div>
                        
                    </form>
                    <div class="cart">
                        <button class="add-on-view">Add to cart<i class="fas fa-check"></i></button>
                        
                    </div>
                    </div>
                    <div class="icon flex">
                        <div class="heart">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="compare">
                            <i class="fas fa-recycle"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="description-product">
        <div class="title">
            <a class="active" href="">Description</a>
            <a class="not" href="">Reviews (4)</a>
        </div>
        <div class="content">
            <p>${val.description}</p>
        </div>
    </div>`).appendTo(".cart_show")
        }
        else {
            $(`
        <div class="col">
            <div class="col-left">
                <div class="col-img-head ">
                    <img src=${val.image}
                        alt="">
                    </div>
                <div class="col-img-under flex">
                    <img src=${val.galeries.slice(0, 1)}
                        alt="">
                    <img src=${val.galeries.slice(1, 2)}
                        alt="">
                    <img src=${val.galeries.slice(2, 3)}
                        alt="">
                    <img src=${val.galeries.slice(3, 4)}
                        alt="">
                </div>
            </div>
            <div class="col-right">
                <div data-id=${val.id} class="item">
                    <h3>${val.name}</h3>
                    <p>Categories: <span class="categories">${val.categories}</span> </p>
                    <br>
                    <div class="star flex">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <p class="review">(4 customer reviews)</p>
                    </div>
                    <span class="description">${val.description}</span>
                    <div class="price">
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                    <div class="flex a-center">
                    <form class="flex a-center" action="#">
                        <div class="btn flex  a-center">
                            <div class="dec-button">-</div>
                            <input type="text" id="quantity" value="1">
                            <div class="inc-button">+</div>
                        </div>
                        
                    </form>
                    <div class="cart">
                        <button class="add-on-view">Add to cart<i class="fas fa-check"></i></button>
                        
                    </div>
                    </div>
                    <div class="icon flex">
                        <div class="heart">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="compare">
                            <i class="fas fa-recycle"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="description-product">
        <div class="title">
            <a class="active" href="">Description</a>
            <a class="not" href="">Reviews (4)</a>
        </div>
        <div class="content">
            <p>${val.description}</p>
        </div>
    </div>`).appendTo(".cart_show")
        }
    })
})

