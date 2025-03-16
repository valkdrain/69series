// Add event listener to video element
document.querySelector('video').addEventListener('play', function() {
    console.log('Video started playing');
});

// Add event listener to related videos
document.querySelectorAll('.related-videos li').forEach(function(video) {
    video.addEventListener('click', function() {
        console.log('Related video clicked');
    });
});