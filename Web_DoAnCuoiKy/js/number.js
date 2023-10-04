$(document).ready(function() {
    
    $('.number_item').click(function() {
        var numberName = $(this).attr('alt');
        responsiveVoice.speak(numberName, "UK English Male");
    });
});
$(document).ready(function() {
    $('.number_item').click(function() {
      var numberName = $(this).attr('alt');
      var vocabulary = numberVocabularies[numberName];
      var vietnameseVocab = vocabulary['vi'];
      var tooltipContent = numberName.toUpperCase() + ' : ' + vietnameseVocab;
      $(this).attr('title', tooltipContent).tooltip('show');
      $('.tooltip').css({'font-size': '16px', 'padding': '10px'});
      $('.tooltip-inner').css({'font-size': '16px', 'padding': '10px'});
    });
  });
  var numberVocabularies = {
    'one': {'vi': 'Một'},
    'two': {'vi': 'Hai'},
    'three': {'vi': 'BA'},
    'four': {'vi': 'Bốn'},
    'five': {'vi': 'Năm'},
    'six': {'vi': 'Sáu'},
    'seven': {'vi': 'Bảy'},
    'eight': {'vi': 'Tám'},
    'nine': {'vi': 'Chín'},
    'ten': {'vi': 'Mười'},
    'eleven': {'vi': 'Mười một'},
    'twelve': {'vi': 'Mười hai'},
    'thirteen': {'vi': 'Mười ba'},
    'fourteen': {'vi': 'Mười bốn'},
    'fifteen': {'vi': 'Mười lăm'},
    'sixteen': {'vi': 'Mười sáu'},
    'seventeen': {'vi': 'Mười bảy'},
    'eighteen': {'vi': 'Mười tám'},
    'nineteen': {'vi': 'Mười chín'},
    'twenty': {'vi': 'Hai mươi'},
  };