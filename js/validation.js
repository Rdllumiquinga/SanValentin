$(document).ready(function(){
    
    localStorage.setItem("r-is-valited", false);

    $(".r-validation-btn").click(function(){
      $(this).closest('.r-container').addClass('r-accept');
        let inputs = $('.r-container-pass').find('input');
        let inputValue="";
        for(let i=0;i<inputs.length;i++){
            inputValue+=inputs[i].value;
        }

        if(inputValue=="031021"){
            localStorage.setItem("r-is-valited", true);
            window.location.assign("love.html");
        }else{
            $(".r-image-login").attr("src", "src/login-sad.png")
            $(".r-validation-header").html("Esa noooo, tu si sabes cual es")

            $(this).addClass("vibrar");
            setTimeout(() => {
                $(this).removeClass("vibrar");
            }, 900);
        }
    });

    $(".r-container-pass input").on('keyup', function (e) {
        //delete key
        debugger;
        let nextInput = $(this).next().length > 0 ? $(this).next()[0] : null;
        let previousInput = $(this).prev().length > 0 ? $(this).prev()[0] : null;
        if (e.keyCode == 8) {
            if (previousInput != null)
                previousInput.focus();
            this.value = ''
            e.preventDefault();
            $(this).removeClass("invalid");
            //left arrow key
        } else if (e.keyCode == 37 && previousInput != null) {
            previousInput.focus();
            e.preventDefault();
        }
        //right arrow key
        else if (e.keyCode == 39 && nextInput != null) {
            nextInput.focus();
            e.preventDefault();
        }
        else if (this.value != '' && (e.key >= '0' && e.key <= '9')) {
            if (nextInput != null) {
                nextInput.focus();
            }
            this.value = e.key
            e.preventDefault();
            $(this).removeClass("invalid");
        }
        else if (e.keyCode == 69){
            e.preventDefault();
        }

    });

});