$(document).ready(function(){
    
let isValidated = localStorage.getItem("r-is-valited");
debugger;
if(isValidated == "false"){
    window.location.assign("main.html");
}else{
    $("body").removeClass('hidden');
}

    $(".r-button-yes").click(function(){
      $(this).closest('.r-container').addClass('r-accept');
        debugger;
        let totalConfeti = 30; // Cantidad de imágenes de confeti
        let mitad = totalConfeti / 2;
        let screenWidth = $(window).width();
        let screenHeight = $(window).height();

        for (let i = 0; i < totalConfeti; i++) {
            let img = $("<img>")
            .attr("src", "src/emoji-1.png") // Imagen de prueba
            .addClass("confeti");

            let startX, startY = screenHeight - 50; // Salen desde la parte baja de la pantalla

            if (i < mitad) {
                // Aparece desde la izquierda
                startX = Math.random() * (screenWidth * 0.3);
            } else {
                // Aparece desde la derecha
                startX = screenWidth * 0.7 + Math.random() * (screenWidth * 0.3);
            }

            $("body").append(img);

            img.css({
                left: startX + "px",
                top: startY + "px",
                animationDuration: (Math.random() * 1 + 2.5) + "s", // Variar la duración
                transform: `translate(${Math.random() * 200 - 100}px, -100vh) rotate(${Math.random() * 360}deg)`
            });

            // setTimeout(() => img.remove(), 3000);
        }
    });

    $(".r-button-no").click(function(){
        $(this).closest('.r-container').addClass('r-deny');
        var randomNumber = Math.floor(Math.random() * 3) + 1;
        $('img.r-deny-items').attr('src', `src/osos-amor-${randomNumber}.png`)
      });

  });