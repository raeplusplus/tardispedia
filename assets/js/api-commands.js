
// Catalogopolis API

//random doctor button
//event listener, on click
//take to a random page


//on doctor page, random episode button
//first, find which doctor it is

//lets make an object of the Doctor!

class TheDoctor{
    constructor(docName, mainActor, altActor, yearsActive, firstApperance, companions){
        this.docName = docName;
        this.mainActor = mainActor;
        this.altActor = altActor;
        this.yearsActive = yearsActive;
        this.firstApperance = firstApperance;
        this.companions = companions;
        // this.episodeNames = episodeNames, embedLink;
        // this.docQuotes = docQuotes;
    }
    randomChosenDocEpisode(){
        let randomEpisode = Math.floor(Math.random() * 2); //just need 3 numbers/episodes, so 0 - 2
        return this.episodeNames[randomEpisode];
    };
    randomChosenDocQuote(){
        let randomQuote = Math.floor(Math.random() * 2);//just need 3 numbers/episodes, so 0 - 2
        return this.docQuotes[randomQuote];
    };
}


// randomEpiosode

// // event listen

// firstDoc  - added property array 
// pick episode - firstDoc.arrayName[firstDoc.randomChosenDocEpisode()]

// function{
//     firstDoc.randomChosenDocEpisode() === 2; 

// }




// [[episode1, link]]

// firstDoc.randomChosenDocEpisode()


let firstDoc = new TheDoctor("The First Doctor", "William Hartnell","?","1963-1966","An Unearthly Child", "Badger, Butch, Susan Foreman, Gillian Who, John Who", );
// let firstDocEpisodes = [[]]
// 1st Doc's Episodes:
// 1. An Unearthly Child
// 2. The Dalek Invasion Of Earth
// 3. Galaxy 4
let secondDoc = new TheDoctor("The Second Doctor", "Patrick Troughton", "Peter Diamond, Tom Laird", "1966-1969", "The Tenth Planet", "Barnabus, Gillian Who, John Who, Marmaduke, Serena");
// 2nd Doc's Episodes:
// 1. Tomb of the Cybermen
// 2. The Faceless Ones
// 3.
let thirdDoc = new TheDoctor("The Third Doctor", "Jon Pertwee", "Bill Burridge, Michael Pinder", "1970-1974", "Spearhead from Space");
// 3rd Doc's Episodes:
// 1. Spearhead from Space
// 2. 
// 3.
let fourthDoc = new TheDoctor("The Fourth Doctor", "Tom Baker", "Terry Walsh, Tim Bentinck", "1974-1981", "Planet of the Spiders", "Adric, Andric, Ivan Asimoff, Captain, The TARDIS, Figment, K9(Marks I, II & III), Milena, Morris, Nyssa, Putta Pattershaun 5, Romana (I & II), Vesuvius");
// 4th Doc's Episodes:
// 1. Genesis of the Daleks
// 2. 
// 3.
let fifthDoc = new TheDoctor("The Fifth Doctor", "Peter Davison", "null", "1981-1984", "Logopolis", "Abby, Adric, Alayna, Antranak, Brooke, Gravis, Kamelion, Lady of the MAnor, Nyssa, Melody Pond, River Song, Vislor Turlough, Iris Wildthyme, Zara");
// 5th Doc's Episodes:
// 1. Earthshock
// 2. 
// 3.
let sixthDoc = new TheDoctor("The Sixth Doctor", "Collin Baker", "Sylvester McCoy, Chris Laurens", "1984-1986", "The Caves of Androzani");
// 6th Doc's Episodes:
// 1. The Two Doctors
// 2. 
// 3.
let seventhDoc = new TheDoctor("The Seventh Doctor", "Sylvester McCoy", "Matthew Sweet", "1987-1996", "Time and the Rani");
// 7th Doc's Episodes:
// 1. Remembrance of the Daleks
// 2. 
// 3.
let eighthDoc = new TheDoctor("The Eighth Doctor", "Paul McGann", "null", "1996, 2013", "Timewyrm: Revelation");
// 8th Doc's Episodes:
// 1. Night of the Doctor
// 2. Doctor Who the Movie
// 3. Timewyrm: Revelation
let warDoc = new TheDoctor("The War Doctor", "John Hurt", "Paul McGann", "2013","The Name of the Doctor");
// War Doc's Episodes:
// Day of the Doctor
let ninthDoc = new TheDoctor("The Ninth Doctor", "Christopher Eccleston", "null", "2005", "The Tomorrow Windows");
// 9th Doc's Episodes:
// 1. The Empty Child
// 2. The Doctor Dances
// 3. The End Of Earth??
let tenthDoc = new TheDoctor("The Tenth Doctor", "David Tennant", "Colum Regan", "2005-2010", "The Parting of the Ways");
// 10th Doc's Episodes:
// 1. Midnight
// 2. Blink
// 3.
let eleventhDoc = new TheDoctor("The Eleventh Doctor", "Matt Smith", "Daniel Anthony, Andy Jones", "2010-2013", "The End of Time");
// 11th Doc's Episodes:
// 1. Vincent and the Doctor
// 2. 
// 3.
let twelfthDoc = new TheDoctor("The Twelfth Doctor", "Peter Capaldi", "Paul Kasey", "2014-2018", "The Day of the Doctor");
// 12th Doc's Episodes:
// 1. Heaven Sent
// 2. 
// 3.
let thirteenthDoc = new TheDoctor("The Thirteenth Doctor", "Jodie Whittaker", "null", "2018-2022", "The Death List");
// 13th Doc's Episodes:
// 1. 
// 2. 
// 3.
let fourteenthDoc = new TheDoctor("The Fourteenth Doctor", "Ncuti Gatwa", "null", "2023 - ???", "60th Anniversary");
// 1no episodes, yet - maybe an announcement video?
let ruthDoc = new TheDoctor("The Fugative Doctor", "Jo Martin", "null", "2021", "Fugitive of the Judoon");
// 1st Doc's Episodes:
// 1. Fugitive of the Judoon


