function makelevel(level)
{
	div_select_level.remove();


	var div_level1 = $('<div/>').attr('id','div_level1').appendTo('body');

	var div_menu_button = $('<div/>').attr('id','div_menu_button').appendTo(div_level1);

	var level_button_menu = $('<button/>').attr('id','level_button_menu')
	.text('Menu').appendTo(div_menu_button);

	var div_select_level_button = $('<div/>').attr('id','div_select_level_button').appendTo(div_level1);

	var button_select_level = $('<button/>').attr('id','button_select_level')
		.text('Select Level').appendTo(div_select_level_button);

	var div_mejtex = $('<div/>').attr('id','div_mejtex').appendTo(div_level1);


	var mard_1 = $('<img style ="position: absolute; top: 150px; left: 34px; width: 20px; height: 29px;"/>')
		 .attr('id','mard_1').attr('src','nkarner/mard1.png').appendTo(div_mejtex);

	var finish = $('<img style ="position: absolute; top: 41%; left: 96%; width: 50px; height: 64px;"/>')
		 .attr('id','finish').attr('src','nkarner/finish.png').appendTo(div_mejtex);



	div_menu_button.click(function(){
	$('#audio_1').remove();
	div_level1.remove();
	menu();

	});

	div_select_level_button.click(function(){
	div_level1.remove();
	select_level();
	});


// __________________________________MARD__________________________

levelKub = new Matrix_1(window['level' +level]);
Mard1();




	function Mard1() 
	{
		var lastDirection='left';
		var kub = levelKub.alllevel1;
		var kub2 = levelKub.alllevel2;
		var directions = {};
		var speedX = 5;
		var speedY = 0;
		  
		var jumpState = true;

		// var STATIC_HOR2_CENTER;
		// var STATIC_VER2_CENTER;
		var STATIC_HOR_CENTER;
		var STATIC_VER_CENTER;
		var STATIC_VER1_CENTER;

		var FINISH_HOR_CENTER;
		var FINISH_VER_CENTER;
		// var WIDTH_DIFFERENCE2;
		var WIDTH_DIFFERENCE;
		var HEIGHT_DIFFERENCE;
		
		var WIDTH_DIFFERENCE_FINISH;
		var HEIGHT_DIFFERENCE_FINISH;

		var MARD_1_HOR_CENTER;
		var MARD_1_VER_CENTER;
		var MARD_1_VER_L_CENTER;


		  $("html").keyup(stop).keydown(xax);


		  function xax(e) {
		    directions[e.which] = true;   
		  }

		  function stop(e) {
		    delete directions[e.which];

		  }

		  function checkCollision()
			{
	  	
		  
		  	for (var i in kub)
		  	{

		  		
				
				STATIC_HOR_CENTER = kub[i].position().left + kub[i].width()/2;
		  		STATIC_VER_CENTER = kub[i].position().top;

		  		STATIC_VER1_CENTER = kub[i].position().top + kub[i].height()/2;

		  		// STATIC_HOR2_CENTER = $('.div_kub3').position().left + $('.div_kub3').width()/2;
		  		// STATIC_VER2_CENTER = $('.div_kub3').position().top + $(".div_kub3").height()/2;

		  		

		  		// WIDTH_DIFFERENCE1 = mard_1.width()/2 + $('.div_kub3').width()/2;

		  		WIDTH_DIFFERENCE = mard_1.width()/2 + kub[i].width()/2;
		  		HEIGHT_DIFFERENCE = mard_1.height()/2 + kub[i].height()/2;
		
			  			  	
			  	MARD_1_HOR_CENTER = mard_1.position().left + mard_1.width()/2;
			  	MARD_1_VER_CENTER = mard_1.position().top + mard_1.height();
			  	MARD_1_VER_L_CENTER = mard_1.position().top + mard_1.height()/2;

				


			  	if (Math.abs(MARD_1_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE  &&  
			  		Math.abs(MARD_1_VER_CENTER - STATIC_VER_CENTER) <= 10)
					{
						jumpState = false;
						mard_1.css('top', kub[i].position().top - mard_1.height());
						speedY = 10; 
						break;
					}
					else
					{
						if(jumpState == false)
						{
							speedY = 0;
							jumpState = true;
						}
					}
			
				if (Math.abs(MARD_1_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE  &&  
					Math.abs(MARD_1_VER_L_CENTER - STATIC_VER1_CENTER) <= HEIGHT_DIFFERENCE)
					{	

						if(lastDirection=="right"){
							mard_1.css('left', mard_1.position().left - speedX);
						}
						else if(lastDirection=="left"){
							mard_1.css('left', mard_1.position().left + speedX);
						}
						else if(lastDirection=="top"){
							mard_1.css('top', mard_1.position().top + speedY);
						}
					}
				
				}
				FINISH_HOR_CENTER = finish.position().left + finish.width()/2;
		  		FINISH_VER_CENTER = finish.position().top + finish.height()/2;

			  	WIDTH_DIFFERENCE_FINISH = mard_1.width()/2 + finish.width()/2;
		  		HEIGHT_DIFFERENCE_FINISH = mard_1.height()/2 + finish.height()/2;

			  	if (Math.abs(MARD_1_HOR_CENTER - FINISH_HOR_CENTER)<= WIDTH_DIFFERENCE_FINISH &&
			  		Math.abs(MARD_1_VER_CENTER - FINISH_VER_CENTER)<= HEIGHT_DIFFERENCE_FINISH)
			  	{
			  		div_mejtex.empty();
			  		kub = new Matrix_1(window['level' +(level+1)]).alllevel1;
			  		kub2 = new Matrix_1(window['level' +(level+1)]).alllevel2;
			  		level++;
			  		finish.appendTo(div_mejtex);
			  		mard_1 = $('<img style ="position: absolute; top: 150px; left: 34px; width: 20px; height: 29px;"/>')
					 .attr('id','mard_1').attr('src','nkarner/mard1.png').appendTo(div_mejtex);
			  	}

			  	for (var i in kub2)
		  		{

		  		STATIC_HOR2_CENTER = kub2[i].position().left + kub2[i].width()/2;
		  		STATIC_VER2_CENTER = kub2[i].position().top+kub2[i].height()/2;
				WIDTH_DIFFERENCE1 = mard_1.width()/2 + kub2[i].width()/2;
				HEIGHT_DIFFERENCE1 = mard_1.height()/2 + kub2[i].height()/2;

				  if (Math.abs(MARD_1_HOR_CENTER - STATIC_HOR2_CENTER) <= WIDTH_DIFFERENCE1  &&  
			  		Math.abs(MARD_1_VER_CENTER - STATIC_VER2_CENTER) <= HEIGHT_DIFFERENCE1)
					{			

						$("#mard_1").css
						({
							top:'241px',
							left: '34px'
						})


					}

				}
			}
		  
			var x=0;
		var counter=1;
		var counter1=3;
		function move() {
		    for (var i in directions) {
		    	x+=40;
		    	if(x%200==0){
		    	counter= counter==1 ? 2:1;
		    	}

		    	
				if(x%200==0){
				counter1=counter1==3 ? 4:3;
				}
		     if (mard_1.position().left > 0 && i == 37) {
		 		mard_1.attr("src","nkarner/mard"+counter1 +".png");
		        mard_1.css("left", mard_1.position().left - speedX  + "px");
		        lastDirection='left';
		      }

		      if (mard_1.position().left < $("#div_mejtex").width() - mard_1.width() && i == 39) 
		      {
		 		mard_1.attr("src","nkarner/mard"+counter +".png");
		        mard_1.css("left", mard_1.position().left + speedX + "px");
		        lastDirection='right';
		      }


		      if (mard_1.position().top > 0 && i == 38 && jumpState==false) 
		      {
		      	jumpState = true;
		        mard_1.css("top", mard_1.position().top - 9); 
   		        lastDirection='top';

		      }

		    }
		    jump();
		    checkCollision();
		  }
		clearInterval(window["interval"]);
		window["interval"] = setInterval(move, 20);
			
		function jump()
		  {

		  	if(jumpState)
		  	{
		  		if(speedY > -9)
		  		{
		  			speedY -= 0.7;
		  		}
		  		mard_1.css('top',mard_1.position().top - speedY);
		  	}
		  }
	}

	// _______________MATRIX_______________________


		function Matrix_1(currLevel)
		{
			this.matrix = currLevel;
			this.alllevel1 =[];
			this.alllevel2=[];
			for (var h = 0; h <   this.matrix.length ; h++)
			{
				for (var w = 0; w <  this.matrix[h].length ; w++) 
				{

					if(this.matrix[h][w] == 1 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

						div_mejtex.append(this.alllevel1[this.alllevel1.length-1]);
					}

					if(this.matrix[h][w] == 2 )
					{
						//this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub1.png)'})
								.attr('class', 'div_kub').appendTo(div_mejtex)
								.css({top:(h*30)+'px', left:(w*30)+"px"})
								//);

					}

					if(this.matrix[h][w] == 3 )
					{
						this.alllevel2.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub2.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 4 )
					{
						this.alllevel2.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '15px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub3.png)'
							}).attr('class', 'div_kub3').appendTo(div_mejtex)
							.css({top:(h*31.9)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 5 )
					{
						// this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '15px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub4.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"});

					}

					if(this.matrix[h][w] == 6 )
					{
						// this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub5.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"});

					}


					if(this.matrix[h][w] == 7 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub6.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}


					if(this.matrix[h][w] == 8 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub7.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 9 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub8.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}


					if(this.matrix[h][w] == 10 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub9.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 100 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '1200px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/tak.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 99 )
					{
						this.alllevel2.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/klor.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 98 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/klor1.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 11 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub11.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 22 )
					{
						// this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub11.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"});

					}

					if(this.matrix[h][w] == 33 )
					{
						this.alllevel2.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub11.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 44 )
					{
						this.alllevel2.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '15px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub44.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*31.9)+'px', left:(w*30)+"px"}));

					}

					if(this.matrix[h][w] == 55 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '15px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub44.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}
						

					if(this.matrix[h][w] == 66 )
					{
						this.alllevel1.push(
							$('<div/>').css({
								position: 'absolute',
								width: '30px',
								height: '30px',
								'background-size': 'cover',
								'background-image': 'url(nkarner/kub11.png)'
							}).attr('class', 'div_kub').appendTo(div_mejtex)
							.css({top:(h*30)+'px', left:(w*30)+"px"}));

					}
						
				}
			}

		}
	}