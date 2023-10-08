document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewCartButton = document.getElementById('view-cart');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCartButton = document.getElementById('close-cart');
    const checkoutButton = document.getElementById('checkout');
    const cartCount = document.getElementById('cart-count');

    const cart = [];

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.getAttribute('data-price'));
            cart.push(price);
            updateCart();
        });
    });

    viewCartButton.addEventListener('click', () => {
        updateCart();
        cartModal.style.display = 'flex';
    });

    closeCartButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout complete! Thank you for your purchase.');
        cart.length = 0;
        updateCart();
        cartModal.style.display='none';
    });

    function updateCart() {
        const cartItemsHTML = cart.map((price) => `<li>$${price.toFixed(2)}</li>`).join('');
        const total = cart.reduce((acc, price) => acc + price, 0);
        cartItems.innerHTML = cartItemsHTML;
        cartTotal.textContent = `$${total.toFixed(2)}`;
        cartCount.textContent = cart.length;
    }


    //search functionality

    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');

    // Function to perform the search and print the results to the console
    const performSearch = async () => {
        const searchTerm = searchInput.value.trim(); // Get the search term

        // Send a request to your server to perform the search
        try {
            const response = await fetch(`/products?search=${searchTerm}`);
            const data = await response.json();

            // Print search results to the console
            console.log("Search Results:");
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    // Mobile Mode NavBar
    // Get references to the navigation elements
const mainNav = document.getElementById('mainNav');
const toggleNavButton = document.getElementById('brand-logo');

// Add a click event listener to the toggle button
toggleNavButton.addEventListener('click', () => {
    // Check the current display style of the navigation menu
    const currentDisplayStyle = mainNav.style.display;

    // Toggle the display style
    if (currentDisplayStyle === 'none' || currentDisplayStyle === '') {
        mainNav.style.display = 'block';
    } else {
        mainNav.style.display = 'none';
    }
});


   
});



