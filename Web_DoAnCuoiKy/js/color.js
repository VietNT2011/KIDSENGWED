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
    'red': {'vi': 'Đỏ'},
    'green': {'vi': 'Xanh lá cây'},
    'blue': {'vi': 'Xanh dương'},
    'white': {'vi': 'Trắng'},
    'black': {'vi': 'Đen'},
    'yellow': {'vi': 'Vàng'},
    'orange': {'vi': 'Cam'},
    'pink': {'vi': 'Hồng'},
    'brown': {'vi': 'Nâu'},
    'beige': {'vi': 'Be'},
    'gray': {'vi': 'Xám'},
    'light blue': {'vi': 'Xanh nhạt'},
    'dark green': {'vi': 'Xanh lục đậm'},
    'purple': {'vi': 'Tím'},
    'violet': {'vi': 'Chàm'},
    'navy blue': {'vi': 'Xanh đậm'},
    'turquoise': {'vi': 'Xanh ngọc'},
    'maroon': {'vi': 'Đỏ sẫm'},
    'magenta': {'vi': 'Đỏ tía'}
  };
   
  