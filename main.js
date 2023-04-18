import barba from '@barba/core';
import barbaCss from '@barba/css';
import  {btnFunctions} from './pageFunctions'

// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init();

btnFunctions()