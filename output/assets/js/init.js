// JpreLoader ------------------
	jQuery('#wrapper').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
	},
	function() {
		var al = {queue:false,duration:200,easing:"easeInOutQuad"};
		jQuery('#wrapper').animate({"opacity":'1'},{queue:false,duration:700,easing:"easeInOutQuad"});

		jQuery('.about-link').animate({'margin-left':'0'},al);
		jQuery('.contact-link').animate({'margin-right':'0'},al);
		setTimeout( function(){
			jQuery('.fistslide').removeClass('bc');
		},900);
	});

function initKlif() {

	"use strict";

//------------------------------init swiper-----------------------

	var mySwiper = new Swiper('.swiper-container',{
		initialSlide:1,

	});

	jQuery('.arrow-left').on('click', function(e){
    	e.preventDefault()
   		mySwiper.swipePrev()
  	});

	jQuery('.arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext()
	});



// functions ------------------

	function showprogresss() {
		jQuery(".show-progress").removeClass('isDown');
		jQuery('.fade').addClass('bc');
			setTimeout( function(){
				jQuery('.progress-holder').fadeIn(1000);
			},650);
			jQuery({value: 0}).animate({value: jQuery('.num2').attr("name")}, {
				duration: 2000,
				easing:'swing',
				step: function()
					{
						jQuery('.num2').val(Math.ceil(this.value)).trigger('change');
					}
			});
		jQuery('#progress').animate({opacity:'0'},1000);
	}

	function hideprogresss() {
		jQuery(".show-progress").addClass('isDown');
		jQuery('.progress-holder').fadeOut(1000);
		setTimeout( function(){
			jQuery('.fade').removeClass('bc');
			jQuery('#progress').animate({opacity:'1'},1000);
		},650);
	}
	function showform() {
		jQuery('.fade2').addClass('bc2');
		setTimeout( function(){
			jQuery('.contact-form').fadeIn(500);
		},650);
	}
	function hideform() {
		jQuery('.contact-form').fadeOut(500);
		setTimeout( function(){
			jQuery('.fade2').removeClass('bc2');
		},650);
	}

	jQuery('.lanch-form').click(function(){showform();});
	jQuery('.close-form').click(function(){hideform();});

	jQuery('.num').knob();
	jQuery(".show-progress").click( function(){
		jQuery(this).toggleClass('but-rotade');
		if (jQuery(this).hasClass("isDown") ) {
			showprogresss();
		} else {
			hideprogresss();
		}
		return false;
	});


};



jQuery(document).ready(function(){
	initKlif();
});