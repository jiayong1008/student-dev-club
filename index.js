
document.addEventListener('DOMContentLoaded', function() {
    navScrollAnimation();
    navOpenAnimation();
});

// NAV SCROLL ANIMATION
function navScrollAnimation() {

    const header = document.querySelector('header');
    const hamburgerLines = document.querySelectorAll('.menu line');
    const logo = document.querySelector('.logo');

    // tl.reversed is default to false
    const tl = new TimelineMax({ paused: true, reversed: false });

    tl.fromTo(header, 0.15, {background: 'none', opacity: 1}, {background: 'white', opacity: 0.9})
    .fromTo(logo, 0.2, {color: 'white'}, {color: 'black'}, '-=0.1')
    .fromTo(hamburgerLines, 0.2, {stroke: 'white'}, {stroke: 'black'}, '-=0.2');

    window.onscroll = () => {
        if (window.scrollY > 30) {
            if (tl.paused() || tl.reversed()) {
                console.log("Playing animation.."+window.scrollY);
                tl.play();
            }

        } else {
            if (!tl.paused() && !tl.reversed()) {
                console.log("Reversing animation.."+window.scrollY);
                tl.reverse();
            }
        }
    }
}

// NAV OPEN ANIMATION
function navOpenAnimation() {

    const hamburger = document.querySelector('.menu');
    const hamburgerLines = document.querySelectorAll('.menu line');
    const navOpen = document.querySelector('.nav-open');
    const navBreaks = document.querySelectorAll('hr');
    const navLinks = document.querySelectorAll('.nav-links');

    // tl.reversed is default to false
    const tl = new TimelineMax({ paused: true, reversed: true });

    tl.to(navOpen, 0.5, {x: 0})
    .fromTo(navBreaks, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.1')
    .fromTo(navLinks, 0.5, { opacity: 0, x: 15 }, { opacity: 1, x: 0 }, '-=0.5')
    .fromTo(hamburgerLines, 0.2, {stroke: 'white'}, {stroke: 'black'}, '-=1');

    hamburger.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    })
}
