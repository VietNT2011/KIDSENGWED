var chinhsua2 = document.getElementById("chinhsua2");
var fullnameDiv = document.getElementById("fullname");

chinhsua2.addEventListener("click", function() {
  console.log("Clicked");
  
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", "");

  fullnameDiv.textContent = "";
  fullnameDiv.appendChild(input);

  input.focus();

  input.addEventListener("blur", function() {
    var text = this.value.trim();

    if (text === "") {
      fullnameDiv.textContent = "Full Name";
    } else {
      fullnameDiv.textContent = text;
    }
  });
});

document.getElementById("chinhsua2").addEventListener("click", function(event) {
    event.preventDefault();
    // Do something else
});
