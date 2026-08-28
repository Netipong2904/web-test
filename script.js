const images = [
    "./img/pic1.jpg",
    "./img/pic2.jpg",
    "./img/pic3.jpg",
];

let currentImage = 0;
let isAnimating = false;

const mainImage = document.getElementById("mainImage");
const dotsContainer = document.getElementById("dots");
const counterCurrent = document.getElementById("counterCurrent");
const counterTotal = document.getElementById("counterTotal");

function pad(n) {
    return String(n + 1).padStart(2, "0");
}

function buildDots() {
    dotsContainer.innerHTML = "";
    images.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.setAttribute("aria-label", `ไปยังภาพที่ ${i + 1}`);
        dot.addEventListener("click", () => goToImage(i));
        dotsContainer.appendChild(dot);
    });
    counterTotal.textContent = pad(images.length - 1);
}

function updateUI() {
    document.querySelectorAll(".dots button").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentImage);
    });
    counterCurrent.textContent = pad(currentImage);
}

function showImage() {
    if (isAnimating) return;
    isAnimating = true;

    mainImage.classList.add("is-fading");

    window.setTimeout(() => {
        mainImage.src = images[currentImage];
        mainImage.classList.remove("is-fading");
        updateUI();
        isAnimating = false;
    }, 220);
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
}

function previousImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
}

function goToImage(index) {
    if (index === currentImage) return;
    currentImage = index;
    showImage();
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") previousImage();
});

buildDots();
updateUI();