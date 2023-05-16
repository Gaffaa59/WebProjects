$(document).ready(function(){
	$(document).scroll(function(){
   		let scroll = $(window).scrollTop();
    	if(scroll == 0) {
        	$(".menu").removeClass("scroll");;
    	} else {
         	$(".menu").addClass("scroll");
    	}
	});	
	$('.review_block_slick').slick({
	  	infinite: true,
	  	speed: 500,
	  	fade: true,
	  	cssEase: 'linear',
	});
});