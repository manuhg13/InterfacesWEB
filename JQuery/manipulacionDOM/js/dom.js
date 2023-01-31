$(document).ready(function () {
    $('#boton').click(function (e) { 
        e.preventDefault();
        alert(`Bienvenido ${$('#nombre').val()} ${$('#apellido').val()}, email: ${$('#nombre').val()}.${$('#apellido').val()}@diw.com`);
    });
});