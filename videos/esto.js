const mivideo=document.getElementById('idvideo');
        window.addEventListener('load',iniciar,false);

        function iniciar() {
            document.getElementById('play').addEventListener('click',repro);
            document.getElementById('pausa').addEventListener('click',pausar);
            document.getElementById('restart').addEventListener('click',restart);
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
        
        let miaudio=document.getElementById('audio');
        miaudio.volume=0.4;
        miaudio.onloadedmetadata=function () {
            let p=document.createElement('p');
            p.appendChild(document.createTextNode("Duracion: " + (this.duration/60) + " minutos"));
            document.body.appendChild(p);
        }