$(document).ready(function(){
console.log("ready")

Marquee3k.init()



$('.nav').click(function() {
  $('.Click').toggleClass('showme');
});
  

});


$(document).ready(function() {
  // Add jQuery here

  $(".oase").mouseenter(function() {
    $(".oase__image").addClass("showme");
  });

  $(".oase").mouseleave(function() {
    $(".oase__image").removeClass("showme");
  });

  $(".magazine").mouseenter(function() {
    $(".magazine__image").addClass("showme");
  });

  $(".magazine").mouseleave(function() {
    $(".magazine__image").removeClass("showme");
  });

  $(".landscape").mouseenter(function() {
    $(".landscape__image").addClass("showme");
  });

  $(".landscape").mouseleave(function() {
    $(".landscape__image").removeClass("showme");
  });
  $(".step4").mouseenter(function() {
    $(".step4__image").addClass("showme");
  });

  $(".step4").mouseleave(function() {
    $(".step4__image").removeClass("showme");
  });




});

 $( function() {
    $( ".box" ).draggable();
  } );

