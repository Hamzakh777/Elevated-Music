$('document').ready(function() {
    
    
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