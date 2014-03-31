#omlet.js
##scrambles a message and then unscrambles it in a meaningful and satisfying manner

##demo
http://omlet.johnvaghi.com

##basic implemenation
###include omlet.js###

###to scramble, run:
```javascript
omlet.scramble('my string to scramble');
```

###to unscramble, run:
```javascript
omlet.unscramble();
```
###to unscramble superfluously, run:
```javascript
omlet.unscramble.superfluous(selector,$scope.set_speed,$scope.set_cadence);
```

##function parameters
```javascript
omlet.scramble(text_to_scramble,selector,min_span_range,max_span_range,character_cadence,character_set);
omlet.unscramble(selector);
omlet.unscramble.superfluous(selector,animate_speed,character_cadence); 
```
###text_to_scramble (string)
####default: 'The world is everything that is the case'
the text that will be scrambled (i.e. wrapped in a span tag with a hidden attr)

###selector (string)
####default: 'body'
container DOM element that the scrambled content will be added to (will replace any existing content within container)

###min_span_range (number)
####default: 20
the min value in the number range used to randomly determine how many dummy letters will be generated between each letter in the actual message

###max_span_range (number)
####default: 40
the max value in the number range used to randomly determine how many dummy letters will be generated between each letter in the actual message

###character_cadence (number)
####default: 100
the number of letters per line

###character_set (string)
####default:  '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ!@#$%^&*(){}?:'
the character set used to randomly generate the scrambled text (spaces will be removed)

###animate_speed (number)
####default:  1500
the speed at which the characters will rearrange around at

##dependencies
###function dependencies
- jQuery

###demo dependencies
- jQuery
- angular

##potential todos
- option to change letter tags (don't see much value)
- option to append scrambled content (don't see much value)
- cooler way to decode text (channel inner PDK)
- changing atrributes on message (i.e. actually having the message letters exist within the scrambled content (e.g. adding a class). this would require a conditional on where the breaks are added)
- create something that might be decoded by someone without reading the source. for instance, if we now have the message letters in the scramble, have the distance between message letters follow some pattern (e.g. prime numbers, fibonacci sequence (max of like, 16 letters, though), etc)
- wingding font option?
