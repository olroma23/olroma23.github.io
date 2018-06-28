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



    /**
     * Проверяет элемент на попадание в видимую часть экрана.
     * Для попадания достаточно, чтобы верхняя или нижняя границы элемента были видны.
     */
     function isVisible(elem) {

     	var coords = elem.getBoundingClientRect();

     	var windowHeight = document.documentElement.clientHeight;

      // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      return topVisible || bottomVisible;
    }

    /**
    Вариант проверки, считающий элемент видимым,
    если он не более чем -1 страница назад или +1 страница вперед

    function isVisible(elem) {

      var coords = elem.getBoundingClientRect();

      var windowHeight = document.documentElement.clientHeight;

      var extendedTop = -windowHeight;
      var extendedBottom = 2 * windowHeight;

      // top visible || bottom visible
      var topVisible = coords.top > extendedTop && coords.top < extendedBottom;
      var bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

      return topVisible || bottomVisible;
    }
    */

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

// function dlOnload() {
// 	var jq = document.createElement("script"), mainScript;
// 	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
// 	document.body.appendChild(jq);

// 	jq.onload = function() {
// 		mainScript = document.createElement("script");
// 		mainScript.src = "js/common.js";
// 		document.body.appendChild(mainScript);
// 	}
// }

// window.addEventListener("load", dlOnload, false);


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
		autoplayTimeout: 4000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
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
