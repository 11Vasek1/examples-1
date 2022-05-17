jQuery.fn.extend({
    onAppearanceAddClass: function(class_to_add) {
        var $window = $( window ),
            window_height = $window.height(),
            array_of_$elements = [];
        this.each(function(i,el) {
            array_of_$elements.push($( el ));
        })
        scrollHandler();
        if (array_of_$elements.length) {
            $window.on('resize', resizeHandler).on('resize', scrollHandler).on('scroll', scrollHandler);
        }
        function resizeHandler() {
            window_height = $window.height();
        }
        function watchProcessedElements(array_of_indexes) {
            var l, i;
            for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
                array_of_$elements.splice(array_of_indexes[i], 1);
            }
            if (!array_of_$elements.length) {
                $window.off('resize', resizeHandler).off('scroll', scrollHandler).off('resize', scrollHandler);
            }
        }
        function scrollHandler() {
            var i, l, processed = [];
            for ( l = array_of_$elements.length, i = 0; i < l; ++i ) {
                if ($window.scrollTop() + window_height > array_of_$elements[i].offset().top) {
                    array_of_$elements[i].addClass(class_to_add);
                    processed.push(i); 
                }
            }
            if (processed.length) {
            watchProcessedElements(processed);
            }
        }
        return this;
    }
})

$('.fadeIn_hide').onAppearanceAddClass('fadeIn_show');
$('.stick_hide').onAppearanceAddClass('stick_show');
$('.small_svg_wrapper').onAppearanceAddClass('small_svg_wrapper_running');
$('.svg_circle').onAppearanceAddClass('svg_circle_play')

$('.svg_circle_text').onAppearanceAddClass('fadeIn_show')

function makeBlink(){
    let dots = $('.small_blink')
    dots.each((index, element)=>{
        $(element).css('transition-delay', '0s')
        setInterval(()=>{
            $(element).toggleClass('small_blink_on')
        },1000)
    })
}
makeBlink();

// ----------------------------------------------------------------------------


function menuFilterOn(){
    let filter = $('.menu_filter').addClass('on')
}

function menuFilterOff(){
    let filter = $('.menu_filter').removeClass('on')
}

function bodyUnscroll(){
    $('body').css('overflow', 'hidden')
}

function bodyScroll(){
    $('body').css('overflow', '')
}

function _menuOn(){
    $('.menu_container').addClass('on')
}

function _menuOff(){
    $('.menu_container').removeClass('on')
}

function rightMarginFixOn(){
    // $('body').css('margin-right', '16px')
    $('body').addClass('margin_fix')
}

function rightMarginFixOff(){
    // $('body').css('margin-right', '')
    $('body').removeClass('margin_fix')
}

function menuOn(){
    _menuOn();
    bodyUnscroll();
    menuFilterOn();
    rightMarginFixOn();
}

function menuOff(){
    _menuOff();
    bodyScroll();
    menuFilterOff();
    rightMarginFixOff();
}

function popupOn(){
    _popupOn();
    bodyUnscroll();
}

function _popupOn(){
    $('.popup_container').addClass('popup_container_show')
}

function popupOff(){
    _popupOff()
    bodyScroll()

}

function _popupOff(){
    $('.popup_container').removeClass('popup_container_show')
}

//menuOn()



