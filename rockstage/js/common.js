$(document).ready(function(){
	$(".timer").appear(function() {
		$(this).countTo();
	});


	var navMain = $("#navbarMenu");
	navMain.on("click", ".nav-link", null, function () {
		$("nav").toggleClass("sidenav-color");
		navMain.collapse('hide');
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







	$(document).mouseup(function (e) {
		var container = $(".sidenav");
		if (container.has(e.target).length === 0){
			container.removeClass("sidenav-close");
			$(".menu-btn").click(function(){
				$(".sidenav").toggleClass("sidenav-close");
			});

		}



	});



	$(".navbar-toggler").click(function(){
		$("nav").toggleClass("sidenav-color")
	});










	function isVisible(elem) {

		var coords = elem.getBoundingClientRect();

		var windowHeight = document.documentElement.clientHeight;

		var topVisible = coords.top > -1 && coords.top < windowHeight;
		var bottomVisible = coords.bottom < windowHeight && coords.bottom > -1;

		return topVisible || bottomVisible;
	}

	function showVisible() {
		var imgs = document.getElementsByTagName('img');
		for (var i = 0; i < imgs.length; i++) {

			var img = imgs[i];

			var realsrc = img.getAttribute('realsrc');
			if (!realsrc) continue;

			if (isVisible(img)) {
				img.src = realsrc;
				img.setAttribute('realsrc', '');
			}
		}
	}
	window.onscroll = showVisible;
	showVisible();


	$( '.on-top, .nav-link' ).on( 'click', function(e){
		var href = $(this).attr( 'href' );
		$( 'html, body' ).animate({
			scrollTop: $( href ).offset().top
		}, '300' );
		e.preventDefault();

	});


	$(window).scroll(function(){
		if ($(this).scrollTop()*4 > $(this).height()){
			$(".on-top").addClass("on-top_active");
		}
		else $(".on-top").removeClass("on-top_active");
	})

});








$(window).scroll(function(){
	$('.navbar-dark').toggleClass('navbar-active', $(this).scrollTop() > 250);
});