let count = 0;

$('#add').click(function() {
    $('#ulist').append('<div class="item"><li id="todo'+ count +'">' + $('#inputbox').val() + '</li><button class="actions" id="done">Done</button><button class="actions" id="delete">Delete</button></div><br>');
    $('#inputbox').val('');
    count++;
})

