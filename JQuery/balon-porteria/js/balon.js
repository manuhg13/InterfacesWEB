$(document).ready(function () {
    $('#balon').click(function (e) { 
        e.preventDefault();
        
        $(this).animate({
            position: 'absolute',
            bottom: '+=50px',
            fill: 'red'
        }, "slow");
        $(this).animate({fill:'green'});
    });
});