$(function(){
	$(".resume").addClass("active-d");
	$(".home").hide();
	$(".portfolio").hide();


	$(".resume-b").click(function(){
		$(".active-d").hide("fast");
		$(".active-d").removeClass("active-d");
		$(".resume").show("slow");
		$(".resume").addClass("active-d");
	});

	/*$(".home-b").click(function(){
		$(".active-d").hide("fast");
		$(".active-d").removeClass("active-d");
		$(".home").show("slow");
		$(".home").addClass("active-d");
	});*/

});

