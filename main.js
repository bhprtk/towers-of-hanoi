$(document).ready(init);
function init() {
	$('.towers').click(function(){
		var currentBlock = $(this).find('.blocks:last-child');
		currentBlock.toggleClass("selected");
		secondClick(currentBlock);
		// currentBlock = $(this).find('.blocks:last-child');
		// currentBlock.toggleClass("selected");
	});  
}
function secondClick(thisBlock) {
	$('.towers').click(function(){
		var currentBlock = $(this).find('.blocks:last-child');
		if(!currentBlock.length && thisBlock.hasClass("selected")){
			$(this).append(thisBlock);
			thisBlock.toggleClass("selected");
			$('.towers').unbind('click');
			init();	
		}
		else if(currentBlock.length && thisBlock.hasClass("selected")){
			if(currentBlock.width() > thisBlock.width()){
				$(this).append(thisBlock);
				thisBlock.toggleClass("selected");
				$('.towers').unbind('click');
				init();
			}
			else {
				thisBlock.toggleClass("selected");
				$('.towers').unbind('click');
				init();
			}
			
		}
	});
}	


