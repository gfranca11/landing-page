const Life = document.querySelector('.Life');
const RIGHT = document.querySelector('.RIGHT');
const container = document.querySelector('.container');


Life.addEventListener('mouseenter', () => container.classList.add('hover-Life'))
Life.addEventListener('mouseleave', () => container.classList.remove('hover-Life'))
RIGHT.addEventListener('mouseenter', () => container.classList.add('hover-RIGHT'))
RIGHT.addEventListener('mouseleave', () => container.classList.remove('hover-RIGHT')) 