$(document).ready(function() {
  //left arrow
  $('#left').on('click', function() {
    $(this).toggleClass('rotate');
    $('.carousel').css('animation-direction', 'reverse');

  });
  //right arrow
  $('#right').on('click', function() {
    $(this).toggleClass('rotate');
    $('.carousel').css('animation-direction', 'normal');
  });
  //rotate image
  $('img').on('click', function(){
    $(this).toggleClass('reverse-carousel');
  })
});
