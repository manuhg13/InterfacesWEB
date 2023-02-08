const mivideo=document.getElementById('idvideo');
        window.addEventListener('load',iniciar,false);

        function iniciar() {
            $('#pausa').hide();
            $('#play').click(function (e) { 
                
                mivideo.play()
                $(this).hide();
                $('#pausa').show();
            });
            $('#pausa').click(function (e) { 
                
                mivideo.pause()
                $(this).hide();
                $('#play').show();
            });
            $('#muted').hide();
            $('#sound').click(function (e) { 
                
                mivideo.muted=false;
                $(this).hide();
                $('#muted').show();
            });
            $('#muted').click(function (e) { 
                
                mivideo.muted=true;
                $(this).hide();
                $('#sound').show();
            });
            
            document.getElementById('sound').addEventListener('click',sonido);
            
        }
        
        function sonido() {
            if (mivideo.muted==false){
                mivideo.muted=true;
            }else{
                mivideo.muted=false;
            }
        }
        function resolucion() {
            let tiempo=mivideo.currentTime;
            if (this.value=='Resolucion HD'){
                mivideo.src="gallomenor.mp4";
            }else if (this.value=='Resolucion Original FHD') {
                mivideo.src='Gallo - 8386.mp4';
        
            }else if(this.value=='Resolucion SD'){
                mivideo.src="gallopocho.mp4";
            }
            mivideo.currentTime=tiempo;
            mivideo.play();
        }
        
        
        
        let miaudio=document.getElementById('audio');
        miaudio.volume=0.4;
        miaudio.onloadedmetadata=function () {
            let p=document.createElement('p');
            p.appendChild(document.createTextNode("Duracion: " + (this.duration/60) + " minutos"));
            document.body.appendChild(p);
        }