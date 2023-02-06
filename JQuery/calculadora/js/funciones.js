$(document).ready(function () {
    let valor="0";
    let operacion="";

    $('.col-4 btn btn-success').click(function (e) { 
        e.preventDefault();
        if(valor==="0"){
            valor=$(this).text();
        }else{
            valor+=$(this).text();
        }

        $('#pantalla').val(valor);
    });

    $('.col-4 btn btn-secondary').click(function (e) { 
        e.preventDefault();
        operacion+= valor + $(this).text();
        valor="0";

        $('#pantalla').val(operacion);
    });

    $('#borrar').click(function (e) { 
        e.preventDefault();
        valor="0";
        operacion="";

        $('#pantalla').val(valor);
    });

    $('#igual').click(function (e) { 
        e.preventDefault();
        operacion+= valor;
        valor= eval(operacion);

        $('#pantalla').val(valor);
    });
});