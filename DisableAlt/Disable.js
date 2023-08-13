document.addEventListener('keydown', function(event) {
    if (event.key === 'Alt' && !event.ctrlKey && !event.shiftKey && !event.metaKey) {
        event.preventDefault();
    }
});