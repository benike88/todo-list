$('#add').click(function() {
    $('#ulist').append("<li>" + $('#input').val() + "</li>");
    $('#input').val('');
})

$('li').click(function() {
    $('li').css('text-decoration', 'line-through');
})