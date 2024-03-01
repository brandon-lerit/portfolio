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

//Experience Gallery

function clickHack() {
  var hack = document.getElementById('hack');
  var hyperloop = document.getElementById('hyperloop');
  var esw = document.getElementById('esw');
  var webdev = document.getElementById('webdev');

  var hackButton = document.getElementById('hack-button');
  var hyperloopButton = document.getElementById('hyperloop-button');
  var eswButton = document.getElementById('esw-button');
  var webdevButton = document.getElementById('webdev-button');

  hackButton.classList.add('active');
  hyperloopButton.classList.remove('active');
  eswButton.classList.remove('active');
  webdevButton.classList.remove('active');

  hack.classList.remove('hidden');
  hyperloop.classList.add('hidden');
  esw.classList.add('hidden');
  webdev.classList.add('hidden');

}

function clickHyperloop() {
  var hack = document.getElementById('hack');
  var hyperloop = document.getElementById('hyperloop');
  var esw = document.getElementById('esw');
  var webdev = document.getElementById('webdev');

  var hackButton = document.getElementById('hack-button');
  var hyperloopButton = document.getElementById('hyperloop-button');
  var eswButton = document.getElementById('esw-button');
  var webdevButton = document.getElementById('webdev-button');

  hackButton.classList.remove('active');
  hyperloopButton.classList.add('active');
  eswButton.classList.remove('active');
  webdevButton.classList.remove('active');

  hack.classList.add('hidden');
  hyperloop.classList.remove('hidden');
  esw.classList.add('hidden');
  webdev.classList.add('hidden');
}

function clickEsw() {
  var hack = document.getElementById('hack');
  var hyperloop = document.getElementById('hyperloop');
  var esw = document.getElementById('esw');
  var webdev = document.getElementById('webdev');

  var hackButton = document.getElementById('hack-button');
  var hyperloopButton = document.getElementById('hyperloop-button');
  var eswButton = document.getElementById('esw-button');
  var webdevButton = document.getElementById('webdev-button');

  hackButton.classList.remove('active');
  hyperloopButton.classList.remove('active');
  eswButton.classList.add('active');
  webdevButton.classList.remove('active');

  hack.classList.add('hidden');
  hyperloop.classList.add('hidden');
  esw.classList.remove('hidden');
  webdev.classList.add('hidden');
}

function clickWeb() {
  var hack = document.getElementById('hack');
  var hyperloop = document.getElementById('hyperloop');
  var esw = document.getElementById('esw');
  var webdev = document.getElementById('webdev');

  var hackButton = document.getElementById('hack-button');
  var hyperloopButton = document.getElementById('hyperloop-button');
  var eswButton = document.getElementById('esw-button');
  var webdevButton = document.getElementById('webdev-button');

  hackButton.classList.remove('active');
  hyperloopButton.classList.remove('active');
  eswButton.classList.remove('active');
  webdevButton.classList.add('active');

  hack.classList.add('hidden');
  hyperloop.classList.add('hidden');
  esw.classList.add('hidden');
  webdev.classList.remove('hidden');
}

/** Hamburger Menu */

document.getElementById('hamburger').addEventListener('click', function() {
  var links = document.querySelector('.links');
  links.classList.toggle('expanded');

  if (links.classList.contains('expanded')) {
      links.style.opacity = '0';
      links.style.display = 'flex';
      void links.offsetWidth;
      links.style.opacity = '1';
  } 
  else {
      links.style.opacity = '0';
      setTimeout(function() {
          links.style.display = 'none';
      }, 500); 
  }
});