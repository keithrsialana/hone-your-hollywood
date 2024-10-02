let pickButton = document.getElementById("btnPickMovie");
let movieInput = document.getElementById("movieName");
let taMovies = document.getElementById("savedMovies");
let genreList = document.getElementById("genreList");
let genres = document.querySelectorAll("li");

function sendError(errorString) {
	document.getElementById("error").innerHTML = errorString;
}

function enterKey(event){
	if (event.code == "Enter") {
        event.preventDefault();

		const name = movieInput.value;
		let dropDown = document.getElementById("genres");
		const genre = dropDown.textContent;
		if (name === "" || name == null) {
			sendError("You have not entered a movie name!");
			return;
		}
		if (genre === "" || genre === "Select a genre") {
			sendError("You have not selected a genre!");
			return;
		}
		const movieObj = {
			name: name,
			genre: genre,
		};
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

	if (taMovies.value == "" || taMovies.value == null) {
		sendError("You have not added any movies!");
		return;
	} else {
		redirect("moviePicker.html");
	}
});
