<script>
  const wishlist = [];

  function toggleWishlist(el) {
    const productCard = el.closest('.product-card');
    const name = productCard.getAttribute('data-name');
    const price = productCard.getAttribute('data-price');

    // Prevent duplicates
    const alreadyExists = wishlist.find(item => item.name === name);
    if (!alreadyExists) {
      wishlist.push({ name, price });
      updateWishlistPopup();
    }
  }

  function updateWishlistPopup() {
    const list = document.getElementById('wishlistItems');
    list.innerHTML = ''; // Clear previous

    wishlist.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      list.appendChild(li);
    });

    // Show popup
    document.getElementById('wishlistPopup').style.display = 'block';
  }

  // Optional: Toggle Wishlist Popup when clicking ❤️ in top bar
  document.querySelectorAll('.icon')[0].addEventListener('click', () => {
    const popup = document.getElementById('wishlistPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });
</script>
  <script>
    document.getElementById('loginLink').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
  }
  document.querySelector('.close').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
  }
  window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
      document.getElementById('loginModal').style.display = 'none';
    }
  }
</script>
  <script>
  // Open Login Modal
  document.getElementById('loginLink').onclick = function () {
    document.getElementById('loginModal').style.display = 'block';
  }

  // Close Login Modal
  document.getElementById('loginClose').onclick = function () {
    document.getElementById('loginModal').style.display = 'none';
  }

  // Open Signup Modal from link inside Login popup
  document.getElementById('switchToSignup').onclick = function () {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'block';
  }

  // Close Signup Modal
  document.getElementById('signupClose').onclick = function () {
    document.getElementById('signupModal').style.display = 'none';
  }

  // Close Modals by clicking outside
  window.onclick = function (event) {
    if (event.target == document.getElementById('loginModal')) {
      document.getElementById('loginModal').style.display = 'none';
    }
    if (event.target == document.getElementById('signupModal')) {
      document.getElementById('signupModal').style.display = 'none';
    }
  }
</script>
<script>
  function handleLogin() {
    const username = document.getElementById('name').value;
    if (username.trim() !== '') {
      document.getElementById('userDisplayName').innerText = username;
      document.getElementById('loginModal').style.display = 'none';

      // Optional: Hide Login Link from Nav
      document.getElementById('loginLink').style.display = 'none';
    }
  }
</script>
