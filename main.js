$(document).ready(function() {
    $(".btn-login").on("click", function(){
        $(".modal-login").css("visibility", "visible")
    })

    $(".btn-close-modal").on("click", function(){
        $(".modal-login").css("visibility", "hidden")
    })
});  
