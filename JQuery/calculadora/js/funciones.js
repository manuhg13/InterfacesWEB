$(document).ready(function () {
    let valor="0";
    let operacion="";

    $('button').click(function (e) { 
        e.preventDefault();
        if ($(this).text().match(/[0-9]+/)){
            if(valor==="0"){
                valor=$(this).text();
            }else{
                valor+=$(this).text();
            }
    
            $('#pantalla').val(valor);
        }else if($(this).text().match(/[\+\-\*\/]/)){
            operacion+= valor + $(this).text();
            valor="0";

            $('#pantalla').val(operacion);
        }else if($(this).text() === "C"){
            valor="0";
            operacion="";

            $('#pantalla').val(valor);
        }else if($(this).text() === "="){
            operacion+= valor;
            valor= eval(operacion);

            $('#pantalla').val(valor);
        }
    });
});


