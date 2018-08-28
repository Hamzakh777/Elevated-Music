$('document').ready(function() {
    scrollRevealer();
});

function scrollRevealer() {
    //for the landing screen
    ScrollReveal().reveal('.landing-screen .wrapper-nav', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.landing-screen .title', {
        duration: 2000,
        origin: 'bottom',
        distance: '500px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.landing-screen .down-arrow', {
        duration: 2000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        delay: 500,
        mobile: false
    });
    
    //for the events section
    ScrollReveal().reveal('.events .section-title-wrapper', {
        duration: 2000,
        origin: 'top',
        distance: '100px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.events #event-1', {
        duration: 1800,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        mobile: false,
        delay: 300,
        viewFactor: 0.2
    });
    ScrollReveal().reveal('.events #event-2', {
        duration: 1800,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        mobile: false,
        delay: 300,
        viewFactor: 0.2
    });
    ScrollReveal().reveal('.events #event-3', {
        duration: 1800,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        mobile: false,
        delay: 300,
        viewFactor: 0.2
    });
    ScrollReveal().reveal('.events .line-1', {
        duration: 2000,
        origin: 'left',
        distance: '400px',
        opacity: 0,
        mobile: false,
    });
    ScrollReveal().reveal('.events .line-2', {
        duration: 2000,
        origin: 'right',
        distance: '400px',
        opacity: 0,
        mobile: false,
    });
    
    //for the attending section
    ScrollReveal().reveal('.attend .section-title-wrapper', {
        duration: 2000,
        origin: 'top',
        distance: '100px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.attend .paragraphs', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.attend #mc_embed_signup', {
        duration: 2000,
        origin: 'right',
        distance: '300px',
        opacity: 0,
        mobile: false,
        delay: 300
    });
    
    //social expirement section
    ScrollReveal().reveal('.expirement .section-title-wrapper', {
        duration: 2000,
        origin: 'left',
        distance: '100px',
        opacity: 0,
        mobile: false
    });
      ScrollReveal().reveal('.expirement .content .line', {
        duration: 2000,
        origin: 'left',
        distance: '100px',
        opacity: 0,
        mobile: false,
        delay: 500
    });
      ScrollReveal().reveal('.expirement .content p', {
        duration: 2000,
        origin: 'right',
        distance: '100px',
        opacity: 0,
        mobile: false
    });
};





































