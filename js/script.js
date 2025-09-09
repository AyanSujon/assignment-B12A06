//  Spinner function
const loadingSpinner = (status) => {
    if (status) {
        document.getElementById("spinner").classList.remove("hidden");   // show spinner
        document.getElementById("card-container").classList.add("hidden"); // hide cards
    } else {
        document.getElementById("spinner").classList.add("hidden");     // hide spinner
        document.getElementById("card-container").classList.remove("hidden"); // show cards
    }
};


// Load categories from API
const loadAllCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => displayAllCategories(json.categories))
        .catch(err => console.error("Error loading categories:", err));
};

// Load ALL Categories by clicking button left side
const loadButtonId = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    
    //  Show spinner when loading starts
    loadingSpinner(true);

    fetch(url)
        .then(res => res.json())
        .then(json => {
            displayCardByCategories(json.plants);
            //  Hide spinner after data loads
            loadingSpinner(false);
        })
        .catch(err => {
            console.error("Error loading categories:", err);
            loadingSpinner(false); // hide spinner even if error
        });
};


// Load card Details by Modal 
const loadCardDetail = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(details => displayCardDetail(details.plants))
        .catch(err => console.error("Error loading card detail:", err));
};
// load "Add To Card" in sidebar 
const loadAddToCardDetail = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(details => displayAddToCardDetail(details.plants))
        .catch(err => console.error("Error loading card detail:", err));
};


// Function to handle Add to Cart
const displayAddToCardDetail = (product) => {
    // Check if product already exists in cart
    const existingcard = cart.find(item => item.id === product.id);

    if (existingcard) {
        // Increase quantity if already in cart
        existingcard.quantity += 1;
    } else {
        // Add new product with quantity 1
        cart.push({ ...product, quantity: 1 });
    }

    // Update cart UI
    renderCart();
}


// Render cart items in the UI
function renderCart() {
    const cartContainer = document.querySelector(".your-cart");


    // Loop through cart items and display
    cart.forEach(item => {
        cartContainer.innerHTML += `
            <div class="add-to-card flex justify-between items-center bg-[#F0FDF4] py-2 px-3 rounded-lg">
                <div>
                    <p class="text-[#1F2937]">${item.name}</p>
                    <p class="text-[#1F293780]">
                        <span><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>
                        <span class="price">${item.price}</span> x 
                        <span class="quantity">${item.quantity}</span>
                    </p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-[#1F293780]">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
    });
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}


// Display card details with Modal 
const displayCardDetail = (card) => {
    const cardDetailsBox = document.getElementById("card-details");
    cardDetailsBox.innerHTML = `
            <h4 class="font-bold text-lg text-[#1F2937] ">${card.name ? card.name: "Data not found" }</h4>
            <figure class="max-h-60 overflow-hidden rounded-lg">
                <img class="object-cover" src="${card.image? card.image: "Data not found" }" alt="card image">
            </figure>
            <div class="category inline-block py-1 rounded-full"><p class=" text-sm"><span class="font-bold">Category:</span> ${card.category ? card.category: "Data not found"}</p></div>
            <div class="price"><p class="text-sm"><span class="font-bold">Price:</span> <span><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>${card.price ? card.price: "Data not found"}</p></div>
            <p class="text-sm text-[#1F2937]"><span class="font-bold">Description:</span> ${card.description ? card.description: "Data not found" } </p>
    `;

    // Show modal
    document.getElementById("card_details_modal").showModal();
};


// display all card by categories
const displayCardByCategories = (cards) => {
    // console.log(cards);
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";


    cards.forEach(card =>{
        //  console.log(card);
        const itemCard = document.createElement("div");
        itemCard.innerHTML = `
                <div class="card space-y-3  bg-white p-3 hover:shadow-lg transition duration-300 ease-in-out">
                    <figure class="max-h-40 ">
                        <img class="object-cover" src="${card.image? card.image: "Data not found" }" alt="card image">
                    </figure>
                    <h4 onclick="loadCardDetail(${card.id})" class="font-bold text-sm text-[#1F2937] hover:text-[#15803D]">${card.name ? card.name: "Data not found" }</h4>
                    <p class="text-sm text-[#1F2937]">${card.description? card.description: "Data not found" } </p>
                    <div class="flex justify-between text-[#1F2937]">
                        <div class="category bg-[#DCFCE7] px-3 py-1 rounded-full"><p class="text-[#15803D] text-sm">${card.category ? card.category: "Data not found"}</p></div>
                        <div class="price"><p class="text-sm"><span><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>${card.price ? card.price: "Data not found"}</p></div>
                    </div>
                    <button onclick="loadAddToCardDetail(${card.id})" class="btn bg-[#15803D] rounded-full text-white text-sm">Add to Cart</button>
                </div>
        
        `;
        cardContainer.append(itemCard);
    });
};


// Load ALL plants (default homepage)
const loadAllPlants = () => {
    const url = "https://openapi.programming-hero.com/api/plants";

    // Show spinner while loading
    loadingSpinner(true);

    fetch(url)
        .then(res => res.json())
        .then(json => {
            displayCardByCategories(json.plants);
            loadingSpinner(false); // hide spinner after loading
        })
        .catch(err => {
            console.error("Error loading all plants:", err);
            loadingSpinner(false);
        });
};





// Display categories in sidebar
const displayAllCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = ""; // clear old items




        // Add "All Trees" as the first tab
    const allTrees = document.createElement("li");
    allTrees.innerHTML = `
        <a href="#" id="all-trees-btn" 
           class="categories-btn p-1 block w-full bg-[#15803D] text-white rounded hover:text-white hover:bg-[#166534] transition-all duration-300 ease-in-out">
           All Trees
        </a>
    `;
    categoriesContainer.appendChild(allTrees);

    // Load ALL plants by default on homepage
    loadAllPlants();


    categories.forEach(categorie => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="#" onclick="loadButtonId(${categorie.id})" class="categories-btn p-1 block w-full hover:text-white hover:bg-[#15803D] transition-all duration-300 ease-in-out">${categorie.category_name}</a>
        `;
        categoriesContainer.appendChild(li);
    });

    // Add event listeners after rendering
    document.querySelectorAll(".categories-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            
     // Remove active class from all
            document.querySelectorAll(".categories-btn").forEach(btn => {
                btn.classList.remove("bg-[#15803D]", "text-white");
            });
            // Add active class to clicked button
            btn.classList.add("bg-[#15803D]", "text-white");

            const categoryName = btn.textContent.trim();
            console.log("Clicked Category:", categoryName);
            // 👉 Call another API function here to load trees by category
        });
    });
};



// Cart data store
let cart = [];

// Function to handle Add to Cart
function addToCart(product) {
    const existingcard = cart.find(item => item.id === product.id);

    if (existingcard) {
        existingcard.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
}

// Render cart items in the UI
function renderCart() {
    const cartContainer = document.querySelector(".your-cart");
    const totalAmount = document.getElementById("total-amount");

    // Reset cart HTML (keep heading)
    cartContainer.innerHTML = `
        <h3 class="font-semibold text-lg mb-3">Your Cart</h3>
    `;

    let total = 0; // keep track of total

    // Loop through cart items and display
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartContainer.innerHTML += `
            <div class="add-to-card flex justify-between items-center hover:shadow-lg transition duration-300 ease-in-out bg-[#F0FDF4] py-1 px-2 rounded-lg ">
                <div>
                    <p class="text-[#1F2937] text-sm ">${item.name}</p>
                    <p class="text-[#1F293780]">
                        <span><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>
                        <span class="price text-[12px]">${item.price}</span> x 
                        <span class="quantity text-[12px]">${item.quantity}</span>
                    </p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-[12px] text-[#1F293780]  hover:text-red-500 transition duration-300 ease-in-out">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
    });

    // Update total amount
    totalAmount.textContent = total;
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}


loadAllCategories();






