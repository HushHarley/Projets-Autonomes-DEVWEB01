getApiCharacterInfo()

async function getApiCharacterInfo() {
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
        const characters = await response.json()
        afficherData(characters)
    } catch (error) {
        console.error('Erreur :', error);
    }
}

function afficherData(donnees) {
    for (let index = 0; index < donnees.length; index++) {
        let div = document.createElement("div");
        div.classList = "spellCarte";
        div.innerHTML = `<h2 class="use">${donnees[index].use}</h2>
                        <img class="wand"src="${donnees[index].image || "https://cdn.iconscout.com/icon/premium/png-512-thumb/elder-wand-icon-svg-download-png-2331176.png?f=webp&w=512"}" alt="">
                        
        `

        document.body.appendChild(div)
    }
}