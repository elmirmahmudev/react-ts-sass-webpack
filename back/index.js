// import _ from 'lodash';
import './style.css';
import Icon from './logo.png';
import printMe from './print';
import log from './log';


function getComponent() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
  
//     // Add the image to our existing div.
//     const myIcon = new Image();
//     myIcon.src = Icon;

//     element.prepend(myIcon);
//     log('firstttt55');
    
//    btn.innerHTML = 'Click me and check the console!';
//    btn.onclick = printMe;

//    element.appendChild(btn);

//     return element;
    return import('lodash').then(({ default: _ }) => {
        const element = document.createElement('div');
   
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
        return element;
   
      }).catch(error => 'An error occurred while loading the component');
  }
  
//   document.body.appendChild(component());
getComponent().then(component => {
    document.body.appendChild(component);
});