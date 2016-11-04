$(document).ready(function() {
  $('.serviceArticle').hide();
  $( ".serviceArticle" ).first().show();
  $('.serviceButton').click(function() {
    $('.serviceArticle').slideUp("fast");
    $('.serviceButton').css("background","transparent");
    $(this).next(".serviceArticle").slideDown("fast");
    $(this).css("background","#40428a");
  });

  if($(window).width() <= 767){

    $('.serviceButton').click(function() {
      $('.serviceButton').css("background","#40428a");
    });

    //mobile employee profile selector
    $('.bio').hide();
    $('.worker').click(function() {
      $('#profileBox').css('height','350px');
      $('.bio').hide("fast");
      console.log('ckicj');
      $(this).find(".bio").show("fast");
    });
  }


  //auto courousel through the reviews
  $(document).ready(function() {
   var j = 0;
   var delay = 7000; //millisecond delay between cycles
   function cycleThru(){
           var jmax = $("#reviewList li").length -1;
           $("#reviewList li:eq(" + j + ")").find('.stars')
              .stop()
              .animate({fontSize: '1.2em'},200)
              .animate({fontSize: '1.2em'}, 50)
              .animate({fontSize: '1em'}, 200);
           $("#reviewList li:eq(" + j + ")")
                   .animate({"opacity" : "1"} ,600)
                   .animate({"opacity" : "1"}, delay)
                   .animate({"opacity" : "0"}, 600, function(){
                           (j == jmax) ? j=0 : j++;
                           cycleThru();
                   });
           };

   cycleThru();
  });


});
