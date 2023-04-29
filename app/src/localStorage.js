
if (localStorage.getItem("cart")){
    const cart = JSON.parse(localStorage.getItem("cart"));
    let shopCart = new Cart(cart);
    console.log(shopCart);
    document.querySelector(".cart-container").innerHTML = "";
    document.querySelector(".cart-container").append(shopCart.render());

    document.querySelector(".cart-container").addEventListener("click", (event) => {
        let target = event.target;
        console.log(target);
        if (target.classList.contains('delete')) {
            shopCart.productsDelete(target.dataset['articul']);
            document.querySelector('.cart-container').innerHTML = '';
            document.querySelector('.cart-container').append(shopCart.render());
            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
        else if (target.classList.contains('plus')) {
            shopCart.productsPlus(target.dataset['articul']);
            console.log(shopCart);
            document.querySelector('.cart-container').innerHTML = '';
            document.querySelector('.cart-container').append(shopCart.render());

            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
        else if (target.classList.contains('minus')) {
            shopCart.productsMinus(target.dataset['articul']);
            document.querySelector('.cart-container').innerHTML = '';
            document.querySelector('.cart-container').append(shopCart.render());
            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
    });
}