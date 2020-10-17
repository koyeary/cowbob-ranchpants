    
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
               // $('#contact').modal('toggle');
            }
        ); 
    });

    $('.resume').on('click', function() {
        $.ajax('/resume', {
            method: 'GET'
        }).then(
            function() {
                console.log('loaded');
            }
        )
    })

