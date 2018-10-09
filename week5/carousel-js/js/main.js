
$(document).ready(function(){

var imgArray = ["apple.jpg","banana.jpg","broccoli.jpg","carrot.jpeg","grape.jpg","lettuce.png","melon.jpg"];
// Behavior for when next button clicked
$('#nextButton').on('click', function(){
  $('#content').css('background','red');

  // $('myOjbect').css('background-image', 'url("' + imageUrl + '")');



});

// Behavior for when back button clicked
$('#backButton').on('click', function(){

$('#content').css('background','blue');


});


});
