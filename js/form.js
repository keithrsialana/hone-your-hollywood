let pickButton = document.getElementById("btnPickMovie");
let movieInput = document.getElementById("movieName");
let taMovies = document.getElementById("savedMovies");
let genreList = document.getElementById("genreList");
let genres = document.querySelectorAll("li");

function sendError(errorString) {
	// update error message depending on argument string passed
	document.getElementById("error").innerHTML = errorString;
}

function enterKey(event){
	if (event.code == "Enter") {
        event.preventDefault();

		const name = movieInput.value;
		let dropDown = document.getElementById("genres");
		const genre = dropDown.textContent;

		// input validation
		if (name === "" || name == null) {
			sendError("You have not entered a movie name!");
			return;
		}
		if (genre === "" || genre === "Select a genre") {
			sendError("You have not selected a genre!");
			return;
		}

		// create movie object
		const movieObj = {
			name: name,
			genre: genre,
		};

		// save to local storage
		movieInput.value = "";
		saveMovieToStorage(movieObj);
		taMovies.value += `${movieObj.name}\n`;
	}
}

movieInput.addEventListener("keydown", enterKey);

genres.forEach((element) => {
	element.addEventListener("click", function (event) {
        event.preventDefault();

		// removes selected class from any other list item that has it
		genres.forEach((item) => {
			if (item.classList.contains("selected"))
				item.classList.remove("selected");
		});
		// adds selected class to the clicked list item
		element.classList.add("selected");
		let dropDown = document.getElementById("genres");
		dropDown.textContent = element.textContent;
	});
});

pickButton.addEventListener("click", function (event) {
    event.preventDefault();

	// submit validation
	if (taMovies.value == "" || taMovies.value == null) {
		sendError("You have not added any movies!");
		return;
	} else {
		redirect("moviePicker.html");
	}
});

function fillTextArea(){

	// autofill list on load
    const movies = getMovies();
    movies.forEach(element => {
        taMovies.value += `${element.name}\n`;
    });
}

fillTextArea();
