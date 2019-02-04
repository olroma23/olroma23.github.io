$(document).ready(function(){
	$(".timer").appear(function() {
		$(this).countTo();
	});


	$("form.callback").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('.photos').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoplay: false,
		autoplayTimeout: 8000,
		responsiveClass: true,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768:{
				items: 1
			},
			992: {
				items: 1
			}, 
			1200: {
				items: 1
			}
		}
	});

	var $item = $('.carousel-item'); 
	var $wHeight = $(window).height()/1.3;
	$item.eq(0).addClass('active');
	$item.height($wHeight)/1.3; 
	$item.addClass('full-screen');

	$('.w-100').each(function() {
		var $src = $(this).attr('src');
		var $color = $(this).attr('data-color');
		$(this).parent().css({
			'background-image' : 'url(' + $src + ')',
			'background-color' : $color
		});
		$(this).remove();
	});

	$(window).on('resize', function (){
		$wHeight = $(window).height()/1.3;
		$item.height($wHeight)/1.3;
	});

	$('.carousel').carousel({
		interval: 6000,
		pause: "false"
	});
});