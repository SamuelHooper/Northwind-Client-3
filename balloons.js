$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // randomize attention seeker
    let animations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
    let randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    $('.birthday-header').addClass('animate__' + randomAnimation);

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-balloon').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // toast
    $('#submit').on('click', function(e) {
        e.preventDefault();
        
        if ($('.form-balloon').not(':checked').length == 3) {
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });

    // dismis on escape key press
    $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $('#liveToast').toast({ autohide: false }).toast('hide');
        }
    });

    // all balloons checkbox
    $('#all').on('change', function () {
        $(this).is(':checked') ?
        $('.form-balloon').each(function () {
            $(this).prop('checked', true);
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
        }) :
        $('.form-balloon').each(function () {
            $(this).prop('checked', false);
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
    });

    // hover red
    $('.form-hover-red').hover(
        function(){
            $('.birthday-header').css({color: 'red'}); //mouseover
        },
        function(){
             $('.birthday-header').css({color:'slategray'}); // mouseout
        }
    );

    // hover green
    $('.form-hover-green').hover(
        function(){
            $('.birthday-header').css({color: 'green'}); //mouseover
        },
        function(){
                $('.birthday-header').css({color:'slategray'}); // mouseout
        }
    );

    // hover blue
    $('.form-hover-blue').hover(
        function(){
            $('.birthday-header').css({color: 'blue'}); //mouseover
        },
        function(){
             $('.birthday-header').css({color:'slategray'}); // mouseout
        }
    );
});