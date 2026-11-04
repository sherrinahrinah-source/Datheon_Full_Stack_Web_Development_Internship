
// ==========================================
// 1. GET HTML ELEMENTS
// ==========================================

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");


// ==========================================
// 2. PRODUCT DATABASE
// Each product has five images
// ==========================================

const products = [

    {
        id: 1,
        name: "Classic Black Jacket",
        category: "Men",
        price: 3500,
        description: "A stylish jacket for everyday wear.",
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600",
            "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600"
        ]
    },

    {
        id: 2,
        name: "Elegant Women's Dress",
        category: "Women",
        price: 2800,
        description: "An elegant dress for special occasions.",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600",
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600",
            "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600"
        ]
    },

    {
        id: 3,
        name: "Casual Sneakers",
        category: "Shoes",
        price: 4200,
        description: "Comfortable sneakers with a modern look.",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
            "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600"
        ]
    },

    {
        id: 4,
        name: "Luxury Handbag",
        category: "Accessories",
        price: 3200,
        description: "A beautiful handbag for everyday fashion.",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&sat=-30"
        ]
    },

    {
        id: 5,
        name: "Men's Casual Shirt",
        category: "Men",
        price: 1800,
        description: "A smart casual shirt for modern men.",
        images: [
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
            "https://images.unsplash.com/photo-1620012253295-c15a3e2d7e0b?w=600",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600"
        ]
    },

    {
        id: 6,
        name: "Women's Fashion Top",
        category: "Women",
        price: 1500,
        description: "A fashionable top for a stylish appearance.",
        images: [
            "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600",
            "https://images.unsplash.com/photo-1564257577-2d4b6f1e1c2e?w=600",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600",
            "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600"
        ]
    },

    {
        id: 7,
        name: "Classic Wristwatch",
        category: "Accessories",
        price: 2500,
        description: "A timeless accessory for every occasion.",
        images: [
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",
            "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600",
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
        ]
    },

    {
        id: 8,
        name: "Sport Sneakers",
        category: "Shoes",
        price: 3900,
        description: "Lightweight sneakers for daily activities.",
        images: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
            "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
        ]
    }

];


// ==========================================
// 3. APPLICATION VARIABLES
// ==========================================

let currentCategory = "All";
let searchTerm = "";
let cart = [];


// ==========================================
// 4. FORMAT KENYAN CURRENCY
// ==========================================

function formatPrice(price) {

    return "KSh " + price.toLocaleString("en-KE");

}


// ==========================================
// 5. DISPLAY PRODUCTS
// ==========================================

function displayProducts() {

    productGrid.innerHTML = "";

    const filteredProducts = products.filter(function(product) {

        const matchesCategory =
            currentCategory === "All" ||
            product.category === currentCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;

    });


    if (filteredProducts.length === 0) {

        const message = document.createElement("p");

        message.className = "no-products";

        message.textContent = "No products found.";

        productGrid.appendChild(message);

        return;

    }


    filteredProducts.forEach(function(product) {

        const productCard = document.createElement("article");

        productCard.className = "product-card";

        productCard.innerHTML = `

            <div class="product-gallery">

                <img
                    class="product-image"
                    src="${product.images[0]}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <button
                    class="gallery-prev"
                    type="button"
                    aria-label="Previous image"
                >
                    &#10094;
                </button>

                <button
                    class="gallery-next"
                    type="button"
                    aria-label="Next image"
                >
                    &#10095;
                </button>

                <span class="image-counter">1 / 5</span>

                <div class="gallery-dots">

                    ${product.images.map(function(image, index) {

                        return `
                            <button
                                class="gallery-dot ${index === 0 ? "active" : ""}"
                                data-index="${index}"
                                aria-label="Show image ${index + 1}"
                                type="button"
                            ></button>
                        `;

                    }).join("")}

                </div>

            </div>

            <div class="product-info">

                <p class="product-category">${product.category}</p>

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <p class="product-price">
                    ${formatPrice(product.price)}
                </p>

                <button
                    class="add-cart-btn"
                    data-id="${product.id}"
                    type="button"
                >
                    Add to Cart
                </button>

            </div>

        `;


        productGrid.appendChild(productCard);


        // PRODUCT GALLERY CONTROLS

        let imageIndex = 0;

        const productImage =
            productCard.querySelector(".product-image");

        const counter =
            productCard.querySelector(".image-counter");

        const dots =
            productCard.querySelectorAll(".gallery-dot");


        function updateImage() {

            productImage.src = product.images[imageIndex];

            counter.textContent =
                (imageIndex + 1) + " / " + product.images.length;

            dots.forEach(function(dot, index) {

                dot.classList.toggle(
                    "active",
                    index === imageIndex
                );

            });

        }


        // PREVIOUS IMAGE

        productCard.querySelector(".gallery-prev")
            .addEventListener("click", function() {

                imageIndex--;

                if (imageIndex < 0) {

                    imageIndex = product.images.length - 1;

                }

                updateImage();

            });


        // NEXT IMAGE

        productCard.querySelector(".gallery-next")
            .addEventListener("click", function() {

                imageIndex++;

                if (imageIndex >= product.images.length) {

                    imageIndex = 0;

                }

                updateImage();

            });


        // IMAGE DOTS

        dots.forEach(function(dot) {

            dot.addEventListener("click", function() {

                imageIndex = Number(dot.dataset.index);

                updateImage();

            });

        });


        // ADD TO CART

        productCard.querySelector(".add-cart-btn")
            .addEventListener("click", function() {

                addToCart(product.id);

            });

    });

}


