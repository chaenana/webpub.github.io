console.log("load");
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        //hash 라는건 알아서 다음꺼로 계산을 해주는? 그런거인듯함
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });



  //스크롤이 제일 위에 오면 옆에 있는 to top이 사라짐

  document.addEventListener("scroll", yScroll);

function yScroll() {

  var yPos = window.pageYOffset;

  if (yPos > 10) {
    document.getElementById("top-btn").style.bottom = "10px";
  } else {
    document.getElementById("top-btn").style.bottom = "-60px";
  }
}

function ScrollTop() {

  var i = window.pageYOffset;

  var intervalTimer = setInterval(function() {
    if (i > 0) {
      window.scrollTo(0, i);
      i -= 15;
    } else {
      document.getElementById("top-btn").style.bottom = "-60px";
      clearInterval(intervalTimer);
    }
  }, 0.5);
}


/*옆에서 텍스트 쭉 커짐*/


$(function(){
  $(".title").addClass("active");
});


//옆에서 스르륵 나타남


$(document).ready(function() {
  $(window).scroll( function(){
      $('.fade-up').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-right':'0px'},1000);
          }
          
      }); 
  });
});


