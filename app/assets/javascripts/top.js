
$(document).ready( function(){
 $('.name').slideUp(3000);
  });
  var url   = location.href;
  if(url == "https://so-chi-portfolio.herokuapp.com"){
  setTimeout(function() { 
  window.location = "fixed/index";
}, 5000);
}

