


$('#ref2').hide();


$('#one').click(function (){
    $('#ref1').show();
    $('#ref2').hide();
    $('#two').css('border', "none");
    $('#two h4').css('color', "#272727");
    $('#one').css('border-bottom', 'solid 2px #ffa928');
    $('#one h4').css('color', '#ffa928');
})





$('#two').click(function (){
    $('#ref1').hide();
    $('#ref2').show();
    $('#one').css('border', "none");
    $('#one h4').css('color', "#272727");
    $('#two').css('border-bottom', 'solid 2px #ffa928');
    $('#two h4').css('color', '#ffa928');
})

