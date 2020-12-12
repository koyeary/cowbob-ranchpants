$(window).on('scroll', function () {

    if ($(this).scrollTop() >= 200) {
        $('.top').css('background-color', 'white');
        $('.top').addClass('nav-color');
        $('.main').css('color', '#0071eb');
        //CONTACT IF ELSE

    } else {

        $('.top').css('background-color', 'transparent');
        $('.top').removeClass('nav-color');
        $('.main').css('color', '#ffffff');
        //CONTACT IF ELSE
    }

});

$('#contact-goto').on('click', function () {
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
    }, 1000);
});

$('#github').on('click', function () {
    window.open('https://github.com/koyeary');
} )

$('#linkedin').on('click', function () {
    window.open('https://www.linkedin.com/in/kat-yeary/');
})

//Nodemailer request
const postReq = (name, email, message) => {
    $.ajax('/mail', {
        method: 'POST',
        data: {
            name: name,
            email: email,
            message: message,
        },
    });
}

// Send the POST request.
$('.mail').on('click', (e) => {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    $('#contact').modal('hide');
    postReq(name, email, message);
    alert('Message sent');
    location.reload();
    /*             if(!this.form.checkbox.checked)
                {
                    alert('You must agree to the terms first.');
                    return false;
                } else { */
    // Reload the page to get the updated list
    // $('#contact').modal('hide');

    //}
    //);
});


