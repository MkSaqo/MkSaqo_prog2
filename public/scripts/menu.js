
function menu() {
	var div_menu = $('<div/>').attr('id','div_menu').appendTo('body');
	var div_start_game = $('<div/>').attr('id','div_start_game').appendTo(div_menu);
	var start_button = $('<button/>').attr('id','start_button').text('Start Game').appendTo(div_start_game);
	
	div_start_game.click(function(){
		div_menu.remove();
		select_level();
	});  

}
