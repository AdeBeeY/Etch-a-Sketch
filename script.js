const containerElement = document.querySelector('.js-container');

  for (let i = 1; i < 16*16; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    containerElement.appendChild(cellElement);

    cellElement.addEventListener('mouseenter', () => {
      cellElement.style.backgroundColor = 'black';
    });
  
    cellElement.addEventListener('mouseleave', () => {
      cellElement.style.backgroundColor = 'yellow';
    });
  };