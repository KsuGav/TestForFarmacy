/**
 * Created by Ksu on 25.08.2016.
 */
$(document).ready(function() {
    //call parallax function
    $(function() {
        var $pxs_container	= $('#pxs_container');
        $pxs_container.parallaxSlider();
    });

    //animate contact form
    $('#btnForm').click(function(){
        var imgForm = $('<img src="src/img/msg2.png"/>');
        var textForm = $('<p></p>').text('Tadam! Your form was send');
        $('#changeForm').append(imgForm,textForm)
        .show().animate({height: "250px"}, 900);
        $('#form').animate({height: "0px"}, 900);
        setTimeout(function () {
            $('#form').remove();
        }, 800);
    });

    //scroll to bottom page
    //$('#btnDown').click(function(){
    //    $('html, body').animate({
    //            scrollTop: $(document).height()-$(window).height()},
    //        1400,
    //        "easeOutQuint"
    //    );
    //})

    //scroll to the next container
    var $page = $('html, body');
    $('#btnDown').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1400,"easeOutQuint");
        return false;
    });

    //animate scroll nav
    $(".nav li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $page.animate({scrollTop: destination }, 1600,"easeOutQuint");
    });

    //animate users images
    $('.thumbnail').bind('mouseenter',function(){
        $(this).stop().animate({top:'-5px',opacity:1},100);
    }).bind('mouseleave',function(){
        $(this).stop().animate({top:'0px',opacity:0.7},100);
    });

    //
    $('.thumbnail').click(function(){
        sliderIndex = ($('.thumbnail').index($(this)));
        console.log(sliderIndex);

    });
})