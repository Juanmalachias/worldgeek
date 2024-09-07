let cart = JSON.parse(localStorage.getItem('cart')) || [];


// Função para obter o ID do produto da URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

// Exibe os detalhes do produto
function displayProduct() {
    const productId = getProductIdFromUrl();
    const product = products.find(p => p.id === productId);

    if (product) {
        const productDetailsSection = document.getElementById('product-details');
        productDetailsSection.innerHTML = `
            <div class="product-detail">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>R$ ${product.price.toFixed(2)}</p>
                <p>${product.description || 'Sem descrição disponível.'}</p>
                <button id="add-to-cart-button">Adicionar ao Carrinho</button>
            </div>
        `;

        // Adiciona o evento de clique ao botão
        document.getElementById('add-to-cart-button').addEventListener('click', () => addProductToCart(productId));
    } else {
        document.getElementById('product-details').innerHTML = '<p>Produto não encontrado.</p>';
    }
}

// Adiciona um produto ao carrinho
function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        // Verifica se o produto já está no carrinho
        const existingProductIndex = cart.findIndex(p => p.id === productId);

        if (existingProductIndex !== -1) {
            // Atualiza a quantidade e o totalPrice do produto existente
            cart[existingProductIndex].quantity += 1;
            cart[existingProductIndex].totalPrice = cart[existingProductIndex].quantity * product.price;
        } else {
            // Adiciona um novo produto ao carrinho
            cart.push({
                ...product,
                quantity: 1,
                totalPrice: product.price
            });
        }

        // Atualiza o localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartButton();
        alert('Produto adicionado ao carrinho!');
    }
}


// Atualiza o botão do carrinho com a quantidade de itens
function updateCartButton() {
    const cartButton = document.getElementById('cart-button');
    cartButton.textContent = `Carrinho (${cart.length})`;
}

// Inicializa a página
displayProduct();
