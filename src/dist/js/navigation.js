$( document ).ready(function() {
    $('.btn-nav').click(function(){

        $(this).toggleClass( 'active' );
        $('nav').toggleClass( 'active' );
    })

    $('.nav-link').click(function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        // setTimeout(function(){
        //     $('nav').removeClass( 'active' );
        // }, 500)

    })
});