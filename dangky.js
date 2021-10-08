var nguoidung2 = [];
window.onload = function () {
  kocg();
};
function bam() {
  check();
  chay();
}
function check() {
  var ten = $(".input1").val();
  var mk = $(".input2").val();
  var laimk = $(".input3").val();
  if (ten == "" || mk == "" || laimk == "") {
    return "a";
  } else if (mk != laimk) {
    return "b";
  } else if (localStorage.getItem("nguoidung2") === null) {
    return "c";
    // nếu ko có dữ liệu
  } else {
    //localstorage có dữ liệu
    let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
    nguoidung2 = JSON.parse(nguoidung2); //chuyển về mảng

    //vòng lặp

    for (element of nguoidung2) {
      if (ten === element.ten) {
        return "d";
      }
    }

    //khi chạy hết vòng lặp mà không trùng thì return true; tức là tendangnhap đó có thể dùng được
    return "e";
  }
}
function chay() {
  let ten = $(".input1").val();
  var mk = $(".input2").val();
  var laimk = $(".input3").val();
  if (check() == "a") {
    const ten = `<p class="ochua">*Bạn chưa nhập đủ thông tin đăng ký<p>`;
    $(".ochua").replaceWith(ten);
  } else if (check() == "b") {
    const ten = `<p class="ochua">*Mật khẩu không trùng khớp<p>`;
    $(".ochua").replaceWith(ten);
  } else if (check() == "d") {
    const tenn = `<p class="ochua">*Trùng tên đăng nhập<p>`;
    $(".ochua").replaceWith(tenn);
  } else if (check() == "c") {
    const tenn = `<p class="ochua">*Tạo tài khoản thành công<p>`;

    $(".ochua").replaceWith(tenn);
    const luu = {
      ten: ten,
      mk: mk,
      value: [],
      datcho: [],
    };
    $(".ok").attr("href", "dangnhap.html");
    nguoidung2.push(luu);
    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  } else if (check() == "e") {
    nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
    nguoidung2 = JSON.parse(nguoidung2);
    const tenn = `<p class="ochua">*Tạo tài khoản thành công<p>`;
    $(".ok").attr("href", "dangnhap.html");
    $(".ochua").replaceWith(tenn);
    const luu = {
      ten: ten,
      mk: mk,
      value: [],
      datcho: [],
    };

    nguoidung2.push(luu);
    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function kocg() {
  if (localStorage.check == 1) {
    $("body").remove();
  }
}
