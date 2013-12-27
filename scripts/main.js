function scrollToTop(speed) {
	$('body,html').animate({
		scrollTop: 0
	},speed);
}

$('#Nav li:eq(0) a').click(function(){
	scrollToTop(800);
});

	$('#Nav li:eq(1) a').click(function(){
		$('#portfolio').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
		return false;
});


var swipeScreen = 1;
// Emote Slider Functions
function swipeInit() {
	var mySwiper = $('.swiper-container').each(function(){
		$(this).swiper({
			// Options
			mode:'horizontal',
			autoplay: false,
			loop: true,
			speed: 300,
			resistance: true,
			onTouchEnd: function(){
				$(".swipe-location li").css("backgroundColor", "#A7A29F");
				swipeScreen = swipeScreen + 1;
				if (swipeScreen > 2) { swipeScreen = 1;}
				$(".screen" + swipeScreen).css("backgroundColor", "#98041A");
				
			}
		});
	});
}


swipeInit();

$('.carousel').carousel({
  interval: false
})

$('.carousel-prev').click(function(){
	$('.carousel').carousel('prev');
});

$('.carousel-next').click(function(){
	$('.carousel').carousel('next');
});
