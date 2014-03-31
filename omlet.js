var omlet = {
	scramble : function(text,slct,min,max,cadence,characters){
		//set values/defaults
		var string = text || "The world is everything that is the case",
			rMax = min || 20,
			rMin = max || 40,
			selector = slct || 'body',
			charCount = cadence || 100,
			sneakyChars = characters || "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ!@#$%^&*(){}?:"
			sneakyBR = 0,
			html = "",
			strArray = string.split(''); //toss the message into an array

		//loop through message array
		for (var i = 0; i < strArray.length; i++) {

			//add secret letter to html
		    html += '<span hidden>'+strArray[i]+'</span>';

		    //create trickster spans and add to html
		    for (var a = 0; a < omlet.rnum(rMin,rMax); a++) {
		    	html += '<span>'+omlet.rchar(sneakyChars)+'</span>';
		    	sneakyBR++;
		    	if (sneakyBR % charCount === 0) html+="<br />";
		    }
		}

		//add html to selector
		$(selector).html(html);					
	},
	unscramble : { 
		simple : function(slct){
			var a = "", selector = slct || 'body';
			$(selector + ' span[hidden]').each(function(){ a += $(this).text(); });
			$(selector).html(a);
			//although the logistics behind actually unscrambling an omlet are quite a bit foggier
		},
		superfluous : function(slct,spd,cadence,yx){
			var positionContainer = $(slct).position(), animateOrder = yx || false;
			$('span:not([hidden])').addClass('hide')
			$('span[hidden]').removeAttr('hidden').addClass('show');
			$('span.show').each(function(i){
				var spanIndex = $(this).index(),
					position = $(this).position(),
					width = 8,
					height = 15,
					speed = spd || 1500,
					charCount = cadence || 100,

					//y position related math
					whereitshouldbeY = (Math.floor(i/charCount)+1)*height,
					positionY = (position.top - whereitshouldbeY)*-1,

					//x position related stuff
					whereitshouldbeX = i*width,
					positionX = whereitshouldbeX - position.left + positionContainer.left - ( Math.floor(i/charCount) * charCount * width);

				//crudely animate
				if(animateOrder) $(this).animate({top:positionY, left:positionX }, speed );	
				else {
					$(this).animate({top:positionY }, speed, function(){
						$(this).animate({left:positionX }, speed );
					});
				}
			});
		}
	},
	rchar : function(sneakyChars) {
		sneakyChars = sneakyChars.replace(/ /g,'');
	    return sneakyChars.substr( Math.floor(Math.random() * sneakyChars.length), 1);
	},
	rnum : function(min,max){ 
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}