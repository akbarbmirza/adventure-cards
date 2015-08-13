var source = $('#card-template').html();
var template = Handlebars.compile(source);
var data = {
  'welcome': {
    title: 'Welcome',
    body: '<p>You wake up in a room! You see a door and a window. Which do you use?</p>',
    choice: [
      { next: 'window', text: 'Go to the Window'},
      { next: 'door', text: 'Open the door'}
    ]
  },
  'window': {
    id: 'window',
    title: 'The Window',
    body: '<p>You see a beautiful world outside!</p>',
    choice: [
      { next: 'sleep', text: 'Go to sleep'},
      { next: 'smile', text: 'Smile'}
    ]
  }
};

Handlebars.registerHelper('list', function (context, options) {
  var ret = '<ul>';

  for (var i = 0, len = context.length; i < len; i++) {
    ret += '<li>' + options.fn(context[i]) + '</li>';
  }

  return ret + '</ul>';
});

$(document).ready(function () {
  $('[id*="-btn"]').on('click', function () {
    var next = $(this).attr('href').slice(1);
    console.log(next);
    var html = template(data[next]);
    console.log(html);
    $('.wrapper').append(html);
  });
});

/* Start Smooth Scroll
Source for Code Snippet:
https://css-tricks.com/snippets/jquery/smooth-scrolling/
*/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/* End Smooth Scroll */
