const breedsUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', () => {
    loadBreeds();
});

function loadBreeds() {
    fetch(breedsUrl)
        .then((response) => response.json())
        .then((data) => {
            const breeds = Object.keys(data.message);

            const select = document.getElementById("selectBreed");

            breeds.forEach((breed) => {
                const option = document.createElement('option');
                option.value = breed;
                option.textContent = breed;
                select.appendChild(option);
            });
        })
        .catch((error) => console.error("There has been an error:", error));
}


