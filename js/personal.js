$(function(){
	$(".home").addClass("active-d");
	$(".resume").hide();
	$(".portfolio").hide();


	$(".resume-b").click(function () {
	    switchDiv($(".resume"));
	});

	$(".home-b").click(function(){
	    switchDiv($(".home"));
	});

});

function switchDiv(toDiv) {
    if (!toDiv.hasClass("active-d")) {
        $(".active-d").hide("fast");
        $(".active-d").removeClass("active-d");
        $(toDiv).show("slow");
        $(toDiv).addClass("active-d");
    }
}

