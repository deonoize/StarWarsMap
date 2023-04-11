let selectedButton = undefined;

$(document).ready(function () {
    $('.map .button').draggable({
        containment: '.map',
        snap: '.gridlines',
        start: function () {
            selectedButton = $(this);
        },
        drag: function(event, ui) {
            ui.position = {
                left: event.clientX,
                top:  event.clientY
            };

        },
        stop: function () {
            let l = (100 * ($(this).position().left + ($(this).width() / 2)) / $(this).parent().width()) + '%';
            let t = (100 * ($(this).position().top + ($(this).height() / 2)) / $(this).parent().height()) + '%';
            $(this).css('left', l);
            $(this).css('top', t);
        },
    });

    $('.button').click(function () {
        selectedButton = $(this);

        let that = $(this);
        let width = that.width() / that.parent().width() * 100;
        width += 0.5;
        that.css('width', width + '%');
    });

    $('.button').contextmenu(function (event) {
        selectedButton = $(this);

        let that = $(this);
        let width = that.width() / that.parent().width() * 100;
        width -= 0.5;
        that.css('width', width + '%');
        event.preventDefault();

    });

    $(document).on('keyup', function (event) {
        if (selectedButton === undefined) {
            return true;
        }
        let draggable = selectedButton;
        let distance = 1;
        let position = draggable.position();

        switch (event.keyCode) {
            case 37:
                position.left -= distance;
                break;
            case 38:
                position.top -= distance;
                break;
            case 39:
                position.left += distance;
                break;
            case 40:
                position.top += distance;
                break;
            default:
                return true;
        }

        console.log(position);

        let l = (100 * (position.left + (draggable.width() / 2)) / draggable.parent().width()) + '%';
        let t = (100 * (position.top + (draggable.height() / 2)) / draggable.parent().height()) + '%';
        draggable.css('left', l);
        draggable.css('top', t);

        event.preventDefault();
    });
});
