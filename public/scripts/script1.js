$(document).ready(function()
{
	var audio_1 = $('<audio/>').attr('id','audio_1').appendTo('body');
	audio_1[0].src = 'erger/erg.mp3';
	audio_1[0].play();
	menu();
});