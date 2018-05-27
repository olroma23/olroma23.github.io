$(function() {


	$(window).scroll(function(){
		$('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
	});
	$(".navbar-toggler").click(function(){
		$("nav").toggleClass("sidenav-color")
	});





	$(window).scroll(function(){
		$('.progress-bar').each(function() {
			var 
			cPos = $(this).offset().top,
			topWindow = $(window).scrollTop();
			if (cPos < topWindow + 600 ){
				$(this).find('.progress-content').animate({
					width:$(this).attr('data-percentage')
				},4200);

				$(this).find('.progress-number-mark').animate(
					{left:$(this).attr('data-percentage')},
					{
						duration: 4200,
						step: function(now, fx) {
							var data = Math.round(now);
							$(this).find('.percent').html(data + '	%');
						}
					}); 
			}
		});
	});


	$('.timer').appear(function() {
		$(this).countTo();
	});

	new WOW().init();

	$(".scroll").mPageScroll2id({
		offset: 175
	});
	
});




