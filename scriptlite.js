// JavaScript to handle modal and game controls
function openGameModal(gameName) {
    const modal = document.getElementById('gameModal');
    document.getElementById('gameTitle').innerText = gameName;
    document.getElementById('gameFrame').src = ''; // Set URL later
    modal.style.display = 'block';
}

function closeGameModal() {
    const modal = document.getElementById('gameModal');
    modal.style.display = 'none';
}

document.getElementById('playButton').addEventListener('click', function() {
    const iframe = document.getElementById('gameFrame');
    const playButton = document.getElementById('playButton');
    if (playButton.innerText === 'Start Game') {
        playButton.innerText = 'Stop Game';
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*'); // For iframe videos
    } else {
        playButton.innerText = 'Start Game';
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); // For iframe videos
    }
});

function toggleFullscreen() {
    const modal = document.getElementById('gameModal');
    if (modal.requestFullscreen) {
        modal.requestFullscreen();
    } else if (modal.mozRequestFullScreen) { /* Firefox */
        modal.mozRequestFullScreen();
    } else if (modal.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        modal.webkitRequestFullscreen();
    } else if (modal.msRequestFullscreen) { /* IE/Edge */
        modal.msRequestFullscreen();
    }
}
