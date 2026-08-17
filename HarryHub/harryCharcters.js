getApiCharacterInfo()

async function getApiCharacterInfo() {
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/characters')
        const characters = await response.json()
        afficherData(characters)
    } catch (error) {
        console.error('Erreur :', error);
    }
}

function afficherData(donnees) {
    for (let index = 0; index < donnees.length; index++) {
        let div = document.createElement("div");
        div.classList = "characterCarte";
        div.innerHTML = `
        <p class="children">${donnees[index].children}</p>
        <p class="hogwartsHouse">${donnees[index].hogwartsHouse}</p>
        <p class="nickname">${donnees[index].nickname}</p>
        <h2>${donnees[index].fullName}</h2>
        <img src="${donnees[index].image || "https://cdn.iconscout.com/icon/free/png-512/free-help-icon-svg-download-png-2202931.png?f=webp&w=512"}" alt="">
        `

        document.getElementById("characterGrid").appendChild(div)
    }
}

const soundVolume = document.querySelector(".audioPlayer");
soundVolume.volume = 0.1;

// "id": "ca3827f0-375a-4891-aaa5-f5e8a5bad225",
//     "name": "Minerva McGonagall",
//     "alternate_names": [],
//     "species": "human",
//     "gender": "female",
//     "house": "Gryffindor",
//     "dateOfBirth": "04-10-1925",
//     "yearOfBirth": 1925,
//     "wizard": true,
//     "ancestry": "half-blood",
//     "eyeColour": "",
//     "hairColour": "black",
//     "wand": {
//       "wood": "fir",
//       "core": "dragon heartstring",
//       "length": 9.5