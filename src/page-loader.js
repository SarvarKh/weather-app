import { createE } from './DOM';
import { createHeader } from './DOM';
import { createSearchForm } from './DOM';
import { createMain } from './DOM';
import { createFooter } from './DOM';
import { searchForCity } from './logic';

function start() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createSearchForm());
    content.appendChild(createMain());
    searchForCity();
    content.appendChild(createFooter());

    return content
}

export default start;