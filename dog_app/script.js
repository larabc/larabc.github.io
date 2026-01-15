const breedsUrl = "https://dog.ceo/api/breeds/list/all";
const select = document.getElementById("selectBreed");

document.addEventListener('DOMContentLoaded', () => {
    loadBreeds();
    showRandomImage();
});

function loadBreeds() {
    fetch(breedsUrl)
        .then((response) => response.json())
        .then((data) => {
            const breeds = Object.keys(data.message);

            breeds.forEach((breed) => {
                const option = document.createElement('option');
                option.value = breed;
                option.textContent = breed;
                select.appendChild(option);
            });
        })
        .catch((error) => console.error("There has been an error:", error));
}


select.addEventListener('change', (e) => {
    const selectedBreed = e.target.value;
    showImage(selectedBreed);
});


function showImage(selectedBreed) {

    const breedURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

    fetch(breedURL)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('dog-image').src = data.message;
        })
        .catch((error) => console.error("There has been an error:", error));

}

function showRandomImage() {
    const randomURL = 'https://dog.ceo/api/breeds/image/random';

    fetch(randomURL)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('dog-image').src = data.message;
        })
        .then((error) => console.error("There has been an error:", error));
}