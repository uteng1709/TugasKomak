function showVideoPopup() {
    document.getElementById('videoPopup').style.display = 'block';
}

function showInfoPopup() {
    document.getElementById('infoPopup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('videoPopup').style.display = 'none';
    document.getElementById('infoPopup').style.display = 'none';
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    var videoPopup = document.getElementById('videoPopup');
    var infoPopup = document.getElementById('infoPopup');
    if (event.target == videoPopup || event.target == infoPopup) {
        hidePopup();
    }
}

