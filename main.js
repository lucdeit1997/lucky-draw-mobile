$(document).ready(function() {
    $(".btn-login").on("click", function(){
        $(".modal-out-of-ticket").css("visibility", "visible")
    })

    $(".btn-close-modal").on("click", function(){
        $(".modal-out-of-ticket").css("visibility", "hidden")
    })
});  
