document.addEventListener('DOMContentLoaded', () => {

    // --- CART LOGIC (GLOBAL) ---
    let cart = JSON.parse(localStorage.getItem('quickBiteCart')) || [];

    const saveCart = () => {
        localStorage.setItem('quickBiteCart', JSON.stringify(cart));
    };

    const updateCart = () => {
        const cartItemsContainer = document.getElementById('cart-items-container');
        let subtotal = 0;
        let totalItems = 0;

        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty.</p>';
            } else {
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'flex justify-between items-center mb-4 border-b pb-2';
                    itemElement.innerHTML = `
                        <div>
                            <p class="font-semibold">${item.name}</p>
                            <p class="text-sm text-gray-600">₹${item.price.toFixed(0)} x ${item.quantity}</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <p class="font-bold">₹${(item.price * item.quantity).toFixed(0)}</p>
                            <button class="text-red-500 hover:text-red-700" data-remove-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                    subtotal += item.price * item.quantity;
                    totalItems += item.quantity;
                });
            }

            cartItemsContainer.querySelectorAll('[data-remove-id]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.dataset.removeId;
                    cart = cart.filter(i => i.id !== id);
                    saveCart();
                    updateCart();
                });
            });
        }

        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartCount = document.getElementById('cart-count');
        const mobileCartCount = document.getElementById('mobile-cart-count');

        if(cartSubtotal) cartSubtotal.textContent = `₹${subtotal.toFixed(0)}`;
        if(cartCount) cartCount.textContent = totalItems;
        if(mobileCartCount) mobileCartCount.textContent = totalItems;
    };


    // --- SHARED ELEMENTS (GLOBAL) ---
    const cartIconBtn = document.getElementById('cart-icon-btn');
    const mobileCartBtn = document.getElementById('mobile-cart-btn');
    const cartPanel = document.getElementById('cart-panel');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const checkoutBtn = document.getElementById('checkout-btn'); // Checkout button in cart panel

    // --- SHARED FUNCTIONS (GLOBAL) ---
    const openCartPanel = () => {
        // Prevent opening cart on checkout page after order is placed
        if (document.getElementById('confirmation-message') && !document.getElementById('confirmation-message').classList.contains('hidden')) {
            return;
        }
        if (!cartPanel) return;
        cartPanel.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        setTimeout(() => {
            cartPanel.classList.remove('opacity-0');
            const cartPanelContent = document.getElementById('cart-panel-content');
            if(cartPanelContent) cartPanelContent.classList.remove('translate-x-full');
        }, 10);
        if (mobileMenu) mobileMenu.classList.add('hidden');
    };

    const closeCartPanel = () => {
        if (!cartPanel) return;
        cartPanel.classList.add('opacity-0');
        const cartPanelContent = document.getElementById('cart-panel-content');
        if(cartPanelContent) cartPanelContent.classList.add('translate-x-full');
        setTimeout(() => {
            cartPanel.classList.add('hidden');
            const itemModal = document.getElementById('item-modal');
            // Check if itemModal exists AND is hidden before removing overflow
            if ((!itemModal || itemModal.classList.contains('hidden'))) {
                document.body.classList.remove('overflow-hidden');
            }
        }, 300);
    };

    const checkScroll = () => {
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        }
    };

    // --- SHARED EVENT LISTENERS (GLOBAL) ---
    if (cartIconBtn) cartIconBtn.addEventListener('click', openCartPanel);
    if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCartPanel);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartPanel);
    if (cartPanel) cartPanel.addEventListener('click', e => { if (e.target === cartPanel) closeCartPanel(); });

    if (mobileMenuButton) mobileMenuButton.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.toggle('hidden');
    });

    if (scrollToTopBtn) {
        window.addEventListener('scroll', checkScroll);
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- PROCEED TO CHECKOUT BUTTON ---
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                console.log("Cart is empty. Add items before checking out.");
                // Optionally show a message instead of just console logging
                 alert("Your cart is empty. Please add items before proceeding to checkout.");
                return;
            }
            // Redirect to checkout page
            window.location.href = 'checkout.html';
        });
    }


    // --- MODAL LOGIC (SHARED BY index, category, restaurant, deals) ---
    const itemModal = document.getElementById('item-modal');
    let currentItem = null;

    const openItemModal = (item, restaurantName) => {
        if (!itemModal) return;
        currentItem = item;
        const modalRestaurantName = document.getElementById('modal-restaurant-name');
        const modalItemImg = document.getElementById('modal-item-img');
        const modalItemName = document.getElementById('modal-item-name');
        const modalItemDesc = document.getElementById('modal-item-desc');
        const modalItemPrice = document.getElementById('modal-item-price');

        if(modalRestaurantName) modalRestaurantName.textContent = `From ${restaurantName}`;
        if(modalItemImg) modalItemImg.src = currentItem.img;
        if(modalItemName) modalItemName.textContent = currentItem.name;
        if(modalItemDesc) modalItemDesc.textContent = currentItem.desc;
        if(modalItemPrice) modalItemPrice.textContent = `₹${currentItem.price.toFixed(0)}`;

        itemModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        setTimeout(() => {
            itemModal.classList.remove('opacity-0');
            const modalContent = itemModal.querySelector('.modal-content');
            if (modalContent) modalContent.classList.remove('scale-95');
        }, 10);
    };

    const closeItemModal = () => {
        if (!itemModal) return;
        itemModal.classList.add('opacity-0');
        const modalContent = itemModal.querySelector('.modal-content');
        if (modalContent) modalContent.classList.add('scale-95');
        setTimeout(() => {
            itemModal.classList.add('hidden');
            if (cartPanel && cartPanel.classList.contains('hidden')) {
                 document.body.classList.remove('overflow-hidden');
            }
            const quantityInput = document.getElementById('item-quantity');
            if (quantityInput) quantityInput.value = '1';
            currentItem = null;
        }, 300);
    };

    if (itemModal) {
        const closeItemModalBtn = document.getElementById('close-item-modal-btn');
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        const decreaseQuantityBtn = document.getElementById('decrease-quantity');
        const increaseQuantityBtn = document.getElementById('increase-quantity');
        const itemQuantityInput = document.getElementById('item-quantity');

        if (closeItemModalBtn) closeItemModalBtn.addEventListener('click', closeItemModal);
        itemModal.addEventListener('click', e => { if (e.target === itemModal) closeItemModal(); });

        if (decreaseQuantityBtn) decreaseQuantityBtn.addEventListener('click', () => {
            if (itemQuantityInput) {
                let quantity = parseInt(itemQuantityInput.value);
                if (quantity > 1) itemQuantityInput.value = quantity - 1;
            }
        });

        if (increaseQuantityBtn) increaseQuantityBtn.addEventListener('click', () => {
             if (itemQuantityInput) {
                let quantity = parseInt(itemQuantityInput.value);
                itemQuantityInput.value = quantity + 1;
            }
        });

        if (addToCartBtn) addToCartBtn.addEventListener('click', () => {
            if (itemQuantityInput && currentItem) {
                const quantity = parseInt(itemQuantityInput.value);
                const existingItem = cart.find(item => item.id === currentItem.id);

                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({ ...currentItem, quantity });
                }

                saveCart();
                updateCart();
                closeItemModal();
            } else {
                console.error("currentItem is not set. Cannot add to cart.");
            }
        });
    }


    // --- PAGE-SPECIFIC LOGIC ---

    // === LOGIC FOR INDEX.HTML ===
    if (document.getElementById('restaurants-section')) {
        const findFoodBtn = document.getElementById('find-food-btn');
        const addressInput = document.getElementById('address-input');
        const messageBox = document.getElementById('message-box');

        const searchResultsSection = document.getElementById('search-results');
        const searchResultsContainer = document.getElementById('search-results-container');
        const topCategoriesSection = document.getElementById('top-categories-section');
        const restaurantsSection = document.getElementById('restaurants-section');
        const appDownloadSection = document.getElementById('app-download-section');

        const showMainContent = (show = true) => {
             if (topCategoriesSection) topCategoriesSection.classList.toggle('hidden', !show);
             if (restaurantsSection) restaurantsSection.classList.toggle('hidden', !show);
             if (appDownloadSection) appDownloadSection.classList.toggle('hidden', !show);
        };

        const searchDishes = () => {
            const searchTerm = addressInput.value.toLowerCase().trim();

            if (!searchResultsSection || !searchResultsContainer || !messageBox) return;

            searchResultsContainer.innerHTML = '';
            messageBox.textContent = '';
            messageBox.classList.remove('text-red-400', 'text-green-400');

            if (searchTerm === '') {
                searchResultsSection.classList.add('hidden');
                showMainContent(true);
                return;
            }

            showMainContent(false);
            searchResultsSection.classList.remove('hidden');

            let foundMatch = false;
            let resultsHTML = '';

            Object.entries(restaurantsData).forEach(([id, restaurant]) => {
                restaurant.items.forEach(item => {
                    if (item.name.toLowerCase().includes(searchTerm)) {
                        foundMatch = true;
                         resultsHTML += `
                            <div class="relative flex items-center border-b pb-4 bg-white p-4 rounded-lg shadow-sm">
                                <img src="${item.img}" alt="${item.name}" class="w-24 h-24 object-cover rounded-md mr-4">
                                <div class="flex-grow">
                                    <h4 class="text-lg font-semibold">${item.name}</h4>
                                    <p class="text-sm text-gray-500">From: <a href="restaurant.html?id=${id}" class="text-orange-600 hover:underline">${restaurant.name}</a></p>
                                    <p class="text-sm text-gray-600 mt-1">${item.desc}</p>
                                    <p class="text-md font-bold text-orange-600 mt-1">₹${item.price.toFixed(0)}</p>
                                </div>
                                <button class="add-item-btn bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-200"
                                        data-item-id="${item.id}"
                                        data-restaurant-id="${id}">
                                    Add
                                </button>
                                ${item.deal ? '<span class="deal-item-tag">Deal!</span>' : ''}
                            </div>
                        `;
                    }
                });
            });

            if (foundMatch) {
                searchResultsContainer.innerHTML = resultsHTML;
                // searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                searchResultsContainer.innerHTML = `<p class="text-gray-600 text-lg text-center">No dishes found matching "${searchTerm}".</p>`;
            }
        };

        if (findFoodBtn) {
            findFoodBtn.addEventListener('click', searchDishes);
        }

        if (addressInput) {
            addressInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    searchDishes();
                }
            });
            addressInput.addEventListener('input', () => {
                if (addressInput.value.trim() === '') {
                    if (searchResultsSection) searchResultsSection.classList.add('hidden');
                    if (searchResultsContainer) searchResultsContainer.innerHTML = '';
                    if (messageBox) messageBox.textContent = '';
                    showMainContent(true);
                }
            });
        }

        if (searchResultsContainer) {
            searchResultsContainer.addEventListener('click', (e) => {
                const button = e.target.closest('.add-item-btn');
                if (button) {
                    const itemId = button.dataset.itemId;
                    const restaurantId = button.dataset.restaurantId;
                    const restaurant = restaurantsData[restaurantId];
                    if (restaurant && restaurant.items) { // Check restaurant and items exist
                        const item = restaurant.items.find(i => i.id === itemId);
                        if(item) {
                            openItemModal(item, restaurant.name);
                        }
                    }
                }
            });
        }
    }

    // === LOGIC FOR RESTAURANTS.HTML ===
    if (document.getElementById('restaurants-title')) {
        const gridEl = document.getElementById('restaurant-grid');
        const loadingEl = document.getElementById('loading-restaurants');

        if (gridEl && loadingEl) {
             gridEl.innerHTML = '';

            Object.entries(restaurantsData).forEach(([id, restaurant]) => {
                const cardLink = document.createElement('a');
                cardLink.href = `restaurant.html?id=${id}`;
                cardLink.className = "block rounded-lg overflow-hidden shadow-md restaurant-card";
                cardLink.innerHTML = `
                    <div class="bg-white">
                        <img src="${restaurant.items && restaurant.items.length > 0 ? restaurant.items[0].img : 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-800 mb-2">${restaurant.name}</h3>
                            <p class="text-gray-600 mb-4">${restaurant.categories.join(', ')}</p>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <i class="fas fa-star text-yellow-500 mr-1"></i>
                                    <span class="text-gray-700 font-bold">4.5</span>
                                </div>
                                <span class="text-sm text-gray-600">30-40 min</span>
                            </div>
                        </div>
                    </div>
                `;
                gridEl.appendChild(cardLink);
            });
        }
    }

    // === LOGIC FOR DEALS.HTML ===
    if (document.getElementById('deals-title')) {
        const containerEl = document.getElementById('deals-container');
        const loadingEl = document.getElementById('loading-deals');

        if (containerEl && loadingEl) {
            containerEl.innerHTML = '';
            let foundDeals = false;

            Object.entries(restaurantsData).forEach(([id, restaurant]) => {
                 if (restaurant.items) { // Ensure items array exists
                    const dealItems = restaurant.items.filter(item => item.deal === true);

                    if (dealItems.length > 0) {
                        foundDeals = true;

                        const restaurantHeading = document.createElement('h2');
                        restaurantHeading.className = "text-2xl font-bold text-gray-700";
                        restaurantHeading.innerHTML = `Deals from <a href="restaurant.html?id=${id}" class="text-orange-600 hover:underline">${restaurant.name}</a>`;
                        containerEl.appendChild(restaurantHeading);

                        const itemGrid = document.createElement('div');
                        itemGrid.className = "space-y-4";

                        dealItems.forEach(item => {
                            const itemElement = document.createElement('div');
                            itemElement.className = 'relative flex items-center border-b pb-4 bg-white p-4 rounded-lg shadow-sm';
                            itemElement.innerHTML = `
                                <img src="${item.img}" alt="${item.name}" class="w-24 h-24 object-cover rounded-md mr-4">
                                 <div class="flex-grow">
                                    <h4 class="text-lg font-semibold">${item.name}</h4>
                                    <p class="text-sm text-gray-600">${item.desc}</p>
                                    <p class="text-md font-bold text-orange-600 mt-1">₹${item.price.toFixed(0)}</p>
                                </div>
                                <button class="add-item-btn bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-200"
                                        data-item-id="${item.id}"
                                        data-restaurant-id="${id}">
                                    Add
                                </button>
                                <span class="deal-item-tag">Deal!</span>
                            `;
                            itemGrid.appendChild(itemElement);
                        });

                        containerEl.appendChild(itemGrid);
                    }
                }
            });

            if (!foundDeals) {
                 if (loadingEl) loadingEl.remove();
                containerEl.innerHTML = `<p class="text-gray-600 text-lg">No deals available right now.</p>`;
            } else {
                 if (loadingEl) loadingEl.remove();
            }

             containerEl.addEventListener('click', (e) => {
                const button = e.target.closest('.add-item-btn');
                if (button) {
                    const itemId = button.dataset.itemId;
                    const restaurantId = button.dataset.restaurantId;
                    const restaurant = restaurantsData[restaurantId];
                    if (restaurant && restaurant.items) { // Check restaurant and items exist
                        const item = restaurant.items.find(i => i.id === itemId);
                        if(item) {
                            openItemModal(item, restaurant.name);
                        }
                    }
                }
            });
        }
    }


    // === LOGIC FOR CATEGORY.HTML ===
    if (document.getElementById('category-title')) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryKeyword = urlParams.get('name');

        const titleEl = document.getElementById('category-title');
        const containerEl = document.getElementById('category-dishes-container');

        if (categoryKeyword && titleEl && containerEl) {
            const decodedCategoryKeyword = decodeURIComponent(categoryKeyword).toLowerCase();
            titleEl.textContent = `Showing results for: ${decodedCategoryKeyword}`;
            document.title = `${decodedCategoryKeyword.charAt(0).toUpperCase() + decodedCategoryKeyword.slice(1)} - QuickBite`;

            let foundMatch = false;
            containerEl.innerHTML = '';

            const dishGrid = document.createElement('div');
            dishGrid.className = "space-y-4";

            Object.entries(restaurantsData).forEach(([id, restaurant]) => {
                if (restaurant.items) { // Ensure items array exists
                    restaurant.items.forEach(item => {
                        if (item.name.toLowerCase().includes(decodedCategoryKeyword)) {
                            foundMatch = true;

                            const itemElement = document.createElement('div');
                            itemElement.className = 'relative flex items-center border-b pb-4 bg-white p-4 rounded-lg shadow-sm';
                            itemElement.innerHTML = `
                                <img src="${item.img}" alt="${item.name}" class="w-24 h-24 object-cover rounded-md mr-4">
                                <div class="flex-grow">
                                    <h4 class="text-lg font-semibold">${item.name}</h4>
                                    <p class="text-sm text-gray-500">From: <a href="restaurant.html?id=${id}" class="text-orange-600 hover:underline">${restaurant.name}</a></p>
                                    <p class="text-sm text-gray-600 mt-1">${item.desc}</p>
                                    <p class="text-md font-bold text-orange-600 mt-1">₹${item.price.toFixed(0)}</p>
                                </div>
                                <button class="add-item-btn bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-200"
                                        data-item-id="${item.id}"
                                        data-restaurant-id="${id}">
                                    Add
                                </button>
                                ${item.deal ? '<span class="deal-item-tag">Deal!</span>' : ''}
                            `;
                            dishGrid.appendChild(itemElement);
                        }
                    });
                }
            });

            if (!foundMatch) {
                containerEl.innerHTML = `<p class="text-gray-600 text-lg">No dishes found matching "${decodedCategoryKeyword}".</p>`;
            } else {
                containerEl.appendChild(dishGrid);
            }

             containerEl.addEventListener('click', (e) => {
                const button = e.target.closest('.add-item-btn');
                if (button) {
                    const itemId = button.dataset.itemId;
                    const restaurantId = button.dataset.restaurantId;
                    const restaurant = restaurantsData[restaurantId];
                    if (restaurant && restaurant.items) { // Check restaurant and items exist
                        const item = restaurant.items.find(i => i.id === itemId);
                        if(item) {
                            openItemModal(item, restaurant.name);
                        }
                    }
                }
            });
        }
    }


    // === LOGIC FOR RESTAURANT.HTML ===
    if (document.getElementById('menu-container')) {
        const menuContainer = document.getElementById('menu-container');
        const restaurantNameEl = document.getElementById('restaurant-name');

        const displayMenu = (restaurant, restaurantId) => {
            if (!restaurant) {
                if (restaurantNameEl) restaurantNameEl.textContent = "Restaurant not found";
                return;
            }

            document.title = `${restaurant.name} - QuickBite`;
             if (restaurantNameEl) restaurantNameEl.textContent = restaurant.name;

            if (menuContainer) {
                menuContainer.innerHTML = '';
                 if (!restaurant.items || restaurant.items.length === 0) {
                     menuContainer.innerHTML = '<p class="text-gray-600">No menu items available for this restaurant.</p>';
                     return;
                 }
                restaurant.items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'relative flex items-center border-b pb-4 bg-white p-4 rounded-lg shadow-sm';
                    itemElement.innerHTML = `
                        <img src="${item.img}" alt="${item.name}" class="w-24 h-24 object-cover rounded-md mr-4">
                        <div class="flex-grow">
                            <h4 class="text-lg font-semibold">${item.name}</h4>
                            <p class="text-sm text-gray-600">${item.desc}</p>
                            <p class="text-md font-bold text-orange-600 mt-1">₹${item.price.toFixed(0)}</p>
                        </div>
                        <button class="add-item-btn bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-200"
                                data-item-id="${item.id}">
                            Add
                        </button>
                         ${item.deal ? '<span class="deal-item-tag">Deal!</span>' : ''}
                    `;
                    menuContainer.appendChild(itemElement);
                });

                menuContainer.querySelectorAll('.add-item-btn').forEach(button => {
                    button.addEventListener('click', () => {
                        const itemId = button.dataset.itemId;
                         if (restaurant.items){ // Check items exist
                            const item = restaurant.items.find(i => i.id === itemId);
                            if (item) {
                                openItemModal(item, restaurant.name);
                            }
                        }
                    });
                });
            }
        };

        const urlParams = new URLSearchParams(window.location.search);
        const restaurantId = urlParams.get('id');
        const restaurant = restaurantsData[restaurantId];
        displayMenu(restaurant, restaurantId);
    }

    // === LOGIC FOR CHECKOUT.HTML ===
    if (document.getElementById('checkout-summary')) {
        const checkoutItemsContainer = document.getElementById('checkout-items');
        const checkoutTotalEl = document.getElementById('checkout-total');
        const placeOrderBtn = document.getElementById('place-order-btn');
        const confirmationMessage = document.getElementById('confirmation-message');
        const placeOrderSection = document.getElementById('place-order-section');
        const checkoutSummarySection = document.getElementById('checkout-summary');

        let checkoutTotal = 0;

        if (checkoutItemsContainer && checkoutTotalEl) {
            checkoutItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                checkoutItemsContainer.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty. Please add items before checking out.</p>';
                 if (placeOrderBtn) placeOrderBtn.disabled = true;
                 if (placeOrderBtn) placeOrderBtn.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                 if (placeOrderBtn) placeOrderBtn.disabled = false; // Ensure button is enabled if cart has items
                 if (placeOrderBtn) placeOrderBtn.classList.remove('opacity-50', 'cursor-not-allowed');

                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'flex justify-between items-center';
                    itemElement.innerHTML = `
                        <div>
                            <p class="font-medium">${item.name} <span class="text-sm text-gray-500"> (x ${item.quantity})</span></p>
                             <p class="text-xs text-gray-500">₹${item.price.toFixed(0)} each</p>
                        </div>
                        <p class="font-semibold">₹${(item.price * item.quantity).toFixed(0)}</p>
                    `;
                    checkoutItemsContainer.appendChild(itemElement);
                    checkoutTotal += item.price * item.quantity;
                });
                 checkoutTotalEl.textContent = `₹${checkoutTotal.toFixed(0)}`;
            }
        }

        if (placeOrderBtn && confirmationMessage && placeOrderSection && checkoutSummarySection) {
            placeOrderBtn.addEventListener('click', () => {
                // Prevent placing order if cart is somehow empty here
                if (cart.length === 0) return;

                // --- Save order to history ---
                const orders = JSON.parse(localStorage.getItem('quickBiteOrders')) || [];
                const newOrder = {
                    date: new Date().toISOString(), // Use ISO string for consistency
                    items: [...cart], // Deep copy cart items
                    total: checkoutTotal
                };
                orders.push(newOrder);
                localStorage.setItem('quickBiteOrders', JSON.stringify(orders));

                // --- Clear cart ---
                cart = [];
                saveCart();
                updateCart(); // Update header cart counts (should show 0)

                // --- Update UI ---
                checkoutSummarySection.classList.add('hidden');
                placeOrderSection.classList.add('hidden');
                confirmationMessage.classList.remove('hidden');

                 // Disable cart icon
                 if (cartIconBtn) {
                     cartIconBtn.classList.add('text-gray-400', 'cursor-not-allowed');
                     cartIconBtn.onclick = (e) => e.preventDefault();
                 }
                  if (mobileCartBtn) {
                     mobileCartBtn.classList.add('text-gray-400', 'cursor-not-allowed');
                      mobileCartBtn.onclick = (e) => e.preventDefault();
                 }

                 console.log("Order placed and saved to history!");
            });
        }
    }

    // === LOGIC FOR ORDERS.HTML ===
    if (document.getElementById('orders-title')) {
        const containerEl = document.getElementById('order-history-container');
        const loadingEl = document.getElementById('loading-orders');

        if (containerEl && loadingEl) {
            const orders = JSON.parse(localStorage.getItem('quickBiteOrders')) || [];
            containerEl.innerHTML = ''; // Clear loading message

            if (orders.length === 0) {
                containerEl.innerHTML = '<p class="text-gray-600 text-lg text-center">No past orders found.</p>';
            } else {
                // Display newest orders first
                orders.slice().reverse().forEach((order, index) => { // Use slice() to avoid modifying original array
                    const orderDate = new Date(order.date);
                    // More robust date/time formatting
                    const formattedDate = orderDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
                    const formattedTime = orderDate.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });

                    const orderCard = document.createElement('div');
                    orderCard.className = 'bg-white p-6 rounded-lg shadow-md mb-6';

                    let itemsHTML = '<ul class="list-disc list-inside space-y-1 text-gray-700">';
                    if (order.items && Array.isArray(order.items)) { // Check if items exist and is an array
                        order.items.forEach(item => {
                             // Provide default values if item properties are missing
                             const itemName = item.name || 'Unknown Item';
                             const itemQuantity = item.quantity || 0;
                             const itemPrice = item.price || 0;
                            itemsHTML += `<li>${itemName} (x${itemQuantity}) - ₹${(itemPrice * itemQuantity).toFixed(0)}</li>`;
                        });
                    } else {
                        itemsHTML += '<li>No items recorded for this order.</li>';
                    }
                    itemsHTML += '</ul>';

                     const orderTotal = order.total || 0; // Provide default total

                    orderCard.innerHTML = `
                        <div class="flex justify-between items-center mb-3 border-b pb-2 flex-wrap">
                            <h3 class="text-xl font-semibold text-gray-800 mr-4 mb-2 sm:mb-0">Order #${orders.length - index}</h3>
                            <p class="text-sm text-gray-500 text-right">${formattedDate} at ${formattedTime}</p>
                        </div>
                        <div class="mb-3">
                            ${itemsHTML}
                        </div>
                        <div class="border-t pt-3 text-right">
                            <span class="text-lg font-bold text-gray-800">Total: ₹${orderTotal.toFixed(0)}</span>
                        </div>
                    `;
                    containerEl.appendChild(orderCard);
                });
            }
        }
    }


    // --- INITIALIZE CART ON ALL PAGES ---
    updateCart();

});