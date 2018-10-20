// //click middle box first and third blue
//
// $('#box2').on('click', function(){
//
//   $('#box3,#box1').css("background-color", "blue");
//
// });
//
// // click box 1 second and third box disappear
//
// $('#box1').on('click', function(){
//
//   $('#box3,#box2').css("display", "none");
//
// });

//box you click turns red and disappears
// $('.box').on('click', function() {
//
//   if( $(this).hasClass("uni") ){
//     $(this).css("transform", "rotateZ(45deg)")
//     $(this).fadeOut(3000);
//   }
//   $(this).toggleClass("uni")
//
//
// });

// var counter = 0;
//
// $("#box3").click(function() {
//    counter++;
//    if (counter == 5) {
//      $('#box1').css("background-color", "green");
//      $('#box2').css('transform','scale(.5,.5)');
//      // counter++;
//    }
// });

// let clicks = 0;
// $('.box').on('click', function(){
//   clicks++;
//   if (clicks%2===0 && !$(this).hasClass('done')){
//     $(this).toggleClass('makeRed')
//     $(this).addClass('done')
//   }
// });


// var previousTarget=null;
// $(".box").click(function() {
//     if(this===previousTarget) {
//       $(this).css("transform", "rotate(45deg)");
//
//     }
//     previousTarget=1;
// });


//On the third click of each box change the color of the other two boxes
var click1 = 0;
var click2 = 0;
var click3 = 0;

$('#box1').on('click', function(){
  click1++;
  if(click1%3===0){
  $('#box2,#box3').css('background',"red")
}
});

$('#box2').on('click', function(){
    click2++;
    if(click2%3===0){
      $('#box1,#box3').css('background',"red")
    }
  });
$('#box3').on('click', function(){
      click3++;
      if(click3%3===0){
        $('#box2,#box1').css('background',"red")
      }


});
