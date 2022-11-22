$(function(){

	$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.Go-To-Top-Btn').addClass('active');
		} else {
			$('.Go-To-Top-Btn').removeClass('active');
		}
	});

	$('.Go-To-Top-Btn').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 450, 'linear');
}

//$ = document.getElementById