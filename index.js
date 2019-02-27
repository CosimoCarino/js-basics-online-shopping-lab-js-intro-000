var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var n = Math.floor(Math.random() * 100) + 1;
cart.push({itemName: item, itemPrice: n})
return `${item} has been added to your cart.`
}

function viewCart() {
  items = []
  for (var i = 1; i < cart.length; i++) {
      items.push(cart[i].itemName)
      items.push(cart[i].itemPrice)
      return ', and ${cart[i].itemName} at ${cart[i].itemPrice}'
  }
    if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  else {
    return  `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
      }
}






function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
