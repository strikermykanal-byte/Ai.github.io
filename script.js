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
