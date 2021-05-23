

$(document).ready(function () {
    var pictureCount = $('#container img').length;
    var scrollResolution = 15;

    animateUI();
    
    function animateUI() {
        var currentScrollPosition = window.pageYOffset;
        var imageIndex = Math.round(currentScrollPosition / scrollResolution);
        
        if (imageIndex >= pictureCount) {
            imageIndex = pictureCount - 1; // Select last image
        }
        
        $("#container img").hide();
        $("#container img").eq(imageIndex).show();
    }
    
    $(window).bind('scroll', function() {
        animateUI();
    });
});


let loading = document.querySelector('#loading');

window.addEventListener('load', function(){
    loading.style.display ='none';
    $('h3').addClass('anima');
});


var SPE = {};



