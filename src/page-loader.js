import { createE } from './DOM';

function start() {
    const content = document.getElementById('content');
    content.appendChild(createE('div', 'cool'));
    return content
}

export default start;