$(function() {
  
  // If a link has a dropdown, add sub menu toggle.
  $('nav ul li a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-content').toggle();
    $('.nav-content').not($(this).siblings()).hide();
    e.stopPropagation();
  });
  
  // Clicking away from dropdown will remove the dropdown class
  $('html').click(function() {
    $('.nav-content').hide();
  });
  
});


$(document).ready(function(){
	$('#nav-icon').click(function(){
     $(this).toggleClass('open');
     $('.transform').toggleClass('transform-active');
//     $('.page-cover').toggle();
	});
  
    $('html').click(function() {
      $('.nav-content').hide();
    });
});

// Taking away the sidebar
$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() > 700) { 
        $('.drawer').hide();
      } else {
        $('.drawer').show();
      }
});

// Clicking off from menu
$('.drawer').click(function(e){
  alert('drawer');
    e.stopPropagation();
});
//$('body,html').click(function(e){
////       $('#drawer').removeClass('show-menu');
//  alert('not on drawer');
//});
