import { createE } from './DOM';
import { createHeader } from './DOM';
import { createMain } from './DOM';
import { createFooter } from './DOM';

function start() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    // content.appendChild(createMain());
    content.appendChild(createFooter());

    return content
}

export default start;