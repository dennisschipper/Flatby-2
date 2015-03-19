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










  viewport_height = $(window).height();
  $('.panel-side-slider').css('height', viewport_height)

  $(window).resize(function() {
    viewport_height = $(window).height();
    $('.panel-side-slider').css('height', viewport_height)
  })

  $('.im-a-hamburger').click(function() {
    $('.panel-side-slider').toggle();
  })

})
