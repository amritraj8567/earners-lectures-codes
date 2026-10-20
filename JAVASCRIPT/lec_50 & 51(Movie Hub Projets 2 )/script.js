


const movieForm = document.querySelector("#movieForm")
const movieInput = document.querySelector("#movieInput")
const movieHub = document.querySelector("#movieHub")


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let query = movieInput.value

    if (!query) {
        return
    }
    console.log(query);

    searchMovies(query)
})


async function searchMovies(movieName) {

    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=36ec4b56&s=${movieName}`)
    let data = await response.json()
    console.log(data)

    if (data.Response === "True") {
        displayMovies(data.Search)
    } else {
        console.log(data.Error);
        movieHub.innerHTML = `<p>${data.error}<p/>`
    }

}


function displayMovies(movies) {



    movies.forEach((movie) => {
        const div = document.createElement("div")

        div.dataset.imdbID = movie.imdbID
        div.setAttribute("class", "movie-card")

        div.innerHTML = `<div>
                <img src=${movie.Poster} alt="">
            </div>

            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>`

        movieHub.append(div)
    })
}

movieHub.addEventListener("click", (e) => {
    e.stopPropagation()
    const movieCard = e.target.closest(".movie-card")
    const imdbID = movieCard.dataset.imdbID
    console.log(imdbID);
    location.href = `movie-details.html?id=${imdbID}`
})
