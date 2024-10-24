var submit = document.getElementById("submit");
var submita = document.getElementById("summit");
function check() {
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("Address").value;
  var city = document.getElementById("City").value;
  var zip = document.getElementById("Zip").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^\d{10,11}$/;
  if (
    email.trim() === "" ||
    phone.trim() === "" ||
    address.trim() === "" ||
    city.trim() === "" ||
    zip.trim() === ""
  ) {
    alert("nhập đủ các ô");
  } else if (!emailPattern.test(email)) {
    alert("Trường thông tin Email phải nhập đúng định dạng Email.");
  } else if (!phonePattern.test(phone)) {
    alert("nhập sđt sai");
  } else {
    alert("thành công");
  }
}
submit.onclick = check;
submita.onclick = check;
