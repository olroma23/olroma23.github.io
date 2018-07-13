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

		$(".dropdown-item").click(function(){
			$(".sidenav").toggleClass("sidenav-close");
			$('.menu-btn').removeClass('menu-btn_active');
			$(".dropdown-toggle").removeClass("rotate-first-class");
		});
	}
});

$(".dropdown-item").click(function(){
	$(".dropdown-toggle").toggleClass("rotate-first-class");
});


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



$(function() {


	$(".first-element").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-first-class");
	});





	$(".partners").owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});


	$(".functions").owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoplay: true,
		autoplayTimeout: 9500,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});





	new WOW().init();

	$(window).on('load', function(){
		$('.preloader').delay(50).fadeOut('slow');
	})

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

	$("#select-site").focus(function(){
		$(".form-container").addClass("active-icon3");
	});

	$("#select-site").focusout(function(){
		$(".form-container").removeClass("active-icon3");
	});

	$("#select-pack").focus(function(){
		$(".form-container").addClass("active-icon4");
	});

	$("#select-pack").focusout(function(){
		$(".form-container").removeClass("active-icon4");
	});


	$("#name-form1").focus(function(){
		$(".form-container").addClass("active-icon");
	});

	$("#name-form1").focusout(function(){
		$(".form-container").removeClass("active-icon");
	});

	$("#number-form1").focus(function(){
		$(".form-container").addClass("active-icon1");
	});

	$("#number-form1").focusout(function(){
		$(".form-container").removeClass("active-icon1");
	});

	$("#mail-form1").focus(function(){
		$(".form-container").addClass("active-icon2");
	});

	$("#mail-form1").focusout(function(){
		$(".form-container").removeClass("active-icon2");
	});



	$("#name-form2").focus(function(){
		$(".form-container").addClass("active-icon");
	});

	$("#name-form2").focusout(function(){
		$(".form-container").removeClass("active-icon");
	});

	$("#number-form2").focus(function(){
		$(".form-container").addClass("active-icon1");
	});

	$("#number-form2").focusout(function(){
		$(".form-container").removeClass("active-icon1");
	});

	$("#mail-form2").focus(function(){
		$(".form-container").addClass("active-icon2");
	});

	$("#mail-form2").focusout(function(){
		$(".form-container").removeClass("active-icon2");
	});
	$("#select-pack2").focus(function(){
		$(".form-container").addClass("active-icon4");
	});

	$("#select-pack2").focusout(function(){
		$(".form-container").removeClass("active-icon4");
	});



	$("#name-form3").focus(function(){
		$(".form-container").addClass("active-icon");
	});

	$("#name-form3").focusout(function(){
		$(".form-container").removeClass("active-icon");
	});

	$("#number-form3").focus(function(){
		$(".form-container").addClass("active-icon1");
	});

	$("#number-form3").focusout(function(){
		$(".form-container").removeClass("active-icon1");
	});

	$("#mail-form3").focus(function(){
		$(".form-container").addClass("active-icon2");
	});

	$("#mail-form3").focusout(function(){
		$(".form-container").removeClass("active-icon2");
	});
	$("#select-pack3").focus(function(){
		$(".form-container").addClass("active-icon4");
	});

	$("#select-pack3").focusout(function(){
		$(".form-container").removeClass("active-icon4");
	});
	


	$("#name-form4").focus(function(){
		$(".form-container").addClass("active-icon");
	});

	$("#name-form4").focusout(function(){
		$(".form-container").removeClass("active-icon");
	});

	$("#number-form4").focus(function(){
		$(".form-container").addClass("active-icon1");
	});

	$("#number-form4").focusout(function(){
		$(".form-container").removeClass("active-icon1");
	});

	$("#mail-form4").focus(function(){
		$(".form-container").addClass("active-icon2");
	});

	$("#mail-form4").focusout(function(){
		$(".form-container").removeClass("active-icon2");
	});
	$("#select-pack4").focus(function(){
		$(".form-container").addClass("active-icon4");
	});

	$("#select-pack4").focusout(function(){
		$(".form-container").removeClass("active-icon4");
	});
	




	$(".timer").appear(function() {
		$(this).countTo();
	});







	$(window).scroll(function(){
		if ($(this).scrollTop()*4 > $(this).height()){
			$(".on-top").addClass("on-top_active");
		}
		else $(".on-top").removeClass("on-top_active");
	})

	$("a").mPageScroll2id({
		offset: 75
	});



});

$(document).ready(function(){
	$('[data-toggle="popover"]').popover(); 
});
