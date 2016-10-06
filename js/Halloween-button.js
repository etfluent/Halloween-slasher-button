$( document ).ready(function() {
	
	$('button').mouseover(function() { 
	    $('button').css("background-size", "50% auto");
	    $('button').css("background-position", "65% 50%");
	    $('button').css("background-repeat", "no-repeat");
	    $('button').toggleClass("smack");
	});

	$('button').mouseout(function() { 
	        $('button').removeClass("smack");
	});

});