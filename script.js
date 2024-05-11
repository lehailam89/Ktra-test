var list = [
    "Tên",
    "Giá",
    "Mô tả sản phẩm",
    "Bán chạy",
    "Giảm giá",
    "Số lượng còn lại"
];

var danhSach = document.getElementById("ds");

danhSach.innerHTML = "<ul>";

for (var i = 0; i < list.length; i++) {
    danhSach.innerHTML += "<li style='list-style-type: none; color: red; text-align: center;'>" + list[i] + "</li>";
  }
danhSach.innerHTML += "</ul>";

var add = document.createElement("p");
add.innerHTML = "Nội dung được thêm mới";
document.body.appendChild(add);