

document.querySelector('#randomDoctorButton').addEventListener('click', apiRequest)
async function apiRequest(){
    const doctorName = 
}














document.querySelector('#randomEpisodeButton').addEventListener('click', randomChosenDoctor)
function randomChosenDoctor(theDoctor[doctorName]){
    console.log('hey, does this work, random doc?')
    let preBuffer = [];
    for(let i = 0; i < theDoctor[doctorName]; i++){
        preBuffer[i] = newDoctor();
        preBuffer[i].docName = theDoctor[i].docName;
        preBuffer[i].mainActor = theDoctor[i].mainActor;
        preBuffer[i].altActor = theDoctor[i].altActor;
        preBuffer[i].yearsActive = theDoctor[i].yearsActive;
        preBuffer[i].firstAppearance = theDoctor[i].firstAppearance;
        preBuffer[i].companions = theDoctor[i].companions;
    }
    let newDoctor = getRandomInt(0, preBuffer.length - 1);
    let nd = newDoctor.length;
    let doctorName = document.getElementById('doctorName')
    // let dn = doctorName.length;
    let doctorImage = document.getElementById('doctorImage')
    // let di = doctorImage.length;
    let mainActor = document.getElementById('mainActor')
    // let ma = mainActor.length;
    let altActor = document.getElementById('altActor')
    // let aa = altActor.length;
    let firstAppearance = document.getElementById('firstAppearance')
    // let fa = firstAppearance.length;
    let yearsActive = document.getElementById('yearsActive')
    // let ya = yearsActive.length;
    for(let p = 0; p < nd; p++){
        doctorName[0].parentNode.removeChild(doctorName[0]);
        doctorImage[0].parentNode.removeChild(doctorImage[0]);
        mainActor[0].parentNode.removeChild(mainActor[0]);
        altActor[0].parentNode.removeChild(altActor[0]);
        firstAppearance[0].parentNode.removeChild(firstAppearance[0]);
        yearsActive[0].parentNode.removeChild(yearsActive[0]);
    }
    
    document.body.appendChild(newDoctor)
}



function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[randomNum];
    } 

document.querySelector('#randomEpisodeButton').addEventListener('click', randomChosenDocEpisode)
function randomChosenDocEpisode(){
    let preBuffer = [];
    let doctorName = randomChosenDoctor();
    for(let i = 0; i < doctorName.episodes.length; i++){
        preBuffer[i] = newEpisode();
        preBuffer[i].episodeName = doctorName.episodes[i].episodeName;
        preBuffer[i].episodeEmbed = doctorName.episodes[i].episodeEmbed;
    }
    let newEpisode = getRandomInt(0, preBuffer.length - 1);
    let episodeClip = document.getElementById('randomClip')
    let e = episodeClip.length;
    for(let p = 0; p < e; p++){
        episodeClip[0].parentNode.removeChild(episodeClip[0]);
    }
    document.body.appendChild(newEpisode)
};
document.querySelector('#randomQuoteButton').addEventListener('click', randomChosenDocQuote)
function randomChosenDocQuote(){
    let preBuffer = [];
    let doctorName = randomChosenDoctor();
    for(let i = 0; i < doctorName.quotes.length; i++){
        preBuffer[i] = newQuote();
        preBuffer[i].quoteText = doctorName.quotes[i].quoteText;
        preBuffer[i].quoteEpisode = doctorName.quotes[i].quoteEpisode;
    }
    let newQuote = getRandomInt(0, preBuffer.length - 1);
    let quoteText = document.getElementById('randomClip')
    let q = quoteText.length;
    for(let p = 0; p < q; p++){
        episodeClip[0].parentNode.removeChild(episodeClip[0]);
    }
    document.body.appendChild(newQuote)
};