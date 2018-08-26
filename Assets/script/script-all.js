$('document').ready(function(){
    burgerSwitch();
});

//for the nav switch
function burgerSwitch() {
    $("#toggle").click(function() {
    var $this = $(this)
    $this.toggleClass("on");
    
    if($this.hasClass("on")){
       $("#resize").css({
           "visibility": "visible",
           "opacity": "1"
       }); 
    } else {
        $("#resize").css({
           "visibility": "hidden",
           "opacity": "0"
       });
    }
})

}