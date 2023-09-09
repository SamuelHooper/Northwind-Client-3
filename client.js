$(function(){
    // preload audio
    var toast = new Audio('toast.wav');
    
    $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $('#liveToast').toast({ autohide: false }).toast('hide');
        }
    });

    $('.code').on('click', function(e) {
        e.preventDefault();
        
        // set name
        $('#product-name').text("" + $(this).data("product"));

        // set code
        $('#code').text("" + $(this).data("code"));

        // first pause the audio (in case it is still playing)
        toast.pause();

        // reset the audio
        toast.currentTime = 0;

        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');

    });
});