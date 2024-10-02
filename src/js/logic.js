function getMovies() {
	let data = JSON.parse(localStorage.getItem("movies"));
	if (!data) return null;
	return data;
}
function saveMovieToStorage(movieObj) {
	let movieList = getMovies();
	if (movieList == null) movieList = [];
	movieList.push(movieObj);
	localStorage.setItem("movies", JSON.stringify(movieList));
}
const redirect = function (url) {
	location.assign(url);
};


