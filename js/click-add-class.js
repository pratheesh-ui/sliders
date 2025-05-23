

$(document).ready(function(){

	$('#btn1').click(function(){
		$('body').toggleClass('btn1-active');
	});
	$('#popup1-close').click(function(){
		$('body').removeClass('btn1-active');
	});
	
	$('#btn2').click(function(){
		$('.popup2').slideToggle();
		$('#btn2').toggleClass('btn2_active');
	});

});
	
