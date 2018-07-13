$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.transform').toggleClass('transform-active');
	});
});