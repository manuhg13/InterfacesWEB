$(document).ready(function () {
    $("#balon").click(function () { 
        
        $(this).animate({
            position: 'absolute',
            top: '-480px',
        }, "slow" , function () { 
            $('#balon').css({'fill':'green'});
         });
        $(this).css({'fill':'red'});
        
    });
});