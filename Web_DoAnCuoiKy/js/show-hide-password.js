
$(document).ready(function(){
    $('#eyeps').click(function(){
        $(this).toggleClass('active');
        var input = $('#password');
        if (input.attr('type') == 'password') {
            input.attr('type', 'text');
            $(this).attr('src', '../Data/eye (1).png'); // đổi hình ảnh khi hiển thị mật khẩu
        } else {
            input.attr('type', 'password');
            $(this).attr('src', '../Data/close-eye.png'); // đổi hình ảnh khi ẩn mật khẩu
        }
    });

    $('#eyecf').click(function(){
        $(this).toggleClass('active');
        var input = $('#confirm');
        if (input.attr('type') == 'password') {
            input.attr('type', 'text');
            $(this).attr('src', '../Data/eye (1).png'); // đổi hình ảnh khi hiển thị mật khẩu
        } else {
            input.attr('type', 'password');
            $(this).attr('src', '../Data/close-eye.png'); // đổi hình ảnh khi ẩn mật khẩu
        }
    });
});




