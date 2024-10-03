function getMovies() {
	let data = JSON.parse(localStorage.getItem("movies"));
	if (!data) return null;
	return data;
}
function saveMovieToStorage(movieObj) {
	let movieList = getMovies();
	// return empty array if list doesn't exist
	if (movieList == null) movieList = [];

	// add new movie to list
	movieList.push(movieObj);

	// save to local storage
	localStorage.setItem("movies", JSON.stringify(movieList));
}
const redirect = function (url) {
	location.assign(url);
};


