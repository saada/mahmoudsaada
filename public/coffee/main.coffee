define ['jquery','ember','bootstrap','modernizr'], ($, Ember) ->
  console.log 'RequireJS started!'

  insertStrings = ->
    $el = $("#greeting")
    $el.focus()
    timeout = setTimeout(->
      insertString $el, strings[i]
      i++
      $el.val ""
      if i >= strings.length
        clearInterval timeout
        $el.val ""
    , 500)
  insertString = ($el, string) ->
    arr = string.split("")
    j = 0
    interval = setInterval(->
      oldText = $el.val()
      $el.val oldText + arr[j]
      j++
      if j >= arr.length
        clearInterval interval
        insertStrings()  if i < strings.length
    , 60)
  
  # DOM ready
  $ ->
    # Init tooltips
    $("[data-toggle=tooltip]").tooltip "show"

    # Disable link click not scroll top
    $("a[href='#']").click ->
      false

    # scrollBy(0, -60);
    $(".navbar").scrollspy offest: -60
    $(".navbar li a").click (e) ->
      $("html, body").stop().animate
        scrollTop: $($(this).attr("href")).offset().top - 60
      , 300
      e.preventDefault()

    insertStrings()

  strings = ["Hello there!", "Welcome to my website...", "!اﻟﺴﻼﻡ ﻋﻠﻴﻜﻢ", "Anyway...", "Check out some of my music,", "Projects,", "and crafts...", "Enjoy!!! :)"]
  i = 0  