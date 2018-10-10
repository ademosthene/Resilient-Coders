document.getElementById('zebra').onclick = add

document.getElementById('lion').onclick = sub

document.getElementById('tiger').onclick = multi

document.getElementById('bear').onclick = divi

function add(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = "= " + (val1 + val2)
  document.getElementsByTagName('h2')[0].innerHTML = sum
}

function sub(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 - val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}

function multi(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 * val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}

function divi(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 / val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}
