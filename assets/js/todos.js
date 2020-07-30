// Check off specific todo by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut("500ms", function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// 
$("input[type='text']").on("keypress", function(event) {
    if(event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todoText + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
})