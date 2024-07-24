let currentSong = 1; // Track the current song index
let totalSongs = 3; // Total number of songs (update this as per your total)

// Get references to all audio elements
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
// Add more variables for additional songs

// Other existing code remains unchanged...

// Update song time and volume controls for each song
song1.addEventListener("timeupdate", function(){
    if (currentSong === 1) {
        progress.value = song1.currentTime;
    }
});
song2.addEventListener("timeupdate", function(){
    if (currentSong === 2) {
        progress.value = song2.currentTime;
    }
});
song3.addEventListener("timeupdate", function(){
    if (currentSong === 3) {
        progress.value = song3.currentTime;
    }
});
// Add similar event listeners for other songs if needed

// Function to switch between songs
function switchSong(songNumber){
    // Pause current song
    let currentSongElement = document.getElementById(`song${currentSong}`);
    currentSongElement.pause();
    currentSongElement.currentTime = 0;

    // Update current song index
    currentSong = songNumber;

    // Load and play new song
    currentSongElement = document.getElementById(`song${currentSong}`);
    currentSongElement.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");

    // Update song details (title, artist, etc.) if necessary
    updateSongDetails(currentSong);
}
