var source = $('#card-template').html();
var template = Handlebars.compile(source);
var data = {
  'start': {
    id: 'start',
    title: 'Welcome',
    body: '<p>A strange man, dressed in a trenchcoat and with wild hair stops you on your way home. He asks, "If you could bring an amial back to life, what would it be?"</p>',
    choice: [
      { next: 'ignore', text: 'Ignore Him'},
      { next: 'dino', text: 'A Dinosaur!'},
      { next: 'bird', text: 'A Bird!'},
      { next: 'mammal', text: 'A Mammal!'}
    ]
  },
  'ignore': {
    id: 'ignore',
    title: 'Ignore Him!',
    body: '<p>You ignore the man, and go on with the rest of your day. "What a creep!"</p>',
    choice: [
    ]
  },
  'dino': {
    id: 'dino',
    title: 'A Dinosaur!',
    body: '<p>The man responds, "Interesting! What kind of dinosaur?"</p>',
    choice: [
      { next: 'trex', text: 'A T-Rex!'},
      { next: 'raptor', text: 'A Velociraptor!'},
      { next: 'bronto', text: 'A Brontosaurus!'}
    ]
  },
  'bird': {
    id: 'bird',
    title: 'A Bird!',
    body: '<p>The man responds, "Interesting! What kind of bird?"</p>',
    choice: [
      { next: 'para', text: 'A Carolina Parakeet!'},
      { next: 'dodo', text: 'A Dodo!'},
      { next: 'moa', text: 'A Giant Moa!'}
    ]
  },
  'mammal': {
    id: 'mammal',
    title: 'A Mammal!',
    body: '<p>The man responds, "Kinda boring, but okay. What kind of mammal?"</p>',
    choice: [
      { next: 'wooly', text: 'A Wooly Mammoth!'},
      { next: 'taz', text: 'A Tasmanian Tiger!'},
      { next: 'sabre', text: 'A Sabretoothed Tiger!'}
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
  var html = template(data['start']);
  $('.wrapper').append(html);

  $('[id*="-btn"]').on('click', function () {
    var next = $(this).attr('href').slice(1);
    console.log(next);
    html = template(data[next]);
    console.log(html);
    $('.wrapper').append(html);
    $(this).addClass('selected');
    $(this).closest('.choices').addClass('disabled');
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
