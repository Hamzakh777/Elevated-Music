$('document').ready(function() {
    playtoggler();
    
    scrollRevealer();
    
    $('.center').slick({
        dots: true,
        infinite: false,
        mobileFirst: true,
        centerPadding: '100px',
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        
        responsive:[{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: false
            }
        },{breakpoint: 1310,
            settings: {
                slidesToShow: 4,
                infinite: false
            }},
            {breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: false
            }},
        {
            
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
                
            }
        }, {
            
            breakpoint: 300,
            settings: "unslick"
            
        }]
    })
    
    
})

//function for showing and hidding the playlist

function playtoggler() {
    $('.playlist-btn').click(function() {
        $('.iframe-wrapper').toggleClass('active');
    });
};


//for scrollReveal
function scrollRevealer() {
    //for the html file
    ScrollReveal().reveal('.hidden');
    //for the landing screen
    ScrollReveal().reveal('.intro .wrapper-nav', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.intro .text-wrapper', {
        duration: 2000,
        origin: 'left',
        distance: '500px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.intro .btn', {
        duration: 2000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        delay: 500,
        mobile: false
    });
    ScrollReveal().reveal('.intro .down-arrow', {
        duration: 2000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        delay: 800,
        mobile: false
    });
    
    //for the tracks section
    ScrollReveal().reveal('.tracks .section-title-wrapper', {
        duration: 2000,
        origin: 'top',
        distance: '100px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.tracks .content', {
        duration: 2000,
        opacity: 0,
        mobile: false
    });
    
    
    // for the spotify section
    ScrollReveal().reveal('.spotify-play .section-title-wrapper', {
        duration: 2000,
        origin: 'left',
        distance: '100px',
        opacity: 0,
        mobile: false
    });
    ScrollReveal().reveal('.spotify-play .content .paragraphs', {
        duration: 2000,
        origin: 'left',
        distance: '100px',
        opacity: 0,
        mobile: false,
        delay: 300
    });
    ScrollReveal().reveal('.spotify-play .content .playlist-btn', {
        duration: 2000,
        origin: 'right',
        distance: '100px',
        opacity: 0,
        mobile: false,
        delay: 600
    });
    
    
};

















