$(window).on('load', function() {
	$('.preloader2').addClass("preloader2_anim");
	$('.preloader1').addClass("preloader1_anim");
	$('.first-element').addClass("first-element_anim");
	$('.second-element').addClass("second-element_anim");
	$('.third-element').addClass("third-element_anim");
	$('.fourth-element').addClass("fourth-element_anim");
	$('.fifth-element').addClass("fifth-element_anim");
	$('.sixth-element').addClass("sixth-element_anim");
	$('.seventh-element').addClass("seventh-element_anim");
	$('.navbar-brand').addClass("navbar-brand_anim");
	$('.right-element-first').addClass("right-element-first_anim");
	$('.right-element-second').addClass("right-element-second_anim");
	$('.right-element-third').addClass("right-element-third_anim");
	$('.left-element-first').addClass("left-element-first_anim");
	$('.left-element-second').addClass("left-element-second_anim");
	$('.left-element-third').addClass("left-element-third_anim");
	$('.h-img').addClass("h-img_anim");
	$('.p-first').addClass("p-first_anim");
	$('.p-second').addClass("p-second_anim");
	$('.p-third').addClass("p-third_anim");
	$('.p-fourth').addClass("p-fourth_anim");
	$('.prim-btn').addClass("prim-btn_anim");
	$('.left-line').addClass("left-line_anim");
	$('.menu-btn').addClass("menu-btn_anim");
	$('.center-element-first').addClass("center-element-first_anim");
	$('.center-element-second').addClass("center-element-second_anim");
	$('.center-element-third').addClass("center-element-third_anim");
	$('.down-section').addClass("down-section_anim");
	$('.left-line').addClass("left-line_anim");
	$('.left1-line').addClass("left1-line_anim");
	$('.left2-line').addClass("left2-line_anim");
	$('.left3-line').addClass("left3-line_anim");
	$('.p-first-cont').addClass("p-first-cont_anim");
	$('.p-second-cont').addClass("p-second-cont_anim");
	$('.p-third-cont').addClass("p-third-cont_anim");
	$('.p-fourth-cont').addClass("p-fourth-cont_anim");
	$('.first-element-cont').addClass("first-element-cont_anim");
	$('.second-element-cont').addClass("second-element-cont_anim");
	$('.third-element-cont').addClass("third-element-cont_anim");
	$('.fourth-element-cont').addClass("fourth-element-cont_anim");
	$('.contact-anim').addClass("contact-anim_anim");



	$(".first-element").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-first-class");
	});							
	$(".second-element").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-second-class");
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

			$(".dropdown-item").click(function(){
				$(".sidenav").toggleClass("sidenav-close");
				$('.menu-btn').removeClass('menu-btn_active');
				$(".dropdown-toggle").removeClass("rotate-first-class");
				$(".dropdown-toggle").removeClass("rotate-second-class");
			});
		}
	});

	$(".dropdown-item").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-first-class");
	});

	$(".dropdown-item").click(function(){
		$(".dropdown-toggle").toggleClass("rotate-second-class");
	});


	var vids = $("video"); 
	$.each(vids, function(){
		this.controls = false; 
	}); 




	$('.smm-pills-li').click(function(){
		$('.smm-pills-li').addClass('.smm-pills_active');
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



	$('#container').mixItUp();


	new WOW().init();



	$(".partners").owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 100000,
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


	$('.clients').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoplay: true,
		autoplayTimeout: 1800,
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

	$('.clients1').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoplay: true,
		autoplayTimeout: 100000,
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
				items: 2
			}, 
			1200: {
				items: 2
			}
		}
	});



	$(window).scroll(function(){
		if ($(this).scrollTop()*4 > $(this).height()){
			$(".on-top").addClass("on-top_active");
		}
		else $(".on-top").removeClass("on-top_active");
	})

	$(window).scroll(function(){
		if ($(this).scrollTop()*4 > $(this).height()){
			$(".down-fixed").addClass("down-fixed_active");
		}
		else $(".down-fixed").removeClass("down-fixed_active");
	})

	$(window).scroll(function(){
		if ($(this).scrollTop()*4 > $(this).height()){
			$(".down-fixed").addClass("down-fixed_active");
		}
		else $(".down-fixed").removeClass("down-fixed_active");
	})

	$("a").mPageScroll2id({
		offset: 75
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

