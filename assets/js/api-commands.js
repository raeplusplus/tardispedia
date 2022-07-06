
document.querySelector('#randomDoctorButton').addEventListener('click', apiRequest)
async function apiRequest(){
    const doctorName = randomChosenDoctor().value
    try{
        const response = await fetch(`https://tardispedia-api.herokuapp.com/api/${doctorName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('doctorName').innerText = data.name
        document.getElementById('mainActor').innerText = data.mainActor
        document.getElementById('altActor').innerText = data.altActor
        document.getElementById('firstAppearance').innerText = data.firstAppearance
        document.getElementById('yearsActive').innerText = data.yearsActive
        document.getElementById('quote').innerText = data.quote
        document.getElementById('doctorImage').src = data.image
    }
}























// document.querySelector('#randomEpisodeButton').addEventListener('click', randomChosenDoctor)
function randomChosenDoctor(){
    console.log('hey, does this work, random doc?')
    let docRegen = [];
    for(let i = 0; i < theDoctor[doctorName]; i++){
        docRegen[i] = newDoctor();
        docRegen[i].docName = theDoctor[i].docName;
       
        document.querySelector('doctorName').innerText = preBuffer[i].docName
        docRegen[i].mainActor = theDoctor[i].mainActor;
        docRegen[i].altActor = theDoctor[i].altActor;
        docRegen[i].yearsActive = theDoctor[i].yearsActive;
        docRegen[i].firstAppearance = theDoctor[i].firstAppearance;
        docRegen[i].companions = theDoctor[i].companions;
    }
    let newDoctor = getRandomInt(0, docRegen.length - 1);
    let nd = newDoctor.length;
    let doctorName = document.getElementById('doctorName')
    doctorName.appendChild(docRegen[i].docName)
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