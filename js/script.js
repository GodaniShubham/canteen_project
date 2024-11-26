document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    } else {
        console.error('Menu toggle or navigation element not found.');
    }
    console.log(document.querySelector('.menu-toggle')); // Should log the button element
    console.log(document.querySelector('.nav')); // Should log the nav element
});
