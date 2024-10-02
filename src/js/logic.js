function getMovies(){
    let data = JSON.parse(localStorage.getItem('movies'));
    if (!data)
        return null;
    return data
}
function saveMovieToStorage(movieObj){
    let movieList = getMovies();
    movieList.push(movieObj);
    localStorage.setItem('movies',movieList);
}