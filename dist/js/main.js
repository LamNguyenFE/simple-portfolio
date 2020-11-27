//Select DOM items
const menuBtn = document.querySelector('.menu-btn');

console.log(menuBtn)
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const menuItems = document.querySelectorAll('.nav-item');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('show');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        //set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('show');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        //set menu state
        showMenu = false;
    }



}