// function randomChosenDoc(){
//     let randomDocNum = Math.random();//I need 14 numbers, so 0 - 13
//     let randomDoc
//     if(randomDocNum === 0){
//         randomDoc = firstDoc;
//     }else if(randomDocNum === 1){
//         randomDoc = secondDoc;
//     }else if(randomDocNum === 2){
//         randomDoc = thirdDoc;
//     }else if(randomDocNum === 3){
//         randomDoc = fourthDoc;
//     }else if(randomDocNum === 4){
//         randomDoc = fifthDoc;
//     }else if(randomDocNum === 5){
//         randomDoc = sixthDoc;
//     }else if(randomDocNum === 6){
//         randomDoc = seventhDoc;
//     }else if(randomDocNum === 7){
//         randomDoc = eighthDoc;
//     }else if(randomDocNum === 8){
//         randomDoc = warDoc;
//     }else if(randomDocNum === 9){
//         randomDoc = ninthDoc;
//     }else if(randomDocNum === 10){
//         randomDoc = tenthDoc;
//     }else if(randomDocNum === 11){
//         randomDoc = eleventhDoc;
//     }else if(randomDocNum === 12){
//         randomDoc = twelfthDoc;
//     }else if(randomDocNum === 13){
//         randomDoc = thirteenthDoc;
//     }
// }
//randomize the first doctor's episodes:
// if(firstDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(firstDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(firstDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
//randomize the second doctor's episodes:
// if(secondDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(secondDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(secondDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the third doctor's episodes:
// if(thirdDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(thirdDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(thirdDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the fourth doctor's episodes:
// if(fourthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(fourthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(fourthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the fifth doctor's episodes:
// if(fifthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(fifthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(fifthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the sixth doctor's episodes:
// if(sixthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(sixthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(sixthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the seventh doctor's episodes:
// if(seventhDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(seventhDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(seventhDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the eighth doctor's episodes:
// if(eighthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(eighthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(eighthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the war doctor's episodes:
// if(warDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(warDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(warDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the ninth doctor's episodes:
// if(ninthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(ninthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(ninthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the tenth doctor's episodes:
// if(tenthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(tenthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(tenthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the eleventh doctor's episodes:
// if(eleventhDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(eleventhDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(eleventhDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the twelfth doctor's episodes:
// if(twelfthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(twelfthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(twelfthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }
// //randomize the thirteenth doctor's episodes:
// if(thirteenthDoc.randomChosenEpisode() === 0){
//     //then, append this specific youtube embed to the html video source tag:
//     //This Episode is: The Dalek Invasion of Earth
// }else if(thirteenthDoc.randomChosenEpisode() === 1){
//         //then, append this specific youtube embed to the html video source tag:
// }else if(thirteenthDoc.randomChosenEpisode() === 2){
//         //then, append this specific youtube embed to the html video source tag:
// }








// Doctor Who Quotes API