$(document).ready(function () {
    $("#balon").click(function (e) { 
        e.preventDefault();
        
        $(this).animate({
            position: 'absolute',
            top: '-480px',
        }, "slow" , function () { 
            $('#balon').css({'fill':'green'});
         });
        $(this).css({'fill':'red'});
        
    });
});