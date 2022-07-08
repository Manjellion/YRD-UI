// Set the setWidth function to the total width the carousel can scroll to fit all contents automatically

function setWidth(scrollWidth, offSetWidth) {

    // scrollWidth = carousel.current.scrollWidth
    // offSetWidth = carousel.current.offSetWidth

    const width = scrollWidth - offSetWidth;

    return width;
}

module.exports = setWidth;