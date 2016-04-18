$(document).ready(init);
function init() {
	$('.towers').click(towerClicked);

}
var moves = 0;
var currentBlock;
function towerClicked(){
	var currentTower = $(this);
	var selected = $('.selected');
	currentBlock = currentTower.find('.blocks:last-child');
	if(selected.length) {
		if(currentTower.find('.selected').length){
			selected.removeClass('selected');
		} else {
			if(currentBlock.length) {
				if(currentBlock.width() > selected.width()) {
					currentTower.append($('.selected'));
					$('.selected').removeClass('selected');
					moves++;
					$('#moves').text(moves);
					checkWin();
				}
			} else {
				currentTower.append($('.selected'));
				$('.selected').removeClass('selected');
				moves++;
				$('#moves').text(moves);
			}
		}
	} else {
		currentBlock.addClass('selected');
	}
}

function checkWin() {
	if($('.towers').slice(0,2).find('.blocks').length === 0) {
		$('.towers-align').fadeOut();
		$('.you-win').fadeIn();
		$('#total-moves').text(moves);
		$('#play-again').click(function(){
			location.reload();
		});
	}
}
