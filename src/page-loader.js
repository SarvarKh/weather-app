import {
  createE, createHeader, createSearchForm, createMain, createFooter, createToggleButton,
} from './DOM';

import { searchForCity } from './logic';

function start() {
  const content = document.getElementById('content');
  document.body.appendChild(createToggleButton());
  content.appendChild(createHeader());
  content.appendChild(createSearchForm());
  content.appendChild(createMain());
  searchForCity();
  content.appendChild(createFooter());

  return content;
}

export default start;