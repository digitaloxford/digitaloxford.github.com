
$(function(){

    /* Main nav slide down */

    $('header nav').on('click', 'a', function(){

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
