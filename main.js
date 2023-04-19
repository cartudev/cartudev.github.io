import barba from '@barba/core';
import barbaCss from '@barba/css';
import VanillaTilt from 'vanilla-tilt';
import  {btnFunctions} from './pageFunctions'


function tilts(){
    const tiltElements = document.querySelectorAll('.card-container, .tilt');

    tiltElements.forEach((element) => {
    VanillaTilt.init(element, {
    max: 30,
    speed: 1200,
    glare:                  true,  // if it should have a "glare" effect
    "max-glare":            element.classList.contains('card-container') ? 0.2 : 0,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:                  element.classList.contains('card-container') ? 1.1 : 1,
    gyroscope:              true,   // Boolean to enable/disable device orientation detection,


});
});
}
// Selecciona los elementos con las clases "card" y "box"

tilts();




// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init({
    views: [{
        namespace: 'projects',
        beforeEnter() {
          // re-init/reset script default function on before page load
     },
        afterEnter() {
          // refresh parallax on new page content
          tilts()
      }
      },
      {
        namespace: 'home',
        beforeEnter() {
          // re-init/reset script default function on before page load
     },
        afterEnter() {
          // refresh parallax on new page content
          tilts()
      }
      }]
  });






  


btnFunctions()