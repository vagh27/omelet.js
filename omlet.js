var omlet = {
	scramble : function(text,slct,min,max,cadence,characters){
		//defaults
		var string = text || "The world is everything that is the case",
			rMax = min || 20,
			rMin = max || 40,
			selector = slct || 'body',
			charCount = cadence || 100,
			sneakyBR = 0,
			sneakyChars = characters || "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ!@#$%^&*(){}?:"
			html = "",
			strArray = string.split(''); //toss the string into an array

			console.log(rMax)

		//loop through array
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
	unscramble : function(slct){
		var a = "", selector = slct || 'body';
		$(selector + ' span[hidden]').each(function(){ a += $(this).text(); });
		$(selector).html(a);
		//although the logistics behind actually unscrambling an omlet are quite a bit foggier
	},
	rchar : function(sneakyChars) {
		sneakyChars = sneakyChars.replace(/ /g,'');
	    return sneakyChars.substr( Math.floor(Math.random() * sneakyChars.length), 1);
	},
	rnum : function(min,max){ 
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}