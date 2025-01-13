function openOrderForm(productName) {
    document.getElementById('product').value = productName;
    document.getElementById('order-form').classList.remove('hidden');
}

function closeOrderForm() {
    document.getElementById('order-form').classList.add('hidden');
}

// Attach a submit event listener to the contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');

            // Submit the form using Formspree
            form.submit();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});


// // Cart array to store selected items
// let cart = [];

// // Function to add items to the cart
// function addToCart(productName, quantity) {
//     const item = {
//         product: productName,
//         quantity: quantity,
//     };
//     cart.push(item);
//     updateCartDisplay();
//     alert(`${productName} (${quantity}) added to cart!`);
// }

// // Function to update the cart display
// function updateCartDisplay() {
//     const cartItems = document.getElementById('cart-items');
//     cartItems.innerHTML = ''; // Clear the current cart display

//     cart.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${item.product} - ${item.quantity === 'bulk' ? 'Bulk Order' : `${item.quantity} Liter(s)`}`;
//         cartItems.appendChild(li);
//     });
// }

// // Function to handle checkout
// function checkout() {
//     if (cart.length === 0) {
//         alert('Your cart is empty. Please add items to proceed.');
//     } else {
//         alert('Proceeding to checkout...');
//         // Here, you can redirect to a checkout page or process the order
//         console.log('Cart Items:', cart);
//         cart = []; // Clear the cart after checkout
//         updateCartDisplay();
//     }
// }

// Cart array to store selected items
// let cart = [];

// // Function to toggle bulk input field
// function toggleBulkInput(productType) {
//     const bulkInput = document.getElementById(`${productType}-bulk-input`);
//     const quantitySelect = document.getElementById(`${productType}-quantity`);

//     if (quantitySelect.value === 'bulk') {
//         bulkInput.classList.remove('hidden');
//     } else {
//         bulkInput.classList.add('hidden');
//     }
// }

// // Function to add items to the cart
// function addToCart(productName, productType) {
//     const quantitySelect = document.getElementById(`${productType}-quantity`);
//     const bulkInput = document.getElementById(`${productType}-bulk-quantity`);
//     let quantity;

//     if (quantitySelect.value === 'bulk') {
//         if (!bulkInput.value || bulkInput.value < 1) {
//             alert('Please enter a valid quantity for bulk order.');
//             return;
//         }
//         quantity = `${bulkInput.value} Liters (Bulk)`;
//     } else {
//         quantity = `${quantitySelect.value} Liter(s)`;
//     }

//     const item = {
//         product: productName,
//         quantity: quantity,
//     };
//     cart.push(item);
//     updateCartDisplay();
//     alert(`${productName} (${quantity}) added to cart!`);
// }

// // Function to update the cart display
// function updateCartDisplay() {
//     const cartItems = document.getElementById('cart-items');
//     cartItems.innerHTML = ''; // Clear the current cart display

//     cart.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${item.product} - ${item.quantity}`;
//         cartItems.appendChild(li);
//     });
// }

// // Function to handle checkout
// function checkout() {
//     if (cart.length === 0) {
//         alert('Your cart is empty. Please add items to proceed.');
//     } else {
//         alert('Proceeding to checkout...');
//         // Here, you can redirect to a checkout page or process the order
//         console.log('Cart Items:', cart);
//         cart = []; // Clear the cart after checkout
//         updateCartDisplay();
//     }
// }

// Cart array to store selected items
let cart = [];

// Function to toggle bulk input field
function toggleBulkInput(productType) {
    const bulkInput = document.getElementById(`${productType}-bulk-input`);
    const quantitySelect = document.getElementById(`${productType}-quantity`);

    if (quantitySelect.value === 'bulk') {
        bulkInput.classList.remove('hidden');
    } else {
        bulkInput.classList.add('hidden');
    }
}

