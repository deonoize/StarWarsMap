let buttons = {};

if (localStorage.getItem('buttons') !== null) {
    buttons = JSON.parse(localStorage.getItem('buttons'));
}

$(document).ready(function () {
    Object.keys(buttons).forEach(key => {
        setButton($('[data-key="' + key + '"]'), buttons[key]);
    });

    $('.button').click(function () {
        let that = $(this);
        let key = that.data('key');

        switch (buttons[key]) {
            case undefined:
                buttons[key] = 'red';
                break;
            case 'red':
                buttons[key] = 'yellow';
                break;
            case 'yellow':
                delete buttons[key];
                break;
        }

        setButton(that, buttons[key])

        localStorage.setItem('buttons', JSON.stringify(buttons));
    });

    $('.clear').click(function () {
        localStorage.removeItem('buttons');
        location.reload();
    });

    function setButton(button, value) {
        switch (value) {
            case undefined:
                button.removeClass('yellow');
                break;
            case 'red':
                button.addClass('red');
                break;
            case 'yellow':
                button.removeClass('red').addClass('yellow');
                break;
        }
    }
});
