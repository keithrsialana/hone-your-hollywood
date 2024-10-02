const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
const backButton = document.querySelector('#btnBack');
let redirectURL = './index.html';

const redirect = function(url) {
    redirectURL = url;
    location.assign(url);
   
}   
backButton.addEventListener('click', function(){
    redirect(redirectURL);
})