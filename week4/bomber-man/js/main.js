// Creates variable to move block around
// Creates variables for left + right, and up + down
var block = document.getElementById('block')
var upDown = 0
var leftRight = 0

document.onkeydown = keyPress

function keyPress(e) {
  // checks if right arrow key pressed
  if (e.keyCode === 39) {
    leftRight += 5;
  // increases left margin by 5px
    block.style.marginLeft = leftRight + "px"
  } // checks if left arrow key pressed
  else if (e.keyCode === 37) {
    leftRight -= 5;
    // decreases left margin by 5px
    block.style.marginLeft = leftRight + "px"
  } // checks if down arrow key pressed
  else if (e.keyCode === 40) {
    upDown += 5;
    // increases top margin by 5px
    block.style.marginTop = upDown + "px"
  }// checks if up arrow key pressed
  else if (e.keyCode === 38) {
    upDown -= 5;
    // decreases top margin by 5px
    block.style.marginTop = upDown + "px"
  }
};