// Function to show custom popup
function showPopup(title, message) {
    const modal = document.getElementById('popup-modal');
    const popupTitle = document.getElementById('popup-title');
    const popupMessage = document.getElementById('popup-message');

    popupTitle.textContent = title;
    popupMessage.textContent = message;
    modal.classList.remove('hidden');
}

// Function to close custom popup
function closePopup() {
    const modal = document.getElementById('popup-modal');
    modal.classList.add('hidden');
}

// Function to add items to the cart
function addToCart(productName, productType) {
    const quantitySelect = document.getElementById(`${productType}-quantity`);
    const bulkInput = document.getElementById(`${productType}-bulk-quantity`);
    let quantity;

    if (quantitySelect.value === 'bulk') {
        if (!bulkInput.value || bulkInput.value < 1) {
            showPopup('Error', 'Please enter a valid quantity for bulk order.');
            return;
        }
        quantity = `${bulkInput.value} Liters (Bulk)`;
    } else {
        quantity = `${quantitySelect.value} Liter(s)`;
    }

    const item = {
        product: productName,
        quantity: quantity,
    };
    cart.push(item);
    updateCartDisplay();
    showPopup('Success', `${productName} (${quantity}) added to cart!`);
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear the current cart display

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.quantity}`;
        cartItems.appendChild(li);
    });
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        showPopup('Error', 'Your cart is empty. Please add items to proceed.');
    } else {
        showPopup('Checkout', 'Proceeding to checkout...');
        // Here, you can redirect to a checkout page or process the order
        console.log('Cart Items:', cart);
        cart = []; // Clear the cart after checkout
        updateCartDisplay();
    }
}

function openUserDetailsPopup() {
    document.getElementById('user-details-popup').classList.remove('hidden');
}

function closeUserDetailsPopup() {
    document.getElementById('user-details-popup').classList.add('hidden');
}

function openPaymentMethodsPopup() {
    document.getElementById('payment-methods-popup').classList.remove('hidden');
}

function closePaymentMethodsPopup() {
    document.getElementById('payment-methods-popup').classList.add('hidden');
}



function togglePopup(popupId, action) {
    const popup = document.getElementById(popupId);
    if (action === "open") {
        popup.classList.remove("hidden");
    } else if (action === "close") {
        popup.classList.add("hidden");
    }
}

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove("hidden");
}

function closeUserDetailsPopup() {
    document.getElementById('user-details-popup').classList.add('hidden');
}

function closePaymentMethodsPopup() {
    document.getElementById('payment-methods-popup').classList.add('hidden');
}

function submitUserDetails() {
    document.getElementById('user-details-popup').classList.add('hidden');
    document.getElementById('payment-methods-popup').classList.remove('hidden');
}


function closeUserDetailsPopup() {
    document.getElementById('user-details-popup').classList.add('hidden');
}

function closePaymentMethodsPopup() {
    document.getElementById('payment-methods-popup').classList.add('hidden');
}

function selectPaymentMethod(method) {
    let paymentUrl = "";

    // Replace with your payee details and amount
    const payeeVPA = "9443033894@upi"; 
    const payeeName = "GV Oil Mill";
    const amount = "500"; // Example amount in INR

    switch (method) {
        case 'Google Pay':
            paymentUrl = `upi://pay?pa=${payeeVPA}&pn=${payeeName}&am=${amount}&cu=INR`;
            break;
        case 'PhonePe':
            paymentUrl = `https://phonepe.com/app?pa=${payeeVPA}&pn=${payeeName}&am=${amount}`;
            break;
        case 'Paytm':
            paymentUrl = `paytmmp://pay?pa=${payeeVPA}&pn=${payeeName}&am=${amount}&cu=INR`;
            break;
        case 'Cash on Delivery':
            alert("Cash on Delivery selected.");
            return;
        default:
            alert("Invalid payment method selected.");
            return;
    }

    // Open payment URL
    window.location.href = paymentUrl;
}
