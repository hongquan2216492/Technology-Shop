$(function () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.map((val) => {
        $(`
        <div class = "item">
            <img src=${val.image} alt="item image">
            <span>Price: ${val.price}$</span>
        </div>
        `).appendTo(".cart");
    })
})