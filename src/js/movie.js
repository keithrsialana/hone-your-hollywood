const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");
const backButton = document.querySelector("#btnBack");
let redirectURL = "./index.html";

backButton.addEventListener("click", function () {
	redirect(redirectURL);
});

// storing the movie into local storage
const myMovies = getMovies();

const moviePicker = function(movies) {
    const rndNumber = Math.floor(Math.random() * movies.length);
    const pickedMovie = movies[rndNumber];
    const yourMovie = document.getElementById('pickedMovie');

    yourMovie.textContent = (`Your movie is: ${pickedMovie.name}`);
}
moviePicker(myMovies);

