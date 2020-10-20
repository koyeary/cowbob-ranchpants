$(window).on('scroll', function () {

    if ($(this).scrollTop() >= 700) {
        $('.top').css('background-color', 'white');
        $('.top').addClass('nav-color');
        $('.main').css('color', '#0071eb');

    } else {

        $('.top').css('background-color', 'transparent');
        $('.top').removeClass('nav-color');
        $('.main').css('color', '#ffffff');
    }

});

$('#contact-goto').on('click', function () {
        $('body').animate({
            scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
        }, 1000);
    });


// Send the POST request.
$('.mail').on('click', (e) => {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    $.ajax('/mail', {
        method: 'POST',
        data: {
            name: name,
            email: email,
            message: message
        }
    }).then(
        function () {
            console.log('email sent');
            // Reload the page to get the updated list
            $('#contact').modal('hide');
        }
    );

    if ($("#signUp").checked = true) {
        console.log('checked');
    }
});


