/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
$(document).ready(function(){
   $(window).scroll(function() {
      $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("aslide");
      }
  });
});


var off=$(document).scrollTop();
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

if (off>100) {
  spanizeLetters.init();
}
console.log(off);
});
