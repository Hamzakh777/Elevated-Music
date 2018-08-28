
$('document').ready(function() {
    slickStuff();
    readMore();
})

//slick setting and functions

function slickStuff() {
    $('.center').slick({
        dots: true,
        infinite: false,
        centerMode: false,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600,
        
        responsive:[
            {breakpoint: 1010,
            settings: {
                slidesToShow: 2,
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
                centerMode: true,
                dots: true,
                arrows: false
                
            }
        }, {
            
            breakpoint: 300,
            settings: "unslick"
            
        }]
    })
}

//for reading more section

function readMore() {
    $("h4#reading").click(function(){
     jQuery(this).parent('.article-info').parent('section').addClass('active');
       
    })
    $("h4#exit-reading").click(function() {
        const parentElt = jQuery(this).parent('.article-info').parent('section');
        
        if(parentElt.hasClass("active")) {
            
            jQuery(this).parent('.article-info').parent('section').removeClass('active');
        }
    })
}