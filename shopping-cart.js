const cartItems = [];
const cartItemsList = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));

        // Add item to cart
        cartItems.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    // Display items in the cart
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    // Update the total price
    cartTotal.textContent = total.toFixed(2);
}
