const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");
const backButton = document.querySelector("#btnBack");
let redirectURL = "./index.html";
const newButton = document.getElementById('btnPickNew')

backButton.addEventListener("click", function () {
	redirect(redirectURL);
});

// storing the movie into local storage
const myMovies = getMovies();

const moviePicker = function(movies) {

    // randomize from length of list
    const rndNumber = Math.floor(Math.random() * movies.length);
    const pickedMovie = movies[rndNumber];
    const yourMovie = document.getElementById('pickedMovie');

    // display picked movie
    yourMovie.textContent = (`Your movie is: ${pickedMovie.name}`);
}
moviePicker(myMovies);

newButton.addEventListener('click', function() {
    moviePicker(myMovies);
});

