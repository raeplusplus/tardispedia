
function getRandomInt(min,max) 
{//  return Math.floor(Math.random() * (max - min + 1)) + min;
randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNum;
} 

document.getElementById('randomDoctorButton').addEventListener('click', apiRequest)
async function apiRequest(){
    // let randomDoc = getRandomInt(0, 12).value
    const doctorNum = getRandomInt(0, 12)
    console.log(doctorNum)
    try{
        const response = await fetch(`https://tardispedia-api.herokuapp.com/api/${doctorNum}`)
        const data = await response.json()
        console.log(doctorNum)
        console.log(data)
        document.getElementById('doctorName').innerText = data.name
        document.getElementById('mainActor').innerText = data.mainActor
        document.getElementById('altActor').innerText = data.altActor
        document.getElementById('firstAppearance').innerText = data.firstAppearance
        document.getElementById('yearsActive').innerText = data.yearsActive
        document.getElementById('quote').innerText = data.quote
        document.getElementById('doctorImage').src = data.image
    }catch(error){
        console.log(error)
    }
}


