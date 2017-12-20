$(document).ready(function () {

    $(window).scroll(function () {
        let wScroll = $(window).scrollTop()
        $('.mountain').css({ transform: "translate3d(0, " + wScroll / 1.3 + "px, 0)" })
        $('.rocks').css({ transform: "translate3d(0, " + wScroll / 1.7 + "px, 0)" })
        $('.landscape').css({ transform: "translate3d(0, " + (-wScroll / 7) + "px, 0)" })
        $('.forest').css({ transform: "translate3d(0, " + (-wScroll / 10) + "px, 0)" })
    });

    function viewAnimation(targetElement, animation) {
        $(targetElement).addClass(animation);
        setTimeout(function () {
            $(targetElement).removeClass(animation)
        }, 1500)
    }

    function moveMist(img, speed) {
        var i = 0
        setInterval(function () {
            i++
            $(img).css('background-position', i + 'px 0')
        }, speed)
    }

    function randNumber(max, min) {
        return Math.floor(Math.random() * max) - min;
    };

    function randomStrike() {
        var randLightningImage = randNumber(3, 0)
        var randPosition = randNumber(80, 30)
        var randDeg = randNumber(60, 30)
        var url = 'assets/img/light' + randLightningImage + '.png'
        $('.lightning').css('background-image', 'url(' + url + ')')
        $('.lightning').css({
            'left': randPosition + '%',
            'transform': 'rotate(' + randDeg + 'deg)'
        });
    }

    function anchorScroll(){
        $('a[href*="#"]:not([href="#"])').click(function(e){
            console.log('wefwe');
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){

                var target = $(this.hash);
                if(e.currentTarget.className != 'arrow-bottom'){
            }
        
            target = target.length ? target:$('[name='+this.hash.slice(1)+']');
            if(target.length){$('html, body').animate({
                    scrollTop:target.offset().top
                },2500);
            
                return false;
            }}
        });
    }

    moveMist('.mist.front', 100);
    moveMist('.mist.back', 30);

    anchorScroll();

    setInterval(function () {
        viewAnimation('.lightning', 'strike');
        viewAnimation('.thunder', 'flash');
        randomStrike();
    }, 3000)
});
