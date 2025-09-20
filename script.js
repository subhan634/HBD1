const body = document.body;
const heart = document.getElementById("heart");
const heartContainer = document.getElementById("heartContainer");
const surpriseBox = document.getElementById("surpriseBox");
const playSongBtn = document.getElementById("playSongBtn");
const fromSubhan = document.getElementById("fromSubhan");
const birthdaySong = document.getElementById("birthdaySong");
const videoContainer = document.getElementById("videoContainer");
const memoryVideo = document.getElementById("memoryVideo");

function blastHeart() {
  for (let i = 0; i < 10; i++) {
    let span = document.createElement("span");
    span.classList.add("blast");
    span.innerText = "💖";
    span.style.left = (heart.offsetLeft + Math.random() * 100 - 50) + "px";
    span.style.top = (heart.offsetTop + Math.random() * 100 - 50) + "px";
    body.appendChild(span);
    setTimeout(() => span.remove(), 800);
  }

  heartContainer.classList.add("hidden");
  setTimeout(() => {
    surpriseBox.classList.remove("hidden");
  }, 500);
}

function revealMessage() {
  body.classList.add("show-message");
  playSongBtn.classList.remove("hidden");
}

function playSong() {
  birthdaySong.play()
    .then(() => {
      console.log("Song is playing...");
    })
    .catch(error => {
      console.log("Play blocked: ", error);
      alert("Please click again to play the song 🎶");
    });

  // Show video and play it
  videoContainer.classList.remove("hidden");
  memoryVideo.play();

  playSongBtn.classList.add("hidden");
  fromSubhan.classList.remove("hidden");
}
