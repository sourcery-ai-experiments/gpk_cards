document.addEventListener('DOMContentLoaded', function() {
    let backLayer = document.querySelector('.parallax__layer--back');
    let baseLayer = document.querySelector('.parallax__layer--base');

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        backLayer.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
        baseLayer.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
    });
});
