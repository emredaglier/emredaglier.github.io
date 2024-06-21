const menuButton = document.getElementById('nav-mobile-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.getElementById('nav-mobile-button').addEventListener('click', function() {
    const spans = this.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[0].classList.toggle('translate-y-3');
    spans[1].classList.toggle('-rotate-45');
    spans[1].classList.toggle('-translate-y-3');

});