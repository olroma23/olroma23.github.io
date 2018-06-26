function dlOnload() {
	var jq = document.createElement("script"), mainScript;
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
	document.body.appendChild(jq);

	jq.onload = function() {
		mainScript = document.createElement("script");
		mainScript.src = "js/common.js";
		document.body.appendChild(mainScript);
	}
}

window.addEventListener("load", dlOnload, false);


$(function() {


	$(".first-element").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-first-class");
	});


	






	var vids = $("video"); 
	$.each(vids, function(){
		this.controls = false; 
	}); 


	$(window).scroll(function(){
		$('.navbar-dark').toggleClass('navbar-active', $(this).scrollTop() > 250);
	});


	$("#name-form").focus(function(){
		$(".form-container").addClass("active-icon");
	});

	$("#name-form").focusout(function(){
		$(".form-container").removeClass("active-icon");
	});

	$("#number-form").focus(function(){
		$(".form-container").addClass("active-icon1");
	});

	$("#number-form").focusout(function(){
		$(".form-container").removeClass("active-icon1");
	});

	$("#mail-form").focus(function(){
		$(".form-container").addClass("active-icon2");
	});

	$("#mail-form").focusout(function(){
		$(".form-container").removeClass("active-icon2");
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
		$('.menu-btn').on('click', function(e) {
			e.preventDefault;
			$(this).toggleClass('menu-btn_active');
		});
		$('.menu-btn').removeClass('menu-btn_active');
	}
});