
function menu() {

var audio_1=$("#audio_1");
var div_menu = $('<div/>').attr('id','div_menu').appendTo('body');

var div_icon_sound_1 = $('<div/>').attr('id','div_icon_sound_1').append($('<img/>')
	.attr('id','icon_sound_1').attr('src','nkarner/icon_sound_1.png')).appendTo(div_menu);

var div_icon_sound_2 = $('<div/>').attr('id','div_icon_sound_2').append($('<img/>')
	.attr('id','icon_sound_2').attr('src','nkarner/icon_sound_2.png')).hide().prependTo(div_menu);

var div_start_game = $('<div/>').attr('id','div_start_game').appendTo(div_menu);
var start_button = $('<button/>').attr('id','start_button').text('Start Game').appendTo(div_start_game);



div_icon_sound_1.click(function()
{
	audio_1[0].pause();
	$(div_icon_sound_1).hide();
	$(div_icon_sound_2).show();


});

div_icon_sound_2.click(function()
{
	audio_1[0].play();
	$(div_icon_sound_2).hide();
	$(div_icon_sound_1).show();

});


div_start_game.click(function(){
div_menu.remove();
select_level();

});


}

