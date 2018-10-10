
$(document).ready(function(){

  var imgArray = ["apple.jpg","banana.jpg","broccoli.jpg","carrot.jpeg","grape.jpg","lettuce.png","melon.jpg"];
  var index = 4;
  changeImg(index);

  // Behavior for when next button clicked
  $('#nextButton').on('click', function(){
    index++;
    if (index > (imgArray.length)-1) {
      index = 0;
    }
    changeImg(index);
  });

  // Behavior for when back button clicked
  $('#backButton').on('click', function(){
    index--;
    if (index < 0 ){
      index = imgArray.length-1;
    }
    changeImg(index);
  });

  function changeImg(idx){
    $('#content').css('background','url("img/' + imgArray[idx] + '")');
    $('#content').css('background-size','contain');
    $('#content').css('background-position','center');
    $('#content').css('background-repeat','no-repeat');
    console.log(imgArray[idx]);
  }


});
