const smallMenu = document.querySelector('#dropmenu');
const background = document.querySelector('body');
const separate = document.querySelector('.divider');
const mobileMenu = document.querySelector(".dropmenuitems");

smallMenu.addEventListener('click', openMenu);

function openMenu() {

    mobileMenu.classList.toggle("reveal");
}
