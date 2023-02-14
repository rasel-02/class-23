$(function () {

    $(window).on('scroll', function () {
       var scrollSize = $(window).scrollTop()

       if(scrollSize > 600) {
             $('#back').slideDown();
       } else{
             $('#back').slideUp();
       }

      if(scrollSize > 50){
            $('#nav').addClass("active")
      }
    })


    $('#back').on('click', function () {
        $('html,body').animate({
            scrollTop:0,
        })
    })

   
     $('.your-class').slick( {
        arrows:false,
        speed:3000,
        autoplay:1000,
        autoplaySpeed:3000,
     } );
      
})