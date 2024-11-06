const windows = document.querySelectorAll('.window');
const body = document.body;

windows.forEach(window => {
    window.addEventListener('mouseenter', () => {
        windows.forEach(w => {
            w.classList.add('hovered');
            body.classList.add('windows-hovered');
        });
    });

    window.addEventListener('mouseleave', () => {
        windows.forEach(w => {
            w.classList.remove('hovered');
            body.classList.remove('windows-hovered');
        });        
    });
});