$(document).ready(function(){
    // Lấy các phần tử có class là 'color_item'
    $('.landscapes_item').click(function() {
        // Lấy alt của phần tử nhạc cụ được nhấp vào
        var landscapename = $(this).attr('alt');
        // Phát âm thanh của từ tương ứng
        responsiveVoice.speak(landscapename, "UK English Male");
    });
});
$(document).ready(function() {
    $('.landscapes_item').click(function() {
      // Lấy tên của nhạc cụ được chọn
      var landscapename = $(this).attr('alt');
      // Lấy từ vựng tương ứng với nhạc cụ từ object
      var vocabulary = landscapesVocabularies[landscapename];
      // Lấy từ vựng tiếng Việt
      var vietnameseVocab = vocabulary['vi'];
      // Tạo nội dung tooltip với cả tiếng Anh và tiếng Việt
      var tooltipContent = landscapename.toUpperCase() + ' : ' + vietnameseVocab;
      // Hiển thị tooltip
      $(this).attr('title', tooltipContent).tooltip('show');
      // ghi đè css cho boostrap
      $('.tooltip').css({'font-size': '16px', 'padding': '10px'});
      $('.tooltip-inner').css({'font-size': '16px', 'padding': '10px'});
    });
  });
 // Object chứa các từ vựng tương ứng với màu
 var landscapesVocabularies = {
    'forest': {'vi': 'Rừng'},
    'desert': {'vi': 'Sa mạc'},
    'jungle': {'vi': 'Rừng nhiệt đới'},
    'canyon': {'vi': 'Hẻm núi đá'},
    'cliff': {'vi': 'Vách đá'},
    'mountain': {'vi': 'Núi'},
    'hill': {'vi': 'Đồi'},
    'volcano': {'vi': 'Núi lửa'},
    'cave': {'vi': 'Hang động'},
    'river': {'vi': 'Sông'},
    'waterfall': {'vi': 'Thác nước'},
    'lake': {'vi': 'Hồ'},
    'dam': {'vi': 'Đập'},
    'pond': {'vi': 'Ao'}
};