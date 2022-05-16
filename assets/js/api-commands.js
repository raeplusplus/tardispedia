
// Catalogopolis API

//random doctor button
//event listener, on click
//take to a random page


//on doctor page, random episode button
//first, find which doctor it is

//lets make an object of the Doctor!

class TheDoctor{
    constructor(docName, mainActor, altActor, yearsActive, firstApperance){
        this.docName = docName;
        this.mainActor = mainActor;
        this.altActor = altActor;
        this.yearsActive = yearsActive;
        this.firstApperance = firstApperance;
    }
    randomChosenDoc(){
        let randomDoc = Math.random();//I need 14 numbers, so 0 - 13
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

let firstDoc = new TheDoctor("The First Doctor", "William Hartnell","?","1963-1966","An Unearthly Child")
let secondDoc = new TheDoctor("The Second Doctor", "Patrick Troughton", "Peter Diamond, Tom Laird", "1966-1969", "The Tenth Planet")
let thirdDoc
let fourthDoc
let fifthDoc
let sixthDoc
let seventhDoc
let eighthDoc
let ninthDoc
let tenthDoc
let eleventhDoc
let twelfthDoc
let thirteenthDoc
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