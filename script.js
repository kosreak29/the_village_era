// 1. Preloader Logic
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 1500); // 1.5 seconds loading feel
});

// 2. Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-scroll");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden-scroll");
hiddenElements.forEach((el) => observer.observe(el));

// 3. Custom Cursor Tracking
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const hoverItems = document.querySelectorAll('a, button');
hoverItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.background = 'rgba(255, 69, 0, 0.2)';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.background = 'transparent';
    });
});

// 4. Mood Matcher (Updated with WhatsApp link)
function suggestDish(mood) {
    const suggestionBox = document.getElementById('suggestion-box');
    let content = '';

    // Replace '916269489237' with your friend's real number
    const waNumber = "916269489237"; // WhatsApp number in international format without '+' or '00'

    if (mood === 'spicy') {
        content = `
            <img src="image/chilli_paneer_studio_food_photo.webp" class="menu-img" alt="Chilli Paneer">
            <h3>The Era's Chilli Paneer 🌶️</h3>
            <p>A sizzling mix of soft paneer cubes, crunchy veggies, and our signature spicy soy sauce.</p>
            <div class="price-container">
                <span class="original-price">₹93</span>
                <span class="price">₹85</span>
                <span class="discount-badge">10% OFF</span>
            </div>
            <a href="https://wa.me/${waNumber}?text=Hi,%20I%20want%20to%20order%20The%20Era's%20Chilli%20Paneer" target="_blank" class="btn-wa">Order on WhatsApp 💬</a>
        `;
    } else if (mood === 'cheesy') {
        content = `
            <img src="image/creamy_alfredo_pasta_professional.webp" class="menu-img" alt="Creamy Alfredo Pasta">
            <h3>Creamy Alfredo Pasta  🧀</h3>
            <p>Rich, velvety, and generously loaded with cheese. Every bite is a creamy Italian delight.</p>
            <div class="price-container">
                <span class="original-price">₹93</span>
                <span class="price">₹85</span>
                <span class="discount-badge">10% OFF</span>
            </div>
            <a href="https://wa.me/${waNumber}?text=Hi,%20I%20want%20to%20order%20Creamy%20Alfredo%20Pasta" target="_blank" class="btn-wa">Order on WhatsApp 💬</a>
        `;
    } else if (mood === 'relax') {
        content = `
            <img src="image/masala_noodles_professional.webp" class="menu-img" alt="Masala Noodles">
            <h3>Masala Noodles 🍜</h3>
            <p>Your ultimate comfort food, upgraded with an extra punch of desi spices and our magic masala.</p>
            
            <div class="price-container">
                <span class="original-price">₹67</span>
                <span class="price">₹60</span>
                <span class="discount-badge">10% OFF</span>
            </div>
            
            <a href="https://wa.me/${waNumber}?text=Hi,%20I%20want%20to%20order%20Masala%20Noodles" target="_blank" class="btn-wa">Order on WhatsApp 💬</a>
        `;
    }

    suggestionBox.innerHTML = content;
    suggestionBox.classList.remove('hidden');

    suggestionBox.style.transform = 'scale(0.8)';
    setTimeout(() => {
        suggestionBox.style.transform = 'scale(1)';
    }, 50);
}
// Background Music Toggle Logic
const musicBtn = document.getElementById("music-btn");
const cafeMusic = document.getElementById("cafe-music");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        cafeMusic.pause();
        musicBtn.innerHTML = "🎵 Play Vibe";
        musicBtn.style.background = "#fff";
        musicBtn.style.color = "#E65C00";
    } else {
        cafeMusic.play();
        musicBtn.innerHTML = "⏸️ Pause Vibe";
        musicBtn.style.background = "#E65C00";
        musicBtn.style.color = "#fff";
    }
    isPlaying = !isPlaying;
});