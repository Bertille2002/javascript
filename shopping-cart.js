const cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.dataset.productName;
        cart.push(productName);
        document.querySelector('#cart').textContent = `Cart: ${cart.join(', ')}`;
    });
});
