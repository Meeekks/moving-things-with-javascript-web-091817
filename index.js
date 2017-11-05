var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight();
  }
});
