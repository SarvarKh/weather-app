const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content; }
    if (className) { element.classList.toggle(className); }
    if (href) { element.href = href; }
    return element;
};

function createHeader() {
    const header = createE('header');
    const headerContainer = createE('div', false, 'header-container');
    const headerIcon = createE('i');
    headerIcon.classList.add('fas');
    headerIcon.classList.add('fa-cloud-sun');
    const headerStick = createE('div', 'Travel Forecast -', 'h-stick-text');
    const animatedHeader = createE('div', false, 'header-animation');
    const headerTitle1 = createE('h1', '1 Choose your destination', 'swipe');
    const headerTitle2 = createE('h1', '2 Check the weather and book flight', 'swipe');
    const headerTitle3 = createE('h1', '3 Enjoy your trip!', 'swipe');
    const headerTitle4 = createE('h1', ' ', 'swipe');
  
    headerContainer.appendChild(headerIcon);
    headerContainer.appendChild(headerStick);
    animatedHeader.appendChild(headerTitle1);
    animatedHeader.appendChild(headerTitle2);
    animatedHeader.appendChild(headerTitle3);
    animatedHeader.appendChild(headerTitle4);
    headerContainer.appendChild(animatedHeader);
    header.appendChild(headerContainer);
  
    return header;
}

const createFooter = () => {
    const footer = createE('footer');
    const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');
    const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');
    linkIcon1.setAttribute('target', '_blank');
    const icon1 = document.createElement('i');
    icon1.classList.add('fab');
    icon1.classList.add('fa-github');
  
    const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');
    linkIcon2.setAttribute('target', '_blank');
    const icon2 = document.createElement('i');
    icon2.classList.add('fab');
    icon2.classList.add('fa-linkedin');
  
    const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');
    linkIcon3.setAttribute('target', '_blank');
    const icon3 = document.createElement('i');
    icon3.classList.add('fas');
    icon3.classList.add('fa-folder-open');
  
    linkIcon1.appendChild(icon1);
    linkIcon2.appendChild(icon2);
    linkIcon3.appendChild(icon3);
    footerDiv.appendChild(linkIcon1);
    footerDiv.appendChild(linkIcon2);
    footerDiv.appendChild(linkIcon3);
    footer.appendChild(footerDiv);
  
    return footer;
}

export { createE };
export { createHeader };
// export { createMain };
export { createFooter };