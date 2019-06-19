
$(document).ready( function(){
 $('.name').slideUp(3000);
  });
  var url   = location.href;
  if(url == "http://localhost:3000/"){
  setTimeout(function() { 
  window.location = "fixed/index";
}, 5000);
}

