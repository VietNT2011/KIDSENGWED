    var fileInput = document.getElementById('avatar');
    var currentAvatar = document.getElementById('current-avatar');
    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            currentAvatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
    // Lấy thẻ a có id là "change_avatar"
    var changeAvatarButton = document.getElementById('change_avatar');

    // Lấy thẻ input có id là "avatar-input"
    var avatarInput = document.getElementById('avatar-input');

    // Thêm sự kiện click cho thẻ a "change_avatar"
    changeAvatarButton.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn mặc định của sự kiện click
        avatarInput.click(); // Trigger sự kiện click của thẻ input "avatar-input"
    });

    // Thêm sự kiện change cho thẻ input "avatar-input"
    avatarInput.addEventListener('change', function() {
        // Lấy file ảnh đang được chọn
        var selectedFile = avatarInput.files[0];

        // Tạo đối tượng FileReader để đọc file ảnh
        var reader = new FileReader();

        // Đặt sự kiện load cho đối tượng FileReader
        reader.onload = function() {
            // Thay đổi ảnh hiện tại với ảnh mới
            document.getElementById('current-avatar').setAttribute('src', reader.result);
        };

        // Đọc file ảnh
        reader.readAsDataURL(selectedFile);
    });


    // Lấy thẻ <a> có id là "change_avatar"
var changeAvatar = document.getElementById("change_avatar");

// Lắng nghe sự kiện "change" của input file
document.getElementById("avatar").addEventListener("change", function() {
  // Khi có sự kiện "change", thay đổi nội dung của thẻ <a>
  changeAvatar.innerHTML = "Lưu thay đổi";
});

// Lắng nghe sự kiện click của thẻ <a> có id là "change_avatar"
changeAvatar.addEventListener("click", function(event) {
  // Ngăn chặn hành động mặc định của thẻ <a>
  event.preventDefault();
  
  // Lấy dữ liệu ảnh
  var formData = new FormData();
  formData.append('avatar', document.getElementById("avatar").files[0]);
  
  // Gửi dữ liệu lên server để lưu ảnh vào cơ sở dữ liệu
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'upload_avatar.php', true);
  xhr.onload = function() {
    // Nếu lưu thành công, thay đổi ảnh hiển thị bằng ảnh mới
    if (xhr.status === 200) {
      var newAvatarUrl = xhr.responseText;
      document.getElementById("current-avatar").src = newAvatarUrl;
    }
    
    // Thay đổi nội dung của thẻ <a> trở lại
    changeAvatar.innerHTML = "Thay đổi ảnh đại diện";
  };
  xhr.send(formData);
});
