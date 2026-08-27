const images = [
    "./img/pic1.jpg",
    "./img/pic2.jpg",
    "./img/pic3.jpg",
];

let currentImage = 0;

const mainImage = document.getElementById("mainImage");

function showImage() {
    mainImage.src = images[currentImage];
}

function nextImage() {

    currentImage++;

    // ถ้าถึงรูปสุดท้าย ให้กลับไปรูปแรก
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {

    currentImage--;

    // ถ้าถอยก่อนรูปแรก ให้ไปอยู่รูปสุดท้าย
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}