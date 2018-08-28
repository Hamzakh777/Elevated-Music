$(document).ready(function() {
    scrollRevealer();
});

//for the count down timer
(function() {
    // future date for the countdown
    const countDownDate = new Date("Nov 30, 2018 16:00:00").getTime();
    const timeContainer = document.querySelector('#time-wrapper');
    const timeEnd = document.querySelector('.time-end');
    const dayselt1 = document.querySelector('.td-elt-1');
    const dayselt2 = document.querySelector('.td-elt-2');
    const hourselt1 = document.querySelector('.th-elt-1');
    const hourselt2 = document.querySelector('.th-elt-2');
    const minelt1 = document.querySelector('.tm-elt-1');
    const minelt2 = document.querySelector('.tm-elt-2');
    const secelt1 = document.querySelector('.ts-elt-1');
    const secelt2 = document.querySelector('.ts-elt-2');
  
    // updating the countdown
    const timer = setInterval(() => {
    // today date and time
    const now = new Date().getTime();
    // distance between now an the count down date
    const distance = countDownDate - now;
    // calculate days, hours, mins, and secs
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);
    //function for seperating the digits for each one of time elts
    function seperator(dateItem, elt1, elt2) {
        let output = [],
            sNumber = dateItem.toString();
        
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            output.push(+sNumber.charAt(i));
        };
        if( output.length === 2) {
            elt1.innerHTML = '<p>'+ output[0]+'</p>';
            elt2.innerHTML = '<p>'+ output[1]+'</p>'; 
        } else if (output.length === 1){
            elt1.innerHTML = '<p>'+0+'</p>';
            elt2.innerHTML = '<p>'+ output[0]+'</p>'; 
        }

    }
    //insert the datetime data
        seperator(days, dayselt1, dayselt2);
        seperator(hours, hourselt1, hourselt2);
        seperator(mins, minelt1, minelt2);
        seperator(secs, secelt1, secelt2);

   // what happens when countdown ends
 
    if(distance < 0) {
      clearInterval(timer);
      timerInfo.classList.add('is-hidden');
      messageContainer.classList.add('is-visible');
    }
  }, 1000);
})();

//for scrollreveal


function scrollRevealer() {
    //for the landing-screen
    ScrollReveal().reveal('.wrapper-nav', {
        duration: 1000,
        origin: 'top',
        distance: '30px',
    });
    ScrollReveal().reveal('.intro h1, .intro p', {
        duration: 1200,
        opacity: 0,
        origin: 'left',
        distance: '40px',
    });
    ScrollReveal().reveal('.line-intro',{
        duration: 1600,
        orign: 'bottom',
        distance: '50px',
        opacity: 0,
        delay: 800
    });
    ScrollReveal().reveal('.intro a', {
        duration: 1600,
        orign: 'bottom',
        distance: '50px',
        opacity: 0,
        delay: 800
    });
    ScrollReveal().reveal('#timer', {
        duration: 1400,
        origin: 'bottom',
        distance: '100px',
        opacity: 0,
        delay: 900
    });
    
    

    //for the events section
    ScrollReveal().reveal('.cards-events-container', {
        origin: 'bottom',
        distance: '90px',
        duration: 1000,
        viewFactor: 0.3
    });
    ScrollReveal().reveal('.events .section-title-wrapper',{
        origin: 'top',
        duration: 1000,
        distance: '50px',
        opacity: 0, 
        delay: 300
    });
   //perform section
    ScrollReveal().reveal('.perform p', {
        origin: 'bottom',
        duration: 1000,
        distance: '50px',
        opacity: 0
    });
    ScrollReveal().reveal('.perform .section-title-wrapper',{
        origin: 'top',
        duration: 1000,
        distance: '50px',
        opacity: 0, 
        delay: 300
    });
    ScrollReveal().reveal('.perform a', {
        origin: 'bottom',
        duration: 1000,
        distance: '50px',
        opacity: 0, 
        delay: 300
    })
    
    
    //for the newsletter section
    ScrollReveal().reveal('.newsletter p', {
        origin: 'bottom',
        duration: 1000,
        distance: '50px',
        opacity: 0
    });
    ScrollReveal().reveal('.newsletter .section-title-wrapper',{
        origin: 'top',
        duration: 1000,
        distance: '50px',
        opacity: 0, 
        delay: 300
    });
    ScrollReveal().reveal('.newsletter form', {
        origin: 'bottom',
        duration: 1000,
        distance: '50px',
        opacity: 0, 
        delay: 300
    })
    
    
};






































