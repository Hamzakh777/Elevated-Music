$('document').ready(function() {
    scrollRevealer();
});

function scrollRevealer() {
    //for the landing-screen
    ScrollReveal().reveal('.wrapper-nav', {
        duration: 1000,
        origin: 'top',
        distance: '30px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.landing-screen .intro ', {
        duration: 2000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.landing-screen .down-arrow ', {
        duration: 2000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        delay: 300,
        mobile: false
    });
    
    //for the info section
    ScrollReveal().reveal('.info .section-title-wrapper', {
        duration: 2000,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.info .text .paragraphs', {
        duration: 1400,
        origin: 'left',
        distance: '500px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.info .text .line', {
        duration: 1400,
        origin: 'right',
        distance: '200px',
        opacity: 0,
        delay: 300,
        mobile: false
    });
    ScrollReveal().reveal('.info .imgs .img1', {
        duration: 1400,
        origin: 'bottom',
        distance: '200px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.info .imgs .img2', {
        duration: 1400,
        origin: 'bottom',
        distance: '200px',
        opacity: 0,
        delay: 200,
        mobile: false
    });
    ScrollReveal().reveal('.info .imgs .img3', {
        duration: 1400,
        opacity: 0,
        delay: 300,
        mobile: false
    });
    
    //for the pros section
    ScrollReveal().reveal('.pros .section-title-wrapper', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        opacity: 0,
        viewFactor: 0.2,
        mobile: false
    });
    ScrollReveal().reveal('.pros .pros-container', {
        duration: 2000,
        opacity: 0,
        origin: 'left',
        distance: '110px',
        viewFactor: 0.4,
        mobile: false,
        delay: 300
    });
    
    //interseted in performing section
    ScrollReveal().reveal('#performing .section-title-wrapper', {
        duration: 2000,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('#performing .line', {
        duration: 1000,
        origin: 'top',
        distance: '100px',
        opacity: 0,
        delay: 1000,
        mobile: false
    });
    ScrollReveal().reveal('#performing p', {
        duration: 1500,
        origin: 'bottom',
        distance: '100px',
        opacity: 0,
        delay: 700,
        mobile: false
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};