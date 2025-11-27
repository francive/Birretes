document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const giftContent = document.getElementById('giftContent'); 
    
    let clickCount = 0;
    const clicksToUnwrap = 10; 

    // Función para reproducir el sonido de papel en cada clic
    function playPaperSound() {
        const sound = new Audio('papel.MP3'); 
        sound.volume = 0.5; 
        sound.play(); 
    }

    // Función para reproducir el sonido de celebración (el "¡Wow!")
    function playCelebrationSound() {
        // Creamos un objeto de audio para la celebración
        const celebrationSound = new Audio('celebracion-ninos-wow.mp3');
        // Usamos un volumen más alto para el efecto final
        celebrationSound.volume = 0.8; 
        celebrationSound.play(); 
    }


    body.addEventListener('click', () => {
        if (!body.classList.contains('unwrapped-body')) {
            
            clickCount++;
            playPaperSound();

            if (clickCount >= clicksToUnwrap) {
                // Abre el regalo
                body.classList.add('unwrapped-body'); 
                body.style.cursor = 'default'; 
                
                // ¡CLAVE! REPRODUCIR SONIDO DE CELEBRACIÓN AL ABRIR
                playCelebrationSound(); 

            } else {
                // Muestra el cursor de "clic" y feedback visual
                body.style.cursor = 'crosshair'; 
                
                giftContent.style.transform = `scale(0.99)`;
                setTimeout(() => {
                    giftContent.style.transform = `scale(1)`;
                }, 100);
            }
        }
    });
});