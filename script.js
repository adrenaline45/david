document.addEventListener("scroll",function() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos > 0) {
$("#top").show("slow"); document.getElementById("navigation").className= "nav nav-bg";
  } else {
 $("#top").hide("slow"); document.getElementById("navigation").className= "nav";
  }
  if (scrollPos > 300) {
  $("#text1").show("slow");
  $("#text2").show("slow");
  } else {
  $("#text1").hide("slow");
  $("#text2").hide("slow");
  }
});

$(document).ready(function() {
  $("#panel1").hide();
  $("#buttons-div").hide();
  $("#top").hide();
  $("#text1").hide();
  $("#text2").hide();
});

window.addEventListener("load", function() {
  setTimeout(function() {
    $("#panel1").show("slow");
  }, 1000);
  setTimeout(function() {
    $("#buttons-div").show("slow");
  }, 1500);
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
});

$('#top').each(function(){
    $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
});
