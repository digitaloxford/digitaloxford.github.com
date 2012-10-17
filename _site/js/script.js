
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

        $(elWrapped).find('.hidden').slideDown().siblings('.more-link').find('a').addClass('expanded');

        e.preventDefault();
    });

    /* Expand / hide sections */

    $('.more-link').on('click', 'a', function(e){
        e.preventDefault();
        var hey = $(this).parents('.more-link').siblings('.hidden').slideToggle();

        $(this).toggleClass('expanded');

    });

    $('#jobs .more-link').on('click', 'a', function(e){


    });


    /* Twitter feed */

    $.getJSON('http://search.twitter.com/search.json?q=from:digital_oxford&callback=?')
    .pipe(function(data){
        return (data.results || []).slice(0,3)
    })
    .then(function(tweets){
        var tweetlis = $.map(tweets, function(tweet){
            var $li = $('<li class="col">').text(tweet.text).append(' ');

            var d = new Date(tweet.created_at);

            var day = d.getDate();
            var month = "J F M A M J J A S October N D".split(' ')[d.getMonth()];
            var year = d.getFullYear();

            var $a = $('<a>',{href:'https://twitter.com/digital_oxford/status/' + tweet.id_str})
                        .text(day + ' ' + month + ' ' + year);// todo - format date

            $a.appendTo($li);
            return $li;
        });

        $('#tweet-panel').empty().append(tweetlis);
    });


});
