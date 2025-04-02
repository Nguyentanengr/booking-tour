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

setInterval(nextRate, 3000);


// select option feature in my tour page

const cities = [
    "Đà Nẵng",
    "Hà Nội",
    "TP. Hồ Chí Minh",
    "Nha Trang",
    "Đà Lạt",
    "Phú Quốc",
    "Hội An",
    "Huế",
    "Hà Giang",
    "Vũng Tàu",
    "Lý Sơn",
    "Ninh Bình"
];

const optionContainer = document.querySelector('.option-container');
const selectArea = document.querySelector('.select-area');
const textSelect = document.querySelector('.text-select');
const expandArea = document.querySelector('.expand-area');

function renderCities() {
    console.log("render option");
    
    expandArea.innerHTML = ''; // Xóa tất cả thành phần con
    cities.forEach((city, index) => {
        const option = document.createElement('div');
        option.textContent = city;
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', index == 0 ? 'true' : 'false');
        if (index == 0) {
            option.classList.add('selected');
            textSelect.textContent = city;
        }
        expandArea.appendChild(option);
    })
}

renderCities();



selectArea.addEventListener('click', () => { // toggle expand-area when click button
    expandArea.classList.toggle('show');
    selectArea.classList.toggle('active');
});


document.addEventListener('click', (e) => { // unvisible when click outside
    if (!optionContainer.contains(e.target)) {
        expandArea.classList.remove('show');
        selectArea.classList.remove('active');
    }
});

const options = expandArea.querySelectorAll('div'); // when choose one item
options.forEach((option, index) => {
    option.addEventListener('click', (e) => {
        textSelect.textContent = option.textContent;
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        expandArea.classList.remove('show');
        selectArea.classList.remove('active');
        options.forEach(opt => opt.setAttribute('aria-selected', 'false'));
        option.setAttribute('aria-selected', 'true');
    })
});


