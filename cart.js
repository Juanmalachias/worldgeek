// Recupera o carrinho do localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Atualiza a exibição dos itens do carrinho
function displayCart() {
    const cartDetailsSection = document.getElementById('cart-details');
    const totalPriceElement = document.getElementById('total-price').querySelector('p');
    
    if (cart.length === 0) {
        cartDetailsSection.innerHTML = '<p>Seu carrinho está vazio.</p>';
        totalPriceElement.textContent = 'Total: R$ 0,00';
    } else {
        // Mapeia os itens do carrinho para HTML
        const cartItemsHtml = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>Preço Unitário: R$ ${item.price.toFixed(2)}</p>
                <p>Quantidade: ${item.quantity}</p>
                <p>Total: R$ ${item.totalPrice.toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})">Remover</button>
            </div>
        `).join('');
        
        cartDetailsSection.innerHTML = cartItemsHtml;
        
        // Calcula o preço total do carrinho
        const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    }
}

// Remove um item do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart)); // Atualiza o localStorage
    displayCart(); // Atualiza a exibição do carrinho
}

// Inicializa a página
displayCart();
