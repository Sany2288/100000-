// Menu toggle
function toggleMenu(){
  document.querySelector('header nav ul').classList.toggle('show');
}

// Scroll to section
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Cart functionality
let cart = [];

function addToCart(item, price){
  cart.push({item, price});
  updateCart();
}

function updateCart(){
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((c, index) => {
    total += c.price;
    const li = document.createElement('li');
    li.textContent = `${c.item} - $${c.price}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✖';
    removeBtn.onclick = () => { cart.splice(index,1); updateCart(); };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
  document.getElementById('cart-total').innerText = total;
  document.getElementById('cart-count').innerText = cart.length;
}

// Toggle Cart Panel
function toggleCart(){
  document.getElementById('cart-panel').classList.toggle('show');
}

// Checkout
function checkout(){
  if(cart.length===0){ alert('Кошик порожній'); return; }
  let message = 'Дякуємо! Ви замовили:\n';
  cart.forEach(c=>{message += `${c.item} - $${c.price}\n`;});
  message += `Загальна сума: $${cart.reduce((a,b)=>a+b.price,0)}`;
  alert(message);
  cart = [];
  updateCart();
  toggleCart();
}

// Contact form
function submitForm(e){
  e.preventDefault();
  alert("Дякую! Ваше повідомлення відправлено.");
  e.target.reset();
}
