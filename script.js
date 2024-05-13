document.addEventListener("DOMContentLoaded", function(event) {
    // After the DOM has fully loaded, add the 'flipped' class to trigger the flip animation
    var profilePicture = document.querySelector(".profile-picture");
	var con-links = document.querySelector(".link-container");
    profilePicture.classList.add("flipped");
	con-links.classList.add("moved");
});