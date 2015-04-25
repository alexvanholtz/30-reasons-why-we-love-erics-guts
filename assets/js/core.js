//Stick all dat js in an IIFE
(function(){

	var position = $(window).scrollTop();
	var headerHeight = $('header#header').outerHeight();

	//Remove animatey classes if we've already scrolled down the page
	if( position > headerHeight ){
		  $('#results').removeClass('fadeIn');
		  $('#results').removeClass('wow');
	}

	//Init animations and create scroll to top click event
	$(document).ready(function(){

	 	new WOW().init();

		//Sticky selectors on scroll
		$(window).scroll(function () {

			if ( $(this).scrollTop() > $('#header').outerHeight() ) {
				$('#results').addClass('fixed');
				$('#reasons').css('margin-top', $('#results').outerHeight());
			}	
			else{
				$('#results').removeClass('fixed');
				$('#reasons').css('margin-top', 0);
			}

		});

		$("a[href='#top']").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});

	});

})();