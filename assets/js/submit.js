element.addEventListener('click', function () {
    const elementToSetColorOn = document.getElementById('theId');
    if (number < 18.6) {
      elementToSetColorOn.style = 'color: red;';
    } else if (number <= 24.9) {
      elementToSetColorOn.style = 'color: green;';
    } else {
      elementToSetColorOn.style = 'color: yellow;';
    }
  }