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
        div.innerHTML = `<h2>${donnees[index].fullName}</h2>
                        <p class="nickname">${donnees[index].nickname}</p>
                        <p class="hogwartsHouse">${donnees[index].hogwartsHouse || "Unknown gender"}</p>
                        <p class="children">${donnees[index].children || "Date of birth unknown"}</p>
                        <img src="${donnees[index].image || "https://cdn.iconscout.com/icon/free/png-512/free-help-icon-svg-download-png-2202931.png?f=webp&w=512"}" alt="">
        `

        document.body.appendChild(div)
    }
}


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