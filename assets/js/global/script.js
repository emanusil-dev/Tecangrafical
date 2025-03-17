
const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav--toggle')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show--menu')
   })
}
