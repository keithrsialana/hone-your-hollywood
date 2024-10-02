const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");
const backButton = document.querySelector("#btnBack");
let redirectURL = "./index.html";

backButton.addEventListener("click", function () {
	redirect(redirectURL);
});
