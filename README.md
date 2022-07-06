# TARDIS-Pedia!
TardisPedia uses my own API to randomly generate your new faveorite Doctor iteration!

**Link to project:** https://tardispedia.netlify.app/



## How It's Made:

**Tech used:** HTML, CSS, JavaScript, MongoDB, Express.js, Node.js

First, I created the client side site. I originally had listed out all of the doctors in order and the idea was for a click on the button below each doctor would make a call to my API for that specific Doctor. However, I thought it would be more interesting to have the Doctor's info randomly generated - because why just manually pick your favorite Doctor when you can have math do it for you? 

I gathered data from various Doctor Who wiki's and sources (on their companions, years active, any alternate actors, first episode they appeared in, etc) and compiled it all together into my MongoDB collection. From there, I connected the database to the backend of my API that's hosted on Heroku. I let my client back end randomly generate a number on the "Random Doctor" button click and from there it picks a new Doctor!

## Optimizations

* Add in a randomization button for the quotes and episode clips of the specific Doctors

## Lessons Learned:

I learned that sometimes even tasks that seem like they should be a simple fix can require a lot of research and implementation to be solved and that the same is true vice versa.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Federation Field Guide To Aliens:** https://github.com/raeplusplus/star-trek-app

**Yggdrasil:** https://github.com/raeplusplus/Yggdrasil
