$(document).ready(function () {
    $('.button').click(function () {
        let that = $(this);
        if (that.hasClass('yellow')) {
            that.removeClass('yellow');
        } else if (that.hasClass('red')) {
            that.removeClass('red').addClass('yellow');
        } else {
            that.addClass('red');
        }
    });
});
