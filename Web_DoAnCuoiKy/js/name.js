var chinhsua1 = document.getElementById("chinhsua1");
var nameDiv = document.getElementById("name");

chinhsua1.addEventListener("click", function() {
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", "");

  nameDiv.textContent = "";
  nameDiv.appendChild(input);

  input.focus();

  var warning = document.createElement("div");
  warning.innerHTML = "Tên tài khoản không được chứa khoảng trắng, ký tự đặc biệt và dấu câu.";
  warning.style.display = "none"; // Ẩn ban đầu
  nameDiv.appendChild(warning);

  input.addEventListener("blur", function() {
    var text = this.value.trim();

    if (text === "") {
      nameDiv.textContent = "Name";
    } else if (!/^[a-zA-Z0-9]*$/.test(text)) {
      warning.style.display = "block";
      this.focus();
    } else {
      nameDiv.textContent = text;
      warning.style.display = "none";
    }
  });
});



document.getElementById("chinhsua1").addEventListener("click", function(event) {
    event.preventDefault();
    // Do something else
  });
  