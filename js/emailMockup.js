$(document).ready(function(){
	 
	$(".toggleView").click(function() {
	  $("div.largeViewport").toggleClass("phoneViewport");

	    if ($(this).text() == "Large Screen Format")
	       $(this).text("Phone Screen Format")
	    else
	       $(this).text("Large Screen Format");

	});

});
