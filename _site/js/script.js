
$(function(){

    /* Scroll-to function */

    function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;

        $('body,html').animate({
                scrollTop: totalScroll
        }, 500);
    }

    /* Main nav slide down */

    $('header nav').on('click', 'a', function(e){
        var el = $(this).attr('href');
        var elWrapped = $(el);

        scrollToDiv(elWrapped,40);

        $(elWrapped).find('.hidden-post').slideDown().siblings('.more-link').find('a').addClass('expanded');

        // Toggle text for more details / expandable links

        var moreEvents = $('#events .more-link a');

        if($(moreEvents).hasClass('expanded')) {
            $(moreEvents).text('Fewer events');
        } else {
            $(moreEvents).text('More events');
        }

        var moreJobs = $('#jobs .more-link a');

        if($(moreJobs).hasClass('expanded')) {
            $(moreJobs).text('Fewer jobs');
        } else {
            $(moreJobs).text('More jobs');
        }


        e.preventDefault();
    });

    /* Expand / hide sections */

    $('.more-link').on('click', 'a.expand', function(e){
        e.preventDefault();
        var hey = $(this).parents('.more-link').siblings('.hidden-post').slideToggle();
        $(this).toggleClass('expanded');
    });



    $('#events .more-link').on('click', 'a', function(e){
        if($(this).hasClass('expanded')) {
            $(this).text('Fewer events');
        } else {
            $(this).text('More events');
        }

    });

    $('#jobs .more-link').on('click', 'a', function(e){
        if($(this).hasClass('expanded')) {
            $(this).text('Fewer jobs');
        } else {
            $(this).text('More jobs');
        }

    });


   
});
