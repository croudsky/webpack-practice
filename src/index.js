import _ from 'lodash';
import './style.css';
import './style.scss';
import bear from './bear.png';

function component() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!!'];
    element.innerHTML = _.join(array, ' ');
    return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = bear;
document.body.appendChild(image);
