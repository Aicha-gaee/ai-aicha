const playButton = document.getElementById("playButton");
const radio = document.getElementById("radio");

playButton.addEventListener("click", function() {
    if (radio.paused) {
        radio.play();
        playButton.textContent = "Pause Radio";
    } else {
        radio.pause();
        playButton.textContent = "Play Radio";
    }
});
  
  function toggleAnswer(question) {
    question.classList.toggle('active');
    let answer = question.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}
