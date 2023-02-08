$(document).ready(function () {
    $('#boton').click(function (e) { 
        e.preventDefault();
        alert(`Bienvenido ${$('#nombre').val()} ${$('#apellido').val()}, tus estudios actuales son: ${$('#estudios').val()}`);
    });
});