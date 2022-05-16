
// Catalogopolis API

//random doctor button
//event listener, on click
//take to a random page


//on doctor page, random episode button
//first, find which doctor it is

//lets make an object of the Doctor!

let TheDoctor{
    this.docName = docName, 
    this.mainActor = mainActor,
    this.altActor = altActor,
    this.yearsActive = yearsActive,
    this.firstApperance = firstApperance,
    
    randomChosenDoc(){
        let randomDoc = Math.random();
        return randomDoc;
    };
    randomChosenDocEpisode(){
        let randomEpisode = Math.random(); //just need 3 numbers/episodes, so 0 - 2
        return randomEpisode;
    };
    randomChosenDocQuote(){
        let randomQuote = Math.random();//just need 3 numbers/episodes, so 0 - 2
        return randomQuote;
    };
}
//probably should do this for seperate doctors?
if(this.randomEpisode === "The First Doctor"){
    if(randomEpisode === 0){
        //then, append this specific youtube embed to the html video source tag:
        //This Episode is: The Dalek Invasion of Earth
    }else if(randomEpisode === 1){
        //then, append this specific youtube embed to the html video source tag:
    }else if(randomEpisode === 2){
        //then, append this specific youtube embed to the html video source tag:
    }
}



// Doctor Who Quotes API