// ==========================================
// 6. CATEGORY FILTERS
// ==========================================

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        currentCategory = button.dataset.category;

        categoryButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        displayProducts();

    });

});


// ==========================================
// 7. SEARCH PRODUCTS
// ==========================================

searchInput.addEventListener("input", function() {

    searchTerm = searchInput.value.trim().toLowerCase();

    displayProducts();

});


// ==========================================
// 8. SAVE CART TO LOCAL STORAGE
// ==========================================

function saveCart() {

    localStorage.setItem("noirFashionCart", JSON.stringify(cart));

}


// ==========================================
// 9. LOAD CART FROM LOCAL STORAGE
// ==========================================

function loadCart() {

    try {

        const savedCart = localStorage.getItem("noirFashionCart");

        const parsedCart = savedCart ? JSON.parse(savedCart) : [];

        if (Array.isArray(parsedCart)) {

            cart = parsedCart.filter(function(item) {

                return products.some(function(product) {

                    return product.id === item.id;

                }) && Number.isInteger(item.quantity) && item.quantity > 0;

            });

        }

    } catch (error) {

        cart = [];

        console.error("Unable to load shopping cart:", error);

    }

    updateCart();

}


// ==========================================
// 10. ADD PRODUCT TO CART
// ==========================================

function addToCart(productId) {

    const existingItem = cart.find(function(item) {

        return item.id === productId;

    });


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            id: productId,
            quantity: 1

        });

    }

    saveCart();

    updateCart();

}


// ==========================================
// 11. UPDATE CART
// ==========================================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let totalQuantity = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your shopping cart is empty.
            </p>
        `;

    }


    cart.forEach(function(item) {

        const product = products.find(function(product) {

            return product.id === item.id;

        });

        if (!product) return;

        total += product.price * item.quantity;

        totalQuantity += item.quantity;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <img
                src="${product.images[0]}"
                alt="${product.name}"
            >

            <div class="cart-item-info">

                <h4>${product.name}</h4>

                <p>${formatPrice(product.price)}</p>

                <div class="quantity-controls">

                    <button
                        class="decrease-quantity"
                        type="button"
                        aria-label="Decrease quantity"
                    >-</button>

                    <span>${item.quantity}</span>

                    <button
                        class="increase-quantity"
                        type="button"
                        aria-label="Increase quantity"
                    >+</button>

                </div>

                <button class="remove-item" type="button">
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);


        // DECREASE QUANTITY

        cartItem.querySelector(".decrease-quantity")
            .addEventListener("click", function() {

                changeQuantity(item.id, -1);

            });


        // INCREASE QUANTITY

        cartItem.querySelector(".increase-quantity")
            .addEventListener("click", function() {

                changeQuantity(item.id, 1);

            });


        // REMOVE PRODUCT

        cartItem.querySelector(".remove-item")
            .addEventListener("click", function() {

                removeFromCart(item.id);

            });

    });


    cartCount.textContent = totalQuantity;

    cartTotal.textContent = formatPrice(total);

    checkoutButton.disabled = cart.length === 0;

}


// ==========================================
// 12. CHANGE PRODUCT QUANTITY
// ==========================================

function changeQuantity(productId, amount) {

    const item = cart.find(function(item) {

        return item.id === productId;

    });

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(function(cartItem) {

            return cartItem.id !== productId;

        });

    }

    saveCart();

    updateCart();

}


// ==========================================
// 13. REMOVE PRODUCT FROM CART
// ==========================================

function removeFromCart(productId) {

    cart = cart.filter(function(item) {

        return item.id !== productId;

    });

    saveCart();

    updateCart();

}


// ==========================================
// 14. OPEN AND CLOSE CART
// ==========================================

function openShoppingCart() {

    cartPanel.classList.add("open");

    cartOverlay.classList.add("show");

}

function closeShoppingCart() {

    cartPanel.classList.remove("open");

    cartOverlay.classList.remove("show");

}


cartButton.addEventListener("click", openShoppingCart);

closeCart.addEventListener("click", closeShoppingCart);

cartOverlay.addEventListener("click", closeShoppingCart);


// ==========================================
// 15. CHECKOUT
// ==========================================

checkoutButton.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your shopping cart is empty.");

        return;

    }

    const confirmed = confirm(
        "Your order total is " + cartTotal.textContent +
        ". This is a demonstration checkout. Continue?"
    );

    if (confirmed) {

        alert(
            "Thank you for trying NOIR FASHION! " +
            "This demonstration does not process real payments."
        );

    }

});


// ==========================================
// 16. LOAD APPLICATION
// ==========================================

loadCart();

displayProducts();
