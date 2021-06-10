// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  const dodgerLocation = parseInt(dodger.style.left.replace('px', ''), 10);
  if (dodgerLocation >= 0) {
    dodger.style.left = `${dodgerLocation - 1}px`;
  }
}

function moveDodgerRight() {
  const dodgerLocation = parseInt(dodger.style.left.replace('px', ''), 10);
  if (dodgerLocation <= 360) {
    dodger.style.left = `${dodgerLocation + 1}px`;
  }
}
document.body.addEventListener('keydown', function move(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
  if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
})