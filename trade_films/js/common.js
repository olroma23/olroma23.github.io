$(function() {

	function isVisible(elem) {

		var coords = elem.getBoundingClientRect();

		var windowHeight = document.documentElement.clientHeight;

		var topVisible = coords.top > 0 && coords.top < windowHeight;
		var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

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





	$(window).scroll(function(){
		$('.navbar-dark').toggleClass('navbar-active', $(this).scrollTop() > 400);
	});

	$('.clients').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoplay: true,
		autoplayTimeout: 6000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768:{
				items: 2
			},
			992: {
				items: 3
			}, 
			1200: {
				items: 4
			}
		}
	});

	$('.certificates').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsiveClass: true,
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

	// Custom JS

	

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







