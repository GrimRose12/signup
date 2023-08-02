const audio = document.getElementById('customAudio');
const toggleButton = document.getElementById('bgmToggle');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

audio.volume = 0.3;
toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        
        playIcon.classList.add('show');
        playIcon.classList.remove('hide')

        pauseIcon.classList.add('hide')
        pauseIcon.classList.remove('show');
        
    } else {
        audio.pause();
        
        playIcon.classList.add('hide')
        playIcon.classList.remove('show');

        pauseIcon.classList.add('show')
        pauseIcon.classList.remove('hide');
    }
});