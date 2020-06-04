$(function() {
    //loading test
    function show_me_test() {
        $('div.test_area .question_counter').hide();
        $('div.test_area').fadeIn('fast');
    }


    var changeScene = function (znak) {
      $('#screen-first').hide();
      $('#screen-second').show();
      $('.znak_name').text(znak);
      $('html,body').animate({
        scrollTop: $('html').offset().top
        }, 1);
    }


    //choosing sign
    $(".circle .znak").click(function() {
        var znak_name = $(this).find('span').text();
        var zid = $(this).attr('id') || 2;
        znak_name = znak_name.replace(/\(.*?\)/ig, '');
        zid = zid.replace(/^z/g, '');
        $(this).addClass('active_sign');
        $("div.circle").removeClass('bright_sign');
        $(".circle .znak").css({
            cursor: 'default'
        }).not('.active_sign').fadeTo("fast", 0.30).find('span').hide();
        $('#znak_id').text(znak_name);
        $('.circle_text, div.logo').fadeOut('fast', function() {
            $('div.test_area .question_counter').hide();
            $('div.first').fadeIn('fast', function(){
            $('html,body').animate({
              scrollTop: $('.test_area').offset().top -80
              }, 1000);
            });
        });
        $('#next_button').attr("zid", zid);
        $('#next_button').click(function() {
            $('.first').hide();
            $('.third').fadeIn('fast');
        });
        $('#next_button3').click(function() {
            $('.third').hide();
            $('.fourth').fadeIn('fast');
        });
        $('#next_button4').click(function() {
            $('.fourth').hide();
            $('.fifth').fadeIn('fast');
            setTimeout(function(){
              changeScene(znak_name);
            }, 1000);
        });
    });

    $('.go_back').click(function(){
      $(".znak").removeClass('active_sign').fadeTo("fast", 1).find('span').css('display', 'block');
      $('.test_area ').hide();
    });

    var sumgor = parseInt($('#sumgor').text());
    setInterval(
        function() {
            var number = sumgor + Math.floor(Math.random() * 50);
            $('#sumgor').text(number);
        },
        20000);


    $('.next_month').text(writeDate(-30 , months3))
})

var months  = ['января','фeвраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
var months2 = ['январе','фeврале','марте','апреле','мае','июне','июле','августе','сентябре','октябре','ноябре','декабре'];
var months3 = ['январь','фeвраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];

var writeDate = function(offset, monthArray){
    var dateNow = new Date();
    var requiredDate = new Date(dateNow.getTime() - offset * 86400000);
    return (monthArray[requiredDate.getMonth()] + ' ' + requiredDate.getFullYear());
}