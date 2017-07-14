/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
var winTop=10;

$(document).ready(function(){
   $(window).scroll(function() {
      $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 900) {
        $(this).addClass("aslide");
      }

});
});
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };

  spanizeLetters.init();
});
