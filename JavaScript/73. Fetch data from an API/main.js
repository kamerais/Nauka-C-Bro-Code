// fetch = Funkcja używana do robienia HTTP requestów do wydobycia zasobów.
//         (JSON style data, images, files)
//         Upraszcza asynchronicznie wydobywanie danych w JS i
//         danych asynchronicznie poprzez sieć.
//         fetch(url, (options))

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch response");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// lub profesjonalniej

async function fetchData() {

    try
    {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok)
        {
            throw new Error("Could not fetch response");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error)
    {
        console.error(error);
    }
}