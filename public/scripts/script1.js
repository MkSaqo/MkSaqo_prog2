$(document).ready(function(){
	
	var audio_1 = $('<audio/>').attr('id','audio_1').appendTo('body');
	var div_icon_sound_1 = $('<div/>').attr('id','div_icon_sound_1').append($('<img/>').attr('id','icon_sound_1').attr('src','nkarner/icon_sound_1.png')).hide().appendTo('body');
	var div_icon_sound_2 = $('<div/>').attr('id','div_icon_sound_2').append($('<img/>').attr('id','icon_sound_2').attr('src','nkarner/icon_sound_2.png')).prependTo('body');
	
	div_icon_sound_1.click(function(){audio_1[0].pause();$(div_icon_sound_1).hide();$(div_icon_sound_2).show();});
	div_icon_sound_2.click(function(){audio_1[0].play();$(div_icon_sound_2).hide();$(div_icon_sound_1).show();});
	
	audio_1[0].src = 'erger/erg.mp3';
	menu();
	
});