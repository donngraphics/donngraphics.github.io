const smallMenu = document.querySelector('#dropmenu');
const background = document.querySelector('body');
const separate = document.querySelector('.divider');
const mobileMenu = document.querySelector(".dropmenuitems");
const at = document.querySelector("#at");
const ayf = document.querySelector("#ayf");
const bat = document.querySelector("#bat");
const blaze = document.querySelector("#blaze");
const ci = document.querySelector("#ci");
const cimh = document.querySelector("#cimh");
const cry = document.querySelector("#crystal");
const dm = document.querySelector("#dm");
const eys = document.querySelector("#eys");
const fireball = document.querySelector("#fireball");
const gfx = document.querySelector("#gfx");
const poal = document.querySelector("#poal");
const santa = document.querySelector("#santa");
const sss = document.querySelector("#sss");
const stream = document.querySelector("#stream");
const tgtp = document.querySelector("#tgtp");
const wok = document.querySelector("#wok");


const gallery = document.querySelectorAll(".gallery");

const modalImg = document.querySelector("#img01");
const captionText = document.querySelector("#caption");
const modal = document.querySelector("#myModal");
const closeMe = document.querySelector(".close");

// const images = ["images/AT.png", "images/AYF_WM.png", "images/Batcave_Sized.png", "images/Blazing_Games_IG.png", "images/CI.png",
//     "images/CIMH_SM.png",
//     "images/Crystal_SM.png",
//     "images/DM_IG.png",
//     "images/EYS_IG.png",
//     "images/Fireball_Poster.png",
//     "images/gfx_leech_IG.png",
//     "images/POAL.png",
//     "images/SantaWorkshopClosed.png",
//     "images/SSS.png",
//     "images/SteamWM.png",
//     "images/TGTP.png",
//     "images/WoK_Sized.png"
// ];




at.addEventListener('click', display);
ayf.addEventListener('click', displayAYF);
bat.addEventListener('click', displayBAT);
blaze.addEventListener('click', displayBLAZE);
ci.addEventListener('click', displayCI);
cimh.addEventListener('click', displayCIMH);
cry.addEventListener('click', displayCRY);
dm.addEventListener('click', displayDM);
eys.addEventListener('click', displayEYS);
fireball.addEventListener('click', displayFIRE);
gfx.addEventListener('click', displayGFX);
poal.addEventListener('click', displayPOAL);
santa.addEventListener('click', displaySANTA);
sss.addEventListener('click', displaySSS);
stream.addEventListener('click', displaySTREAM);
tgtp.addEventListener('click', displayTGTP);
wok.addEventListener('click', displayWOK);


closeMe.addEventListener("click", closeModal);
smallMenu.addEventListener('click', openMenu);



// gallery.forEach(function (image) {
//     image.addEventListener('click', display);

// })

function openMenu() {

    mobileMenu.classList.toggle("reveal");
}

function display() {

    // for (i = 0; i < images.length; i++) {
    //     // console.log(images[i]);

    //     modalImg.src = images[i];

    // }

    modal.style.display = "block";
    modalImg.src = "images/at.png";
    // modalImg.src = `images/${image}`;
    // modalImg.src = at.src;
    // console.log();
    // modalImg.src = gallery.src;
    // captionText.innerHTML = document.querySelector("#at").alt;

}

function displayAYF() {

    modal.style.display = "block";
    modalImg.src = "images/AYF_WM.png";

}




function displayBAT() {

    modal.style.display = "block";
    modalImg.src = "images/Batcave_Sized.png";

}
function displayBLAZE() {

    modal.style.display = "block";
    modalImg.src = "images/Blazing_Games_IG.png";

}
function displayCI() {

    modal.style.display = "block";
    modalImg.src = "images/CI.png";

}
function displayCIMH() {

    modal.style.display = "block";
    modalImg.src = "images/CIMH_SM.png";

}
function displayCRY() {

    modal.style.display = "block";
    modalImg.src = "images/Crystal_SM.png";

}

function displaySSS() {

    modal.style.display = "block";
    modalImg.src = "images/SSS.png";

}

function displayDM() {

    modal.style.display = "block";
    modalImg.src = "images/DM_IG.png";

}
function displayEYS() {

    modal.style.display = "block";
    modalImg.src = "images/EYS_IG.png";

}
function displayFIRE() {

    modal.style.display = "block";
    modalImg.src = "images/Fireball_Poster.png";

}
function displayGFX() {

    modal.style.display = "block";
    modalImg.src = "images/gfx_leech_IG.png";

}
function displayPOAL() {

    modal.style.display = "block";
    modalImg.src = "images/POAL.png";

}
function displaySANTA() {

    modal.style.display = "block";
    modalImg.src = "images/SantaWorkshopClosed.png";

}
function displaySTREAM() {

    modal.style.display = "block";
    modalImg.src = "images/SteamWM.png";

}
function displayTGTP() {
    modal.style.display = "block";
    modalImg.src = "images/TGTP.png";
}

function displayWOK() {

    modal.style.display = "block";
    modalImg.src = "images/WoK_Sized.png";

}

function closeModal() {
    modal.style.display = "none";

}