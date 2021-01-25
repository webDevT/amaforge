$(function(){

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});

//-------end sticky header--------

//-------start mobil menu----------

$('.menu__btn').click(function(){
		$('.menu').toggleClass('active');
	})

//-------end mobil menu------------

$('.slider').slick({
  slidesToShow: 3,
  dots:true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [

   {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
    }
  },
 {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      centerMode: true,
  	centerPadding: '20px',
  	prevArrow: false,
  nextArrow: false,
    }
  },


  


  ]
 
})

$('.clients-slider').slick({
  slidesToShow: 4,
  arrows: false,
   centerMode: true,
  	centerPadding: '185px',
  responsive: [
   {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      centerMode: true,
  	centerPadding: '30px',
    }
  },
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
    }
  },
 {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      centerMode: true,
  	centerPadding: '70px',
    }
  },


  


  ]
 
})

jQuery("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = jQuery(this).attr('href'),
        top = jQuery(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});