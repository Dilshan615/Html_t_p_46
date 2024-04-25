let banner = document.querySelector('.banner');
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    banner.classList.toggle('active');
}