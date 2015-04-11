$(function() {

	function test(){
		console.log('blah');
	}

	if ($(window).width() < 768) {
		$('body').toggleClass('mobile');
		mobileContent();
	}

	$(window).resize(function() {
		if ($(window).width() < 768 && !$('body').hasClass('mobile')) {
			$('body').toggleClass('mobile');
			mobileContent();
		}
		if ($(window).width() > 767 && $('body').hasClass('mobile')) {
			$('body').toggleClass('mobile');
			desktopContent();
		}
	});

	function mobileContent() {
		$('.project-content:nth-child(even)').each(function() {
	   		$(this).insertBefore($(this).prev()); 
		});
	}

	function desktopContent() {
		$('.project:nth-child(odd)').each(function() {
			var content = $(this).find('.project-content');
			var image = $(this).find('.project-image');
	   		image.insertBefore(content); 
		});
	}

});