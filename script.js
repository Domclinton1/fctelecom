function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

function fiber(){
    var click = document.getElementById('#fiber')
    window.location.href = '#fiber'
}

function plano1() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 420 MEGA...")
}
function plano2() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 750 MEGA...")
}
function plano3() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 780 MEGA...")
}
function plano4() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 850 MEGA...")
}
function plano5() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 1 GIGA...")
}


document.addEventListener("DOMContentLoaded", function(){
    const openModalButtons = document.querySelectorAll(".openModal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openModalButtons.forEach(function(button){
        button.addEventListener("click", function(){
            const modalId = button.getAttribute("data-modal-id");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(){
            const modal = button.closest(".modal");
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

function email(){
    var click = document.querySelectorAll('email')
    window.location.href = 'mailto:fctelecom24@gmail.com';
}
function wpp() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20gostaria%20de%20contratar%20um%20plano de internet...")
}
function wpp2() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531992616974?text=Ola,%20gostaria%20de%20informações%20sobre%20os planos de internet...")
}