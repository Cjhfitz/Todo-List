// Check off specific todo by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("span").click(function(event) {
    $(this).parent().fadeOut("500ms", function() {
        $(this).remove();
    });
    event.stopPropagation();
});