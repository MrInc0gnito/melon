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
                <iframe id="gameFrame${game.id}" data-src="${game.url}" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>
                <div class="modal-controls">
                    <button id="playButton${game.id}" class="play-button" onclick="togglePlay(${game.id})">Start Game</button>
                    <button class="fullscreen-button" onclick="toggleFullscreen(${game.id})">
                        <svg class="fullscreen-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/>
                        </svg>
                    </button>
                </div>
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
    const iframe = document.getElementById(`gameFrame${modalId}`);
    iframe.src = ""; // Stop the game and its sound
}

function togglePlay(modalId) {
    const iframe = document.getElementById(`gameFrame${modalId}`);
    const button = document.getElementById(`playButton${modalId}`);
    if (button.innerText === 'Start Game') {
        iframe.src = iframe.getAttribute('data-src'); // Load game URL
        button.innerText = 'Stop Game';
    } else {
        iframe.src = ""; // Stop game and sound
        button.innerText = 'Start Game';
    }
}

function toggleFullscreen(modalId) {
    const modal = document.getElementById(`gameModal${modalId}`);
    const iframe = document.getElementById(`gameFrame${modalId}`);
    if (modal.requestFullscreen) {
        modal.requestFullscreen();
    } else if (modal.mozRequestFullScreen) { /* Firefox */
        modal.mozRequestFullScreen();
    } else if (modal.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        modal.webkitRequestFullscreen();
    } else if (modal.msRequestFullscreen) { /* IE/Edge */
        modal.msRequestFullscreen();
    }
}

// Function to open the game modal
function openGameModal(gameName, gameId) {
    const modal = document.getElementById(`gameModal${gameId}`);
    modal.style.display = "block";
    const iframe = document.getElementById(`gameFrame${gameId}`);
    const gameSrc = iframe.getAttribute("data-src");
    iframe.src = gameSrc; // Load the iframe content when the modal is opened
}

// Function to close the game modal
function closeGameModal(gameId) {
    const modal = document.getElementById(`gameModal${gameId}`);
    modal.style.display = "none";
    const iframe = document.getElementById(`gameFrame${gameId}`);
    iframe.src = ""; // Clear the iframe content when the modal is closed
}

// Function to toggle the game iframe playing
function togglePlay(gameId) {
    const iframe = document.getElementById(`gameFrame${gameId}`);
    if (iframe.src === "") {
        iframe.src = iframe.getAttribute("data-src"); // Start game
    } else {
        iframe.src = ""; // Stop game
    }
}

// Function to toggle fullscreen mode
function toggleFullscreen(gameId) {
    const iframe = document.getElementById(`gameFrame${gameId}`);
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { /* Firefox */
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE/Edge */
        iframe.msRequestFullscreen();
    }
}
