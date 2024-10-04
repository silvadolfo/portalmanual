window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.opacity = '0';
        document.getElementById('splash-screen').style.transition = 'opacity 0.5s ease';
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
        }, 500); 
    }, 1000); 
});