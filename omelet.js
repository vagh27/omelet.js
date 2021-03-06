var omelet = {
	scramble : function(text,slct,min,max,cadence,characters,embed){
		//set values/defaults
		var string = text || "The world is everything that is the case",
			rMax = min || 20,
			rMin = max || 40,
			selector = slct || 'body',
			charCount = cadence || 100,
			sneakyChars = characters || "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ!@#$%^&*(){}?:",
			embedChars = embed || false,
			sneakyBR = 0,
			html = "",
			strArray = string.split(''), //toss the message into an array
			embedAttr = omelet.embeded(embed);

		//loop through message array
		for (var i = 0; i < strArray.length; i++) {

			//add secret letter to html
		    html += '<span '+embedAttr+'>'+strArray[i]+'</span>';
		    
			if(embedChars) { 
				sneakyBR++;
		    	if (sneakyBR % charCount === 0) html+="<br />";
		    }

		    //create trickster spans and add to html
		    for (var a = 0; a < omelet.rnum(rMin,rMax); a++) {
		    	html += '<span>'+omelet.rchar(sneakyChars)+'</span>';
		    	sneakyBR++;
		    	if (sneakyBR % charCount === 0) html+="<br />";
		    }

		    
		}

		//add html to selector
		$(selector).html(html);					
	},
	unscramble : { 
		simple : function(slct,embed){
			var a = "", 
				selector = slct || 'body',
				embedAttr = omelet.embeded(embed);
			$(selector + ' span['+embedAttr+']').each(function(){ a += $(this).text(); });
			$(selector).html(a);
			//although the logistics behind actually unscrambling an omelet are quite a bit foggier
		},
		superfluous : function(slct,spd,cadence,yx,embed){
			var positionContainer = $(slct).position(), 
				animateOrder = yx || false,
				embedAttr = omelet.embeded(embed);
			$('span:not(['+embedAttr+'])').addClass('hide')
			$('span['+embedAttr+']').removeAttr('hidden').addClass('show');
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
	embeded : function(embed){ return embed ? 'class=embed' : 'hidden' },
	rchar : function(sneakyChars) {
		sneakyChars = sneakyChars.replace(/ /g,'');
	    return sneakyChars.substr( Math.floor(Math.random() * sneakyChars.length), 1);
	},
	rnum : function(min,max){ 
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}