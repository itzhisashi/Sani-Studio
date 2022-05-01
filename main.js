//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  var body = $("html, body");
   body.stop().animate({scrollTop:0},
    3000, 'swing', function(){
    console.log("Animation has finished");
  });
  
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//function topFunction() {
  //  var body = $("html, body");
  //    body.stop().animate({scrollTop:0},       500, 'swing', function() { 
  //        console.log("Animation has finished");
  //    });
  //  }