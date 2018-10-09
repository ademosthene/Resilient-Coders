// Waits for page to load before executing functions
$(document).ready(function(){
  var height = $(document).height();
  var width = $(document).width();
// Behavior for horse when clicked
  $('#horse').on('click', function(){
      var neigh = $('#neigh')[0];
      var upDown = Math.floor( (Math.random() * (height - 200)));
      var leftRight = Math.floor( (Math.random() * (width - 150)));
      $('#horse').css('margin-top',0);
      $('#horse').css('margin-left',0);
      $('#horse').css('left',leftRight);
      $('#horse').css('top',upDown);
      neigh.play();
  })
// Behavior for cow when clicked
  $('#cow').on('click', function(){
      var moo = $('#moo')[0];
      var upDown = Math.floor( (Math.random() * (height - 200)));
      var leftRight = Math.floor( (Math.random() * (width - 700)));
      $('#cow').css('margin-top',0);
      $('#cow').css('left',leftRight);
      $('#cow').css('top',upDown);
      moo.play();
  })
// Behavior for cat when clicked
  $('#cat').on('click', function(){
      var meow = $('#meow')[0];
      var upDown = Math.floor( (Math.random() * (height - 200)));
      var leftRight = Math.floor( (Math.random() * (width - 1050)));
      $('#cat').css('margin-top',0);
      $('#cat').css('left',leftRight);
      $('#cat').css('top',upDown);
      meow.play();
  })














});
