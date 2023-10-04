$(document).ready(function() {
    // Lấy các phần tử có class là 'color_item'
    $('.color_item').click(function() {
        // Lấy alt của phần tử màu được nhấp vào
        var colorName = $(this).attr('alt');
        // Phát âm thanh của từ tương ứng
        responsiveVoice.speak(colorName, "UK English Male");
    });
});
$(document).ready(function() {
    $('.color_item').click(function() {
      // Lấy tên của màu được chọn
      var colorName = $(this).attr('alt');
      // Lấy từ vựng tương ứng với màu từ object
      var vocabulary = colorVocabularies[colorName];
      // Lấy từ vựng tiếng Việt
      var vietnameseVocab = vocabulary['vi'];
      // Tạo nội dung tooltip với cả tiếng Anh và tiếng Việt
      var tooltipContent = colorName.toUpperCase() + ' : ' + vietnameseVocab;
      // Hiển thị tooltip
      $(this).attr('title', tooltipContent).tooltip('show');
      // ghi đè css cho boostrap
      $('.tooltip').css({'font-size': '16px', 'padding': '10px'});
      $('.tooltip-inner').css({'font-size': '16px', 'padding': '10px'});
    });
  });
  
  // Object chứa các từ vựng tương ứng với màu
  var colorVocabularies = {
    'monster': {'vi': 'quái vật'},
    'ghost': {'vi': 'ma'},
    'witch': {'vi': 'phù thủy'},
    'cauldron': {'vi': 'cái vạc'},
    'potion': {'vi': 'độc dược'},
    'dragon': {'vi': 'rồng'},
    'fairy': {'vi': 'tiên'},
    'mermaid': {'vi': 'tiên cá'},
    'werewolf': {'vi': 'người sói'},
    'wizard': {'vi': 'pháp sư'},
    'unicord': {'vi': 'kì lân'},
    'mummy': {'vi': 'xác ướp'},
    'zombie': {'vi': 'thây ma'},
    'giant': {'vi': 'người khổng lồ'},
    'elf': {'vi': 'người lùn'},
    
  };
   
  