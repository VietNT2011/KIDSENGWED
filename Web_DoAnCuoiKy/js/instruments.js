$(document).ready(function(){
    // Lấy các phần tử có class là 'color_item'
    $('.instruments_item').click(function() {
        // Lấy alt của phần tử nhạc cụ được nhấp vào
        var istrumentname = $(this).attr('alt');
        // Phát âm thanh của từ tương ứng
        responsiveVoice.speak(istrumentname, "UK English Male");
    });
});
$(document).ready(function() {
    $('.instruments_item').click(function() {
      // Lấy tên của nhạc cụ được chọn
      var instrumentname = $(this).attr('alt');
      // Lấy từ vựng tương ứng với nhạc cụ từ object
      var vocabulary = instrumentVocabularies[instrumentname];
      // Lấy từ vựng tiếng Việt
      var vietnameseVocab = vocabulary['vi'];
      // Tạo nội dung tooltip với cả tiếng Anh và tiếng Việt
      var tooltipContent = instrumentname.toUpperCase() + ' : ' + vietnameseVocab;
      // Hiển thị tooltip
      $(this).attr('title', tooltipContent).tooltip('show');
      // ghi đè css cho boostrap
      $('.tooltip').css({'font-size': '16px', 'padding': '10px'});
      $('.tooltip-inner').css({'font-size': '16px', 'padding': '10px'});
    });
  });
 // Object chứa các từ vựng tương ứng với màu
 var instrumentVocabularies = {
    'harp': {'vi': 'Đàn hạc'},
    'saxophone': {'vi': 'Kèn saxophone'},
    'drum': {'vi': 'Trống'},
    'electric guitar': {'vi': 'Guitar điện'},
    'guitar': {'vi': 'Guitar'},
    'piano': {'vi': 'Đàn piano'},
    'violin': {'vi': 'Đàn violin'},
    'tuba': {'vi': 'Tuba'},
    'trumpet': {'vi': 'Kèn trumpet'}
};
  