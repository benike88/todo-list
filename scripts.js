let count = 0;

$('#add').click(function() {
    $('#ulist').append('<li id="todo'+ count +'">' + $('#inputbox').val() + "</li>");
    $('#inputbox').val('');
    count++;
})

