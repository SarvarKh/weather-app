const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content; }
    if (className) { element.classList.toggle(className); }
    if (href) { element.href = href; }
    return element;
};

export { createE };