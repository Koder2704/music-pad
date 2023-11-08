
// apps:
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    const colors = ['#60d394', '#d3d6060', '#c060d3', '#d3d160', '#6860d3', '#0613ce'];

    console.log(sounds);

    // tap to play song on pad...
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            console.log('Playing sound:', sounds[index]);

            createAnimateBubbles(index);
        });
    });

    // function that makes bubbles:
    function createAnimateBubbles(index) {
        const bubbles = document.createElement('div');
        visual.appendChild(bubbles);

        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = 'jump 2s ease';
        bubbles.addEventListener('animationend', function () {
            visual.removeChild(bubbles);
        });
    }
});