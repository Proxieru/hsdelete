(function() {
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.altKey && event.code === 'Space') {
            console.log('Ctrl + Alt + Space was pressed on Google.com!');
            alert('Key combination activated on Google!');
        }
    });
})();
