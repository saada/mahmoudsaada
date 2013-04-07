// Some general UI pack related JS

$(function () {
    // Custom selects
    $("select").dropkick();

    // Todo list
    $(".todo li").click(function() {
        $(this).toggleClass("todo-done");
    });

    // Init tooltips
    $("[data-toggle=tooltip]").tooltip("show");

    // Init tags input
    $("#tagsinput").tagsInput();

    // Init jQuery UI slider
    $("#slider").slider({
        min: 1,
        max: 5,
        value: 2,
        orientation: "horizontal",
        range: "min"
    });

    // JS input/textarea placeholder
    $("input, textarea").placeholder();

    // Make pagination demo work
    $(".pagination a").click(function() {
        if (!$(this).parent().hasClass("previous") && !$(this).parent().hasClass("next")) {
            $(this).parent().siblings("li").removeClass("active");
            $(this).parent().addClass("active");
        }
    });

    $(".btn-group a").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    // Disable link click not scroll top
    $("a[href='#']").click(function() {
        return false;
    });

    $('.navbar').scrollspy({offest: -60});
    $('.navbar li a').click(function(e) {
        // scrollBy(0, -60);
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-60
        }, 300);
        e.preventDefault();
    });
    insertStrings();
});

var strings = [
    "Hello there!",
    "Welcome to my website...",
    "!اﻟﺴﻼﻡ ﻋﻠﻴﻜﻢ",
    "Anyway...",
    "Check out some of my music,",
    "Projects,",
    "and crafts...",
    "Enjoy!!! :)"
];
var i = 0;
function insertStrings() {
    $el = $('#greeting');
    $el.focus();

    var timeout = setTimeout(function() {
        insertString($el, strings[i]);
        i++;
        $el.val('');
        if(i >= strings.length) {
            clearInterval(timeout);
            $el.val('');
        }
    }, 500);
}

function insertString($el, string) {
    var arr = string.split('');
    var j = 0;
    var interval = setInterval(function() {
        var oldText = $el.val();
        $el.val(oldText+arr[j]);
        j++;
        if(j >= arr.length){
            clearInterval(interval);
            if(i < strings.length)
                insertStrings();
        }
    }, 60);
}