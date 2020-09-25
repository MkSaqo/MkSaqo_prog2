function select_level() {

	var div_select_level = $('<div/>').attr('id', 'div_select_level').appendTo('body');
	var div_select_level_p = $('<div/>').attr('id', 'div_select_level_p').appendTo(div_select_level);
	var p_select_level = $('<p/>').attr('id', 'p_select_level').text('Level Select').appendTo(div_select_level_p);
	var div_select_level_button_0 = $('<div/>').attr('id', 'div_select_level_button_0').appendTo(div_select_level);
	var button_menu = $('<button/>').attr('id', 'button_menu').text('Menu').appendTo(div_select_level_button_0);
	var div_select_level_mej = $('<div/>').attr('id', 'div_select_level_mej').appendTo(div_select_level);


	for (var i = 1; i <= 16; i++) {
		$('<div/>')
			.css({ 'display': 'inline-block' })
			.attr('id', 'as' + i)
			.append($('<button/>')
				.attr('class', 'a').text(i)
				.css({ 'font-size': '30px' }).click(function (e) {
					makelevel(parseInt($(this).text()));
				})).appendTo(div_select_level_mej);
	}


	button_menu.click(function () {
		div_select_level.remove();
		menu();
	});

}
