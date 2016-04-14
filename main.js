$(document).ready(init);

function init() {
	$('.towers').click(function(){
		if($(this).find(".blocks").length){
			$('.blocks:last-child').toggleClass("selected");
		}
		
	});
}