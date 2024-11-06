// shout-out to ChatGPT, which helped me here
// kinda did the work for me, but on the bright side I learned about event listeners
// and query selectors, which is cool!

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
