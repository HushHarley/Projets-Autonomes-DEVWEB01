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
                        <img class="bookCover" src="${bookImages[index]}" alt="">
        `

        document.body.appendChild(div)
    }
}

const bookImages = [
    "https://th.bing.com/th/id/OIP.v6D32I_4azNBbv3KinpQKwHaEK?w=291&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/R.ce18cc9989db0420fe42b8a09d0dd0a9?rik=%2fPD%2ftghxrx0jDQ&pid=ImgRaw&r=0",
    "https://m.media-amazon.com/images/S/pv-target-images/9cd51c348b06fc970bcd7c55dc7920aef2a5b43c8f5e0050d39b4d3fc54bdb7e.jpg",
    "https://th.bing.com/th/id/OIP.XWAvTNEJRBDRxrAjM9YjBAHaIo?w=169&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.hkwOw2jGbAQudD-wtB3zhQHaJ4?w=127&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.hoOcDxiXBmR3RYDlaKOfHQHaJ4?w=201&h=268&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://www.themoviedb.org/t/p/original/bw2AAFfOa4p0IKamvprZUwDXv1h.jpg",
    "https://th.bing.com/th/id/OIP.2Py5OesvlYyX05WCOKY4iAHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
];

// books.forEach(function(books, index) {
//     let div = document.createElement("div");
//     div.classList = "bookCarte";

//     div.innerHTML = ` <img class="bookCover" src="${bookImages[index]}" alt=""> `

//     document.getElementById("bookGrid").appendChild(div)
// })

// i wanna make a for each and add the book covers :) gl me