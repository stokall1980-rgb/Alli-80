// ================= LOGIN & LOGOUT =================
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Login sederhana untuk presentasi
    if(username === "admin" && password === "1234") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("website").style.display = "block";
    } else {
        alert("Username atau Password salah!");
    }
}

function logout() {
    if(confirm("Apakah Anda yakin ingin logout?")) {
        document.getElementById("website").style.display = "none";
        document.getElementById("loginPage").style.display = "flex";
        // Bersihkan input login
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}

// ================= FILTER PRODUK =================
function filterProduct(type) {
    const hewan = document.querySelectorAll(".card.hewan");
    const tanaman = document.querySelectorAll(".card.tanaman");

    if(type === "all") {
        hewan.forEach(item => item.style.display = "block");
        tanaman.forEach(item => item.style.display = "block");
    } else if(type === "hewan") {
        hewan.forEach(item => item.style.display = "block");
        tanaman.forEach(item => item.style.display = "none");
    } else if(type === "tanaman") {
        hewan.forEach(item => item.style.display = "none");
        tanaman.forEach(item => item.style.display = "block");
    }
}

// ================= KERANJANG BELANJA =================
let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    alert(name + " berhasil ditambahkan ke keranjang!");
}

function showCart() {
    const cartPopup = document.getElementById("cartPopup");
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartPopup.style.display = "block";
    cartItems.innerHTML = "";

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} - Rp ${item.price.toLocaleString()}
                <button onclick="removeFromCart(${index})">❌</button>
            </div>
        `;
    });

    totalPrice.textContent = "Total: Rp " + total.toLocaleString();
}

function closeCart() {
    document.getElementById("cartPopup").style.display = "none";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}
