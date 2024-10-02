let pickButton = document.getElementById('btnPickMovie');
let taMovies = document.getElementById('savedMovies');
let genreList = document.getElementById('genreList');
let genres = document.querySelectorAll('li');

genres.forEach(element => {
    element.addEventListener("click", function(){
        // removes selected class from any other list item that has it
        genres.forEach(item => {
            if (item.classList.contains('selected'))
                item.classList.remove('selected');
        });
        // adds selected class to the clicked list item
        element.classList.add('selected');
    });
});