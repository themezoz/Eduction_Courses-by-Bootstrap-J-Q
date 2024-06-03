// Loader Js 
$(window).on("load", function () {
  $(".loader-overlay").fadeOut(2000);
});

// Fixed Header and Back to top 
$(document).ready(function(){
            
  $(".top").click(function(){ 
      $("html").animate({scrollTop : 0});
  })
});
$(window).scroll(function(){
            
  if($(this).scrollTop() > 150){
      $("header").addClass("active");
  }else{
      $("header").removeClass("active");
  }

  if($(this).scrollTop() > 150){
      $(".back-to-top").fadeIn();
  }else{
      $(".back-to-top").fadeOut();
  }
});


// courses section slick slider 

$('.responsive').slick({
    dots: false,
    arrows:true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// expert section slick slider 
$('.expert-silder').slick({
  dots: false,
  arrows:true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

