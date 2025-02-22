const songs = ["music/song1.mp3", "music/song2.mp3", "music/song3.mp3"];
let songIndex = 0;

const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const songTitle = document.getElementById("song-title");

function loadSong(index) {
    audio.src = songs[index];
    songTitle.textContent = `Bài hát ${index + 1}`;
}

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸";
    } else {
        audio.pause();
        playButton.textContent = "▶";
    }
});

prevButton.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audio.play();
    playButton.textContent = "⏸";
});

nextButton.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audio.play();
    playButton.textContent = "⏸";
});

loadSong(songIndex);