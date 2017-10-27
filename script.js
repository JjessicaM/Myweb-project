//Jessica Alcaraz Oct 27/2017

$(document).ready(function(){
    $("#group").click(function(){
        $("body, html").animate({
            scrollTop: "0px"
        }, 800);
    });
    
    $(window).scroll(function(){
       if( $(this).scrollTop() > 0 ){
           $("#group").slideDown(500);
          
          } else{
              $("#group").slideUp(500);
          }
    });  
});