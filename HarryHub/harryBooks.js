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
        div.innerHTML = `<h2 class="bookName">${donnees[index].title}</h2>
                        <p class="bookDescription">${donnees[index].description}</p>
                        <img class="bookCover" src="${bookImages[index]}" alt="">
        `

        document.body.appendChild(div)
    }
}

const bookImages = [
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-1.jpg&w=1320&q=75",
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-2.jpg&w=1320&q=75",
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-3.jpg&w=1320&q=75",
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-4.jpg&w=1320&q=75",
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-5.jpg&w=1320&q=75",
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-6.jpg&w=1320&q=75",
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-7.jpg&w=1320&q=75",
    "https://www.harrypotter.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-8.jpg&w=1320&q=75"
];

// books.forEach(function(books, index) {
//     let div = document.createElement("div");
//     div.classList = "bookCarte";

//     div.innerHTML = ` <img class="bookCover" src="${bookImages[index]}" alt=""> `

//     document.getElementById("bookGrid").appendChild(div)
// })

// i wanna make a for each and add the book covers :) gl me