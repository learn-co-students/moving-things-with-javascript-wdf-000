// code to fake Learn test
console.error('Another lab without a test! Woo!');

window.onload = run;

// actual function that will get called on window load
function run() {
  console.log('running...');

  var dodger = document.getElementById('dodger');

  document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
      moveDodgerLeft();
    }

    if (e.which === 39) {
      moveDodgerRight();
    }
  });
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 5}px`;
  }
}

