// alert('Hello World');
// prompt('Сколько тебе лет?');
// confirm("Not found ERROR 404");
$(document).ready(function(){
	// alert('hi');
	// let text = $('.div_class').text();
	// alert(text);
	// $('.div_class').text('Какой-то текст');
	// $('.div_class').click(function(){
	// 	$(this).toggleClass('blue');
	// 	// alert($(this).text());
	// 	//$('.div_class').toggleClass('blue');
	// 	//removeClass addClass
	// });
	// $(document).mousemove(function(position){
	// 	$('.cursor_img').attr("style","left:"+position.pageX+"px; top:"+position.pageY+"px;");
	// });

	$('.services_spoiler').click(function(){
		$('.services_spoiler').removeClass('spoiler_active');
		$(this).toggleClass('spoiler_active');
	});
	$('.slider_review').slick({
  		 dots: false,
 		 infinite: true,
 		 speed: 500,
		 fade: true,
 		 cssEase: 'linear',
 		 prevArrow: '<img src="'+main_url+'img/arrow_left.png" class="prevArrow_review">',
 		 nextArrow: '<img src="'+main_url+'img/arrow_right.png" class="nextArrow_review">',
 		 appendArrows: $('.review_arrow')
	});
		$('.slider_review_work').slick({
  		 dots: false,
 		 infinite: true,
 		 speed: 500,
		 fade: true,
 		 cssEase: 'linear',
 		 prevArrow: '<img src="'+main_url+'img/arrow_left.png" class="prevArrow_review">',
 		 nextArrow: '<img src="'+main_url+'img/arrow_right.png" class="nextArrow_review">',
 		 appendArrows: $('.review_arrow_work')
	});

  $('.burger').click(function(){
    // $('.double_submenu').remove();
    // $('.double_contact').remove();
    // $('.double_logo').remove();

    // $('.main-header').toggleClass('hamburger_active');
    $('.header').toggleClass('ham_active');
    // $('<hr>').addClass('burger_line')
    // $('.hamburger_submenu').clone().addClass('double_submenu').appendTo('.fixed_header');
    // $('.contact-menu').clone().addClass('double_contact').appendTo('.fixed_header');
    // $('.logo-img .mob').clone().addClass('double_logo').prependTo('.fixed_header');

  });
});
