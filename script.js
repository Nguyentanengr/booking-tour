window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { /* Khi cuộn quá 50px */
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// slide comment feature
const slide = document.querySelector(".review-slide")
let index = 0;

function nextRate() {
    index++;
    if (index >= 3) return;
    slide.style.transform = `translateX(-${index * 100}%)`;
}

slide.addEventListener("transitionend", () => {
   
});

setInterval(nextRate, 3000);