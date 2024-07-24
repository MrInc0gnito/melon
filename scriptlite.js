function openGameModal(gameTitle) {
    document.getElementById("gameTitle").innerText = gameTitle;
    document.getElementById("gameModal").style.display = "block";
}

function closeGameModal() {
    document.getElementById("gameModal").style.display = "none";
}

function toggleFullscreen() {
    var iframe = document.getElementById("gameFrame");
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

window.onclick = function(event) {
    var modal = document.getElementById("gameModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
