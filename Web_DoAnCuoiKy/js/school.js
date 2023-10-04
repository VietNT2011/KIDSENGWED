$(document).ready(function(){
    // Lấy các phần tử có class là 'color_item'
    $('.school_item').click(function() {
        // Lấy alt của phần tử nhạc cụ được nhấp vào
        var schoolname = $(this).attr('alt');
        // Phát âm thanh của từ tương ứng
        responsiveVoice.speak(schoolname, "UK English Male");
    });
});
$(document).ready(function() {
    $('.school_item').click(function() {
      // Lấy tên của nhạc cụ được chọn
      var schoolname = $(this).attr('alt');
      // Lấy từ vựng tương ứng với nhạc cụ từ object
      var vocabulary = schoolVocabularies[schoolname];
      // Lấy từ vựng tiếng Việt
      var vietnameseVocab = vocabulary['vi'];
      // Tạo nội dung tooltip với cả tiếng Anh và tiếng Việt
      var tooltipContent = schoolname.toUpperCase() + ' : ' + vietnameseVocab;
      // Hiển thị tooltip
      $(this).attr('title', tooltipContent).tooltip('show');
      // ghi đè css cho boostrap
      $('.tooltip').css({'font-size': '16px', 'padding': '10px'});
      $('.tooltip-inner').css({'font-size': '16px', 'padding': '10px'});
    });
  });
 // Object chứa các từ vựng tương ứng với màu
 var schoolVocabularies = {
    'teacher': {'vi': 'giáo viên'},
    'chalkboard': {'vi': 'bảng đen'},
    'chalk': {'vi': 'phấn'},
    'book': {'vi': 'sách'},
    'book bag': {'vi': 'cặp sách'},
    'backpack': {'vi': 'ba lô'},
    'locker': {'vi': 'tủ đựng đồ'},
    'checkmark': {'vi': 'dấu kiểm tra'},
    'pencil': {'vi': 'bút chì'},
    'highlighter': {'vi': 'bút tô'},
    'mechanical pencil': {'vi': 'bút chì cơ'},
    'pen': {'vi': 'bút'},
    'eraser': {'vi': 'cục tẩy'},
    'ruler': {'vi': 'thước'},
    'pencil sharpener': {'vi': 'đồ gọt bút chì'},
    'note pad': {'vi': 'bìa viết'},
    'spiral notebook': {'vi': 'vở xoắn'},
    'globe': {'vi': 'địa cầu'},
    'ink bottle': {'vi': 'chai mực'},
    'ink': {'vi': 'mực'},
    'scissors': {'vi': 'cây kéo'},
    'crayons': {'vi': 'bút sáp màu'}
    };
    
    
    
    
    
    
    