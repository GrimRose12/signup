const audio = document.getElementById('customAudio');
const toggleButton = document.getElementById('bgmToggle');
// const playIcon = document.getElementById('playIcon');
// const pauseIcon = document.getElementById('pauseIcon');

const playIcon = document.querySelector('.play');
const pauseIcon = document.querySelector('.pause');

audio.volume = 0.3;
toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'block'
        pauseIcon.style.display = 'none'
        
        
    } else {
        audio.pause();
        playIcon.style.display = 'none'
        pauseIcon.style.display = 'block'
        
    }
});