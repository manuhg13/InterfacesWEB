const mivideo=document.getElementById('idvideo');
        window.addEventListener('load',iniciar,false);

        function iniciar() {
            let b1=document.getElementById('play')
            b1.addEventListener('click',repro);
            let b2=document.getElementById('pausa')
            b2.addEventListener('click',pausar);
        }
        

        function repro() {
            mivideo.play()
        }

        function pausar() {
            mivideo.pause()
        }
        
        let miaudio=document.getElementById('audio');
        miaudio.volume=0.4;
        miaudio.onloadedmetadata=function () {
            let p=document.createElement('p');
            p.appendChild(document.createTextNode("Duracion: " + (this.duration/60) + " minutos"));
            document.body.appendChild(p);
        }