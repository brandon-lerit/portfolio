//Load in Fade

document.addEventListener('DOMContentLoaded', function() {
    fadeInElements();
  });
  
  function fadeInElements() {
    let elements = document.querySelectorAll('.fade-in-start');
    for (let element of elements) {
      element.classList.add('fade-in-visible-start');
    }
  }

//Scrolling Fade

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let elements = document.querySelectorAll('.fade-in');
      for (let element of elements) {
        if (isElementInViewport(element)) {
          element.classList.add('fade-in-visible');
        }
      }
    });
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });