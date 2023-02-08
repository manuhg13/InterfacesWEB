$(document).ready(function () {
    
    $('#perfil-fill').hide();
    $('#perfil').hover(function () {
        $(this).hide();
        $('#perfil-fill').show();
    });

    $('#item1').click(function (e) { 
        $('#submenu').slideToggle('slow');
        
    });
});