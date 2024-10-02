const backButton = document.querySelector('#btnBack');
let redirectURL = './index.html';

const timeELement = document.querySelector('.movie');
const timeLeft = 3;


const redirect = function (url) {
    redirectURL = url;
    location.assign(url);
}
backButton.addEventListener('click', function () {
    redirect(redirectURL);
});

function setTime() {
    const timerInterval = setInterval(function () {
        timeLeft--;
        timeELement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
function sendMessage() {
    timeELement.textContent = '';
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', 'https://images.pexels.com/photos/3945319/pexels-photo-3945319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    timeELement.appendChild(imgElement);
};

setTime();