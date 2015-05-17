var $letters = $('.letters');
var $container = $('.container');
var $textField = $('#textfield').find('input');

$textField.on('input', function(event) {
  var contents = event.target.value.replace(/[^A-Za-z]+?/g, '').split('')
    .reduce(function(set, char, i) {
      if (set.indexOf(char.toLowerCase()) < 0) {
        set.push(char.toLowerCase());
      }
      return set;
    }, []);

    $letters.detach();
    $letters.find('span').each(function(index) {
      var $this = $(this);
      if (contents.indexOf($this.attr('id')) >= 0) {
        $this.css({visibility: 'hidden'});
      } else {
        $this.css({visibility: 'visible'});
      }
    });
    $letters.prependTo($container);

});