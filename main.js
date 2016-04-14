$(document).ready(init);

function init() {
	$('.blocks').click(function(){
		$(this).toggleClass("selected");	
	});
}