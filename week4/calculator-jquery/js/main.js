$(document).ready(function(){
  // Event listener for zebra section
  $('#zebra').on('click', function(){
    // Input changed to int type for val1 and val2
    var val1 = parseInt($('#val1').val());
    var val2 = parseInt($('#val2').val());
    // Adding val1 and val2 then display in h2
    $('#h2').html("= " + (val1 + val2));

  })
  // Event listener for lion section
  $('#lion').on('click', function(){
    // Input changed to int for val1 and val2
    var val1 = parseInt($('#val1').val());
    var val2 = parseInt($('#val2').val());
    // Subtracting val1 and val2 then display in h2
    $('#h2').html("= " + (val1 - val2));
  })
  // Event listener for tiger section
  $('#tiger').on('click', function(){
    var val1 = parseInt($('#val1').val());
    var val2 = parseInt($('#val2').val());
    // Multiplying val1 and val2 then display in h2
    $('#h2').html("= " + (val1 * val2));

  })
  // Event listener for bear section
  $('#bear').on('click', function(){
    var val1 = parseInt($('#val1').val());
    var val2 = parseInt($('#val2').val());
    // Dividing val1 and val2 then display in h2
    $('#h2').html("= " + (val1 / val2));

  })


})
