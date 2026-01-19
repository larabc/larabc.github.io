const breedsUrl = "https://dog.ceo/api/breeds/list/all";
const select = document.getElementById("selectBreed");
const loader = document.getElementById("loader");
const dogImage = document.getElementById("dog-image");

document.addEventListener('DOMContentLoaded', () => {
    loadBreeds();
    showRandomImage();
});


/*
//Using AJAX

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

function showImage(selectedBreed) {

    const breedURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

    fetch(breedURL)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('dog-image').src = data.message;
            document.getElementById('dog-image').alt = selectedBreed;
        })
        .catch((error) => console.error("There has been an error:", error));
}

function showRandomImage() {
    const randomURL = 'https://dog.ceo/api/breeds/image/random';

    fetch(randomURL)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('dog-image').src = data.message;
            document.getElementById('dog-image').alt = 'Random Dog';
        })
        .catch((error) => console.error("There has been an error:", error));
}
*/


select.addEventListener('change', (e) => {
    const selectedBreed = e.target.value;
    showImage(selectedBreed);
});


async function loadBreeds() {
    try {
        const response = await fetch(breedsUrl);
        const data = await response.json();
        const breeds = Object.keys(data.message);

        breeds.forEach((breed) => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
            select.appendChild(option);
        });

    } catch (error) {
        console.error("There has been an error:", error);
    }
}


async function showImage(selectedBreed) {
    const breedURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

    try {
        const response = await fetch(breedURL);
        const data = await response.json();


        dogImage.src = data.message;
        dogImage.alt = selectedBreed;

        dogImage.onload = () => {
            hideLoader();
        }

    } catch (error) {
        console.error("There has been an error:", error);
        hideLoader();
    }
}

async function showRandomImage() {

    showLoader();

    const randomURL = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(randomURL);
        const data = await response.json();

        dogImage.src = data.message;
        dogImage.alt = 'Random Dog';
        dogImage.onload = () => {
            hideLoader();
        }

    } catch (error) {
        console.error("There has been an error:", error);
        hideLoader();
    }

}

function showLoader() {
    dogImage.style.display = 'none';
    loader.style.display = 'inline-block';
}

function hideLoader() {
    loader.style.display = 'none';
    dogImage.style.display = '';
}