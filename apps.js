// Variáveis globais
let buscarproducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];



// Atualiza o botão do carrinho com a quantidade de itens
function updateCartButton() {
    const cartButton = document.getElementById('cart-button');
    cartButton.textContent = `Carrinho (${cart.length})`;
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


// Exibe os produtos na página
function displayProducts(productList) {
    const productsSection = document.getElementById('products');
    const noProductsMessage = document.getElementById('no-products-message');

    if (productList.length > 0) {
        productsSection.innerHTML = productList.map(p => `
        <div class="product">
            <a href="product.html?id=${p.id}">
                <img src="${p.image}" alt="${p.name}">
                <h2>${p.name}</h2>
                <p>R$ ${p.price.toFixed(2)}</p>
            </a>
            <button onclick="addProductToCart(${p.id})">Adicionar ao Carrinho</button>
        </div>
    `).join('');
    noProductsMessage.style.display = 'none'; // Oculta a mensagem
    } else {
        productsSection.innerHTML = ''; // Limpa a seção de produtos
        noProductsMessage.style.display = 'block'; // Exibe a mensagem
    }
}
    // Função para pesquisar produtos
    function searchProducts(query) {
        const lowerCaseQuery = query.toLowerCase();
        if (lowerCaseQuery === '') {
            // Se a consulta estiver vazia, exibe todos os produtos
            displayProducts(products);
        } else {
            // Filtra os produtos com base na consulta
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(lowerCaseQuery)
            );
            displayProducts(filteredProducts);
        }
    }

    // Adiciona o evento de clique ao botão de pesquisa
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        searchProducts(query);
    });

    // Carrega os produtos ao inicializar a página
    function loadProducts() {
        // Aqui você deve carregar os produtos do arquivo data.js ou de uma API
        buscarproducts = window.products || []; // Acesso global
        displayProducts(products);
    }

    // Inicializa a página
    document.addEventListener('DOMContentLoaded', () => {
        loadProducts();
        updateCartButton();
    });