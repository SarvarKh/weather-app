import {
  createHeader, createSearchForm, createMain, createFooter, createToggleButton,
} from './DOM';

import { searchForCity, checkGeoLocation } from './logic';

function start() {
  const content = document.getElementById('content');
  document.body.appendChild(createToggleButton());
  content.appendChild(createHeader());
  content.appendChild(createSearchForm());
  content.appendChild(createMain());
  searchForCity();
  checkGeoLocation();
  content.appendChild(createFooter());

  return content;
}

export default start;