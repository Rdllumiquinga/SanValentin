$(document).ready(function(){
    
    localStorage.setItem("r-is-valited", false);

    $(".r-validation-btn").click(function(){
      $(this).closest('.r-container').addClass('r-accept');
        debugger;
        let inputs = $('.r-container-pass').find('input');
        let inputValue="";
        for(let i=0;i<inputs.length;i++){
            inputValue+=inputs[i].value;
        }

        if(inputValue=="031021"){
            localStorage.setItem("r-is-valited", true);
            window.location.assign("index.html");
        }else{
            //
        }
    });

});