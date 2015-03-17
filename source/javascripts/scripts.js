$(document).ready( function() {
  console.log("hey");

  $('.toggle-modal').click(function() {
    // $('.modal').toggle();
    // $('.cover').toggle();
  })

  $('.cover').click(function() {
    $('.modal').addClass('minimized');
    // $('.modal').toggle();
    // $('.cover').toggle();
  })

})
