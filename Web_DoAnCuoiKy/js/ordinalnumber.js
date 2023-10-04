$(document).ready(function() {
    
    $('.ordinalnumber_item').click(function() {
        var ordinalnumberName = $(this).attr('alt');
        responsiveVoice.speak(ordinalnumberName, "UK English Male");
    });
});
$(document).ready(function() {
    $('.ordinalnumber_item').click(function() {
      var ordinalnumberName = $(this).attr('alt');
      var vocabulary = ordinalnumberVocabularies[ordinalnumberName];
      var vietnameseVocab = vocabulary['vi'];
      var tooltipContent = ordinalnumberName.toUpperCase() + ' : ' + vietnameseVocab;
      $(this).attr('title', tooltipContent).tooltip('show');
      $('.tooltip').css({'font-size': '16px', 'padding': '10px'});
      $('.tooltip-inner').css({'font-size': '16px', 'padding': '10px'});
    });
  });
  var ordinalnumberVocabularies = {
    'first': {'vi': 'Thứ nhất'},
    'second': {'vi': 'Thứ hai'},
    'third': {'vi': 'Thứ ba'},
    'fourth': {'vi': 'Thứ tư'},
    'fifth': {'vi': 'Thứ năm'},
    'sixth': {'vi': 'Thứ sáu'},
    'seventh': {'vi': 'Thứ bảy'},
    'eighth': {'vi': 'Thứ tám'},
    'ninth': {'vi': 'Thứ chín'},
    'tenth': {'vi': 'Thứ mười'},
    'eleventh': {'vi': 'Thứ mười một'},
    'twelfth': {'vi': 'Thứ mười hai'},
    'thirteenth': {'vi': 'Thứ mười ba'},
    'fourteenth': {'vi': 'Thứ mười bốn'},
    'fifteenth': {'vi': 'Thứ mười lăm'},
    'sixteenth': {'vi': 'Thứ mười sáu'},
    'seventeenth': {'vi': 'thứ mười bảy'},
    'eighteenth': {'vi': 'Thứ mười tám'},
    'nineteenth': {'vi': 'Thứ mười chín'},
    'twentieth': {'vi': 'Thứ hhai mươi'},
  };