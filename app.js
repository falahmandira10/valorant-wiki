const listOfCardElements = document.querySelectorAll('.map-photos');
const cardContainer = document.querySelector('.maps-container');

listOfCardElements.forEach((cardElement, index) => {
  cardElement.addEventListener('click', () => {
    const scrollLeft = index * listOfCardElements[0].offsetWidth;
    cardContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  });
});