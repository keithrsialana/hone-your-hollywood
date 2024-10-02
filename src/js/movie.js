const backButton = document.querySelector('#btnBack')
let redirectURL = './index.html'

const redirect = function(url) {
    redirect = url;
    location.assign(url);
}
backButton.addEventListener('click', function(){
    redirect(redirect);
})