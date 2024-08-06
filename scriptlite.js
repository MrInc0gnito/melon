// Create modals for each game
const games = [
    { id: 1, name: "Miniblox", url: "https://miniblox.io/" },
    { id: 2, name: "Voxiom", url: "https://voxiom.io/" },
    { id: 3, name: "Bloxd", url: "https://bloxd.io/" },
    { id: 4, name: "Cuberealm", url: "https://cuberealm.io/" },
    { id: 5, name: "Voxel Game", url: "https://guckstift.github.io/voxel-game-js/" }
];

games.forEach(game => {
    let modalHTML = `
        <div id="gameModal${game.id}" class="modal">
            <div class="modal-content">
                <span class="close-button" onclick="closeGameModal(${game.id})">&times;</span>
                <h2 id="gameTitle${game.id}">${game.name}</h2>
                <iframe id="gameFrame${game.id}" src="${game.url}" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>
                <button id="playButton${game.id}" class="play-button" onclick="togglePlay(${game.id})">Start Game</button>
                <button class="fullscreen-button" onclick="toggleFullscreen(${game.id})">
                    <svg class="fullscreen-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    document.getElementById('gameModals').innerHTML += modalHTML;
});

function openGameModal(gameName, modalId) {
    const modal = document.getElementById(`gameModal${modalId}`);
    document.getElementById(`gameTitle${modalId}`).innerText = gameName;
    modal.style.display = 'block';
}

function closeGameModal(modalId) {
    const modal = document.getElementById(`gameModal${modalId}`);
    modal.style.display = 'none';
}

function togglePlay(modalId) {
    const iframe = document.getElementById(`gameFrame${modalId}`);
    const playButton = document.getElementById(`playButton${modalId}`);
    if (playButton.innerText === 'Start Game') {
        playButton.innerText = 'Stop Game';
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*'); // For iframe videos
    } else {
        playButton.innerText = 'Start Game';
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); // For iframe videos
    }
}

function toggleFullscreen(modalId) {
    const modal = document.getElementById(`gameModal${modalId}`);
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

document.addEventListener('fullscreenchange', function() {
    const fullscreenElement = document.fullscreenElement;
    if (fullscreenElement && fullscreenElement.classList.contains('modal')) {
        fullscreenElement.querySelector('.modal-content').style.display = 'none';
        fullscreenElement.querySelector('.fullscreen-button').style.display = 'none';
        fullscreenElement.querySelector('.close-button').style.display = 'none';
        fullscreenElement.querySelector('.play-button').style.display = 'none';
        fullscreenElement.querySelector('iframe').style.width = '100vw';
        fullscreenElement.querySelector('iframe').style.height = '100vh';
    } else {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.querySelector('.modal-content').style.display = 'block';
            modal.querySelector('.fullscreen-button').style.display = 'block';
            modal.querySelector('.close-button').style.display = 'block';
            modal.querySelector('.play-button').style.display = 'block';
            modal.querySelector('iframe').style.width = '100%';
            modal.querySelector('iframe').style.height = '400px';
        });
    }
});
