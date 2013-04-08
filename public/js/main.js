(function() {
  define(['jquery', 'ember', 'bootstrap', 'modernizr'], function($, Ember) {
    var i, insertString, insertStrings, strings;

    console.log('RequireJS started!');
    insertStrings = function() {
      var $el, timeout;

      $el = $("#greeting");
      $el.focus();
      return timeout = setTimeout(function() {
        insertString($el, strings[i]);
        i++;
        $el.val("");
        if (i >= strings.length) {
          clearInterval(timeout);
          return $el.val("");
        }
      }, 500);
    };
    insertString = function($el, string) {
      var arr, interval, j;

      arr = string.split("");
      j = 0;
      return interval = setInterval(function() {
        var oldText;

        oldText = $el.val();
        $el.val(oldText + arr[j]);
        j++;
        if (j >= arr.length) {
          clearInterval(interval);
          if (i < strings.length) {
            return insertStrings();
          }
        }
      }, 60);
    };
    $(function() {
      $("[data-toggle=tooltip]").tooltip("show");
      $("a[href='#']").click(function() {
        return false;
      });
      $(".navbar").scrollspy({
        offest: -60
      });
      $(".navbar li a").click(function(e) {
        $("html, body").stop().animate({
          scrollTop: $($(this).attr("href")).offset().top - 60
        }, 300);
        return e.preventDefault();
      });
      return insertStrings();
    });
    strings = ["Hello there!", "Welcome to my website...", "!اﻟﺴﻼﻡ ﻋﻠﻴﻜﻢ", "Anyway...", "Check out some of my music,", "Projects,", "and crafts...", "Enjoy!!! :)"];
    return i = 0;
  });

}).call(this);
