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



let cart = [];

const prices = {
    coconut: 300,
    sesame: 300,
    groundnut: 200,
};

function updatePrice(productType, pricePerLiter) {
    const quantitySelect = document.getElementById(`${productType}-quantity`);
    const bulkInput = document.getElementById(`${productType}-bulk-quantity`);
    const totalPriceElement = document.getElementById(`${productType}-total-price`);

    let quantity;
    if (quantitySelect.value === 'bulk') {
        quantity = bulkInput.value ? parseInt(bulkInput.value) : 0;
    } else {
        quantity = parseInt(quantitySelect.value);
    }

    const totalPrice = quantity * pricePerLiter;
    totalPriceElement.textContent = totalPrice;
}

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
// function addToCart(productName, productType) {
//     const quantitySelect = document.getElementById(`${productType}-quantity`);
//     const bulkInput = document.getElementById(`${productType}-bulk-quantity`);
//     let quantity;

//     if (quantitySelect.value === 'bulk') {
//         if (!bulkInput.value || bulkInput.value < 1) {
//             showPopup('Error', 'Please enter a valid quantity for bulk order.');
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
//     showPopup('Success', `${productName} (${quantity}) added to cart!`);
// }
function addToCart(productName, productType, pricePerLiter) {
    const quantitySelect = document.getElementById(`${productType}-quantity`);
    const bulkInput = document.getElementById(`${productType}-bulk-quantity`);
    let quantity;

    if (quantitySelect.value === 'bulk') {
        if (!bulkInput.value || bulkInput.value < 1) {
            alert('Please enter a valid quantity for bulk order.');
            return;
        }
        quantity = `${bulkInput.value} Liters (Bulk)`;
    } else {
        quantity = `${quantitySelect.value} Liter(s)`;
    }

    const totalPrice = quantitySelect.value === 'bulk' ? bulkInput.value * pricePerLiter : quantitySelect.value * pricePerLiter;

    const item = {
        product: productName,
        quantity: quantity,
        price: totalPrice,
    };
    cart.push(item);
    updateCartDisplay();
    alert(`${productName} (${quantity}) added to cart!`);
}
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    cartItems.innerHTML = ''; // Clear the current cart display

    let totalCartPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.quantity} - ₹${item.price}`;
        cartItems.appendChild(li);
        totalCartPrice += item.price;
    });

    cartTotalPrice.textContent = totalCartPrice;
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
function checkout(userDetails, cartItems) {
    if (cartItems.length === 0) {
        alert('Your cart is empty. Please add items to proceed.');
        return;
    }

    // Generate the bill
    const bill = generateBill(userDetails, cartItems);

    // Send the bill via WhatsApp
    sendBillViaWhatsApp(userDetails.mobile, bill);

    // Clear the cart after checkout
    cart = [];
    updateCartDisplay();
}
function generateBill(userDetails, cartItems) {
    let bill = `*GV Oil Mill Invoice*\n\n`;
    bill += `*Customer Name:* ${userDetails.name}\n`;
    bill += `*Mobile:* ${userDetails.mobile}\n`;
    bill += `*Address:* ${userDetails.address}\n\n`;
    bill += `*Order Details:*\n`;

    let totalAmount = 0;
    cartItems.forEach((item, index) => {
        bill += `${index + 1}. ${item.product} - ${item.quantity} - ₹${item.price}\n`;
        totalAmount += item.price;
    });

    bill += `\n*Total Amount:* ₹${totalAmount}\n`;
    bill += `\n*Thank you for your order!*`;
    return bill;
}

function openUserDetailsPopup() {
    document.getElementById('user-details-popup').classList.remove('hidden');
}

function closeUserDetailsPopup() {
    document.getElementById('user-details-popup').classList.add('hidden');
}

// function openPaymentMethodsPopup() {
//     document.getElementById('payment-methods-popup').classList.remove('hidden');
// }

function closePaymentMethodsPopup() {
    document.getElementById('payment-methods-popup').classList.add('hidden');
}



// function togglePopup(popupId, action) {
//     const popup = document.getElementById(popupId);
//     if (action === "open") {
//         popup.classList.remove("hidden");
//     } else if (action === "close") {
//         popup.classList.add("hidden");
//     }
// }

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

function togglePopup(popupId, action) {
    const popup = document.getElementById(popupId);
    popup.classList.toggle("hidden", action !== "open");
}
