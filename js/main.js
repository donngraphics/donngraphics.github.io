const smallMenu = document.querySelector('#dropmenu');
const background = document.querySelector('body');
const separate = document.querySelector('.divider');
const mobileMenu = document.querySelector(".dropmenuitems");

smallMenu.addEventListener('click', openMenu);

function openMenu() {

    separate.style.background = 'red';
    // console.log('test');
    // mobileMenu.style.display = "flex";
    mobileMenu.classList.toggle("reveal");
}
