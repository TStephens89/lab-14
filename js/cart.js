/* global Cart */
'use strict';
// let newCart=[]
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let rows = document.querySelectorAll('tbody > tr')
  if (rows) {
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
let tableBody = document.querySelector('tbody');
for (let i = 0; i < cart.items.length; i++){
  let tRow = document.createElement('tr');
  tableBody.appendChild(tRow)
  let tData = document.createElement('td');
  let tItem = document.createElement('td');
  let tAmount = document.createElement('td');

  // TODO: Find the table body
tData.addEventListener('click', removeItemFromCart);
tData.setattribute('id', newCart[i].item);

tData.textContent = 'X'
tItem.textContent = cart[i].item;
tAmount.textContent = cart[i].quantity;


tRow.appendChild(tData);
tRow.appendChild(tAmount);
tRow. appendChild(tItem);

}
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
newCart = newCart.filter(product => product.item != event.target.id);
localStorage.setItem('cartData', JSON.stringify(Cart))
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
