


// Navbar Dropdown Button

function initializeNavbar() {
    const button = document.querySelector('[data-collapse-toggle]');
    const menu = document.querySelector('#mobile-menu-2');
    const navLinks = document.querySelectorAll('#mobile-menu-2 a');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
  
    button.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        button.setAttribute('aria-expanded', 'false');
        menu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
    
  }
  initializeNavbar();


//   // Cursor
// var crsr = document.querySelector("#cursor")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x + "px"
//     crsr.style.top = dets.y + "px"
// })
 
// // Cursor Blur
// var blur = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     blur.style.left = dets.x -200 + "px"
//     blur.style.top = dets.y -200 + "px"
// })










// To Change Navbar Bg and text Color On SCroll 


document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('header nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      // Scrolled down, add styles
      navbar.classList.remove('bg-transparent', 'text-white');
      navbar.classList.add('bg-white', 'text-black');
    } else {
      // At the top, remove styles
      navbar.classList.remove('bg-white', 'text-black');
      navbar.classList.add('bg-transparent', 'text-white');
    }
  });
});
