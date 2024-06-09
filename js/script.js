document.addEventListener('DOMContentLoaded', () => {
    console.log('Aaiza Cosmetics website loaded.');

    // Event listener for removing cart items
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
	button.addEventListener('click', (event) => {
	    const cartItem = event.target.closest('.cart-item');
	    cartItem.remove();
	    updateCartTotal();
	});
    });

    // Event listener for changing quantity in cart
    const quantityInputs = document.querySelectorAll('.cart-item input[type="number"]');
    quantityInputs.forEach(input => {
	input.addEventListener('change', (event) => {
	    if (event.target.value <= 0) {
		event.target.value = 1;
	    }
	    updateCartTotal();
	});
    });

    // Event listener for adding items to cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
	button.addEventListener('click', (event) => {
	    const product = event.target.closest('.product');
	    const productId = product.dataset.productId;
	    addToCart(productId);
	});
    });

    // Event listener for form submissions
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
	contactForm.addEventListener('submit', (event) => {
	    event.preventDefault();
	    alert('Thank you for contacting us. We will get back to you soon.');
	    contactForm.reset();
	});
    }

    const accountForms = document.querySelectorAll('.account-form form');
    accountForms.forEach(form => {
	form.addEventListener('submit', (event) => {
	    event.preventDefault();
	    alert('Account action successfully completed.');
	    form.reset();
	});
    });

    // Update cart total
    function updateCartTotal() {
	const cartItems = document.querySelectorAll('.cart-item');
	let total = 0;
	cartItems.forEach(item => {
	    const priceElement = item.querySelector('.price');
	    const quantityElement = item.querySelector('input[type="number"]');
	    const price = parseFloat(priceElement.innerText.replace('$', ''));
	    const quantity = quantityElement.value;
	    total += price * quantity;
	});

	const totalElement = document.querySelector('.cart-total .total');
	if (totalElement) {
	    totalElement.innerText = '$' + total.toFixed(2);
	}
    }

    // Add to cart function
    function addToCart(productId) {
	console.log('Product added to cart:', productId);
	// Logic for adding the product to the cart
	// This can include updating the cart in the DOM and backend operations
    }
});