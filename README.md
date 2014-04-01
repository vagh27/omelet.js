#omelet.js
####scrambles a message and then unscrambles it in a meaningful and satisfying manner

##demo
http://omelet.johnvaghi.com

##basic implemenation
- include **omelet.js**
- to scramble, run:
```javascript
omelet.scramble('my string to scramble');
```
- to unscramble, run:
```javascript
omelet.unscramble.simple();
```
- to unscramble superfluously, run:
```javascript
omelet.unscramble.superfluous();
```

##function parameters
```javascript
omelet.scramble(text_to_scramble,selector,min_span_range,max_span_range,character_cadence,character_set,embed_characters);
omelet.unscramble.simple(selector,embed_characters);
omelet.unscramble.superfluous(selector,animate_speed,character_cadence,animate_order,embed_characters); 
```
**text_to_scramble (string)**  
the text that will be scrambled (i.e. wrapped in a span tag with a hidden attr)  
*default: 'The world is everything that is the case'*

**selector (string)**  
container DOM element that the scrambled content will be added to (will replace any existing content within container)  
*default: 'body'*

**min_span_range (number)**  
the min value in the number range used to randomly determine how many dummy letters will be generated between each letter in the actual message  
*default: 20*

**max_span_range (number)**  
the max value in the number range used to randomly determine how many dummy letters will be generated between each letter in the actual message  
*default: 40*

**character_cadence (number)**  
the number of letters per line  
*default: 100*

**character_set (string)**  
the character set used to randomly generate the scrambled text (spaces will be removed)  
*default:  '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ!@#$%^&*(){}?:'*

**animate_speed (number)**  
the speed at which the characters will rearrange at  
*default:  1500*

**animate_order (bool)**  
if false, the X animation will happen once the Y animation has completed  
if true, the Y and X animation will happen at the same time (this works better with not too much text)  
*default:  false*

**embed_characters (bool)**  
if false, the message's characters will not appear in the scrambed output
if true, the message's characters will appear in the scrambed output wrapped in a span tag with a class of *embed*
*default:  false*

##dependencies
####function dependencies
- jQuery

####demo dependencies
- jQuery
- angular

##potential todos
- option to change letter tags (don't see much value)
- option to append scrambled content (don't see much value)
- ~~cooler way to decode text (channel inner PDK)~~ (must optimize)
- ~~changing atrributes on message (i.e. actually having the message letters exist within the scrambled content (e.g. adding a class). this would require a conditional on where the breaks are added)~~
- create something that might be decoded by someone without reading the source. for instance, if we now have the message letters in the scramble, have the distance between message letters follow some pattern (e.g. prime numbers, fibonacci sequence (max of like, 16 letters, though), etc)
- wingding font option?
- url params
