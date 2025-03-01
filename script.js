// JavaScript untuk Sidebar Menu
const sidebarWrapper = document.getElementById('sidebar-wrapper');
const menuToggle = document.querySelector('.menu-toggle');

// Fungsi untuk membuka/menutup sidebar
menuToggle.addEventListener('click', (event) => {
    event.preventDefault();
    sidebarWrapper.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fungsi untuk menutup sidebar saat mengklik di luar area sidebar
document.addEventListener('click', (event) => {
    if (!sidebarWrapper.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebarWrapper.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Typewriter Effect

const texts = [
    "Hello",
    "AKU",
    "Human"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter