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
