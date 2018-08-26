$('document').ready(function() {
    
    
    $('.center').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600,
        
        responsive:[{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        },{breakpoint: 1310,
            settings: {
                slidesToShow: 4,
                infinite: true
            }},
            {breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true
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