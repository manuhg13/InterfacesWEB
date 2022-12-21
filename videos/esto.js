const mivideo=document.getElementById('idvideo');
        window.addEventListener('load',iniciar,false);

        function iniciar() {
            document.getElementById('play').addEventListener('click',repro);
            document.getElementById('pausa').addEventListener('click',pausar);
            document.getElementById('restart').addEventListener('click',restart);
            document.getElementById('vel').addEventListener('click',speed);
            document.getElementById('sound').addEventListener('click',sonido);
            document.getElementById('selReso').addEventListener('click',resolucion)
            /*document.getElementById('res1').addEventListener('click',reso1);
            document.getElementById('res2').addEventListener('click',reso2);*/
        }
        

        function repro() {
            mivideo.play()
        }

        function pausar() {
            mivideo.pause()
        }
        function restart() {
            mivideo.load()
        }
        
        let contadorVel=0;
        function speed() {
            mivideo.playbackRate+=0.5;
            contadorVel++
            
            if(contadorVel==2) {
                mivideo.plabackRate=2
            }else if(contadorVel>2){
                contadorVel=0;
            }
            
        }
        function sonido() {
            if (mivideo.muted==false){
                mivideo.muted=true;
            }else{
                mivideo.muted=false;
            }
        }
        function resolucion() {
            
            if (this.value=='Resolucion HD'){
                mivideo.src="gallomenor.mp4"
            }else if(this.value=='Resolucion SD'){
                mivideo.src="gallopocho.mp4"
            }
        }
        
        
        
        let miaudio=document.getElementById('audio');
        miaudio.volume=0.4;
        miaudio.onloadedmetadata=function () {
            let p=document.createElement('p');
            p.appendChild(document.createTextNode("Duracion: " + (this.duration/60) + " minutos"));
            document.body.appendChild(p);
        }