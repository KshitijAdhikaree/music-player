const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

//Music
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric chill machine",
    artist: "jacinto design",
  },
  {
    name: "jacinto-2",
    displayName: "Electric chill machine2",
    artist: "jacinto design2",
  },
  {
    name: "jacinto-3",
    displayName: "Electric chill machine3",
    artist: "jacinto design3",
  },
  {
    name: "jacinto-4",
    displayName: "Electric chill machine4",
    artist: "jacinto design4",
  },
];
//  Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");

  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

//Current Song
let songIndex = 0;

//Previous Song
function prevSong() {
  songIndex--;
  console.log(songIndex);
  loadSong(songs[songIndex]); 
  playSong();
}

//Next Song
function nextSong() {
  songIndex++;
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}
// On load- select first song
loadSong(songs[songIndex]);

//Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
