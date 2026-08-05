getApiCharacterInfo()

async function getApiCharacterInfo() {
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books')
        const characters = await response.json()
        afficherData(characters)
    } catch (error) {
        console.error('Erreur :', error);
    }
}

function afficherData(donnees) {
    for (let index = 0; index < donnees.length; index++) {
        let div = document.createElement("div");
        div.classList = "bookCarte";
        div.innerHTML = `<h2 class="name">${donnees[index].title}</h2>
                        <p class="description">${donnees[index].description}</p>
                        <img class="bookCover" src="${donnees[index].image || "https://cdn.iconscout.com/icon/free/png-512/free-help-icon-svg-download-png-2202931.png?f=webp&w=512"}" alt="">
        `

        document.body.appendChild(div)
    }
}

// i wanna make a for each and add the book covers :) gl me