$(function() {


	$(".first-element").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-first-class");
	});


	$(".second-element").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-second-class");
	});


	$(".third-element").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-third-class");
	});




	$('.menu-btn').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('menu-btn_active');
	});


	var vids = $("video"); 
	$.each(vids, function(){
		this.controls = false; 
	}); 


	$(window).scroll(function(){
		$('.navbar-dark').toggleClass('navbar-active', $(this).scrollTop() > 250);
	});


	$(".menu-btn").click(function(){
		$(".sidenav").toggleClass("sidenav-close");
		$('.content').toggleClass('content_active');
	});


	$(window).on('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	})


	// Custom JS

});

