const observerOptions = {
    root: null, // Следим относительно окна браузера
    rootMargin: '0px',
    threshold: 0.5 // Считаем, что пользователь перешел на слайд, если видно хотя бы 50% секции
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Если секция зашла в экран, добавляем ей класс active
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Если хочешь, чтобы анимация повторялась КАЖДЫЙ раз при скролле вверх-вниз:
            entry.target.classList.remove('active'); 
        }
    });
}, observerOptions);

// Находим все наши секции и вешаем на них наблюдение
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

const backBtn = document.getElementById('btn');
backBtn.addEventListener('click', function() {
    window.location.href = "index.html";
})
const Username = document.getElementById("user");
const Number = document.getElementById("num");
const email = document.getElementById("email");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {

    if (!email.value) {
        event.preventDefault();
        alert("Email is required");
        return;
    }

    if (!Number.value) {
        event.preventDefault();
        alert("Phone number is required");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        event.preventDefault();
        alert("Email must be a valid email address.");
        return;
    }

    if (!Username.value) {
        event.preventDefault();
        alert("Username is required");
        return;
    }
});