const url = "http://thecatapi.com/api/images/get?format=src&type=gif"

const section = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", getRandomCats);

randomCatGif = (json) => {
    let photo = json[0].url;
    section.classList.add('cats');

    let image = document.Element('img');
    image.src = photo;
    image.classList.add('random_cats');
    image.alt = photo;
    section.appendChild(image);
};

async function getRandomCats() {
    section.innerHTML = ""
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log('JSON:', json);
        return randomCatGif(json)
    } catch {
        // console.log("This is an error")
        // console.log(e);
    }
};