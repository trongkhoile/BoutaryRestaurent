window.onload = function () {
  ok();
};
function bam() {
  check();
}

function check() {
  let ten = $(".input1").val();
  var mk = $(".input2").val();

  if (ten == "" || mk == "") {
    const tenn = `<p class="ochua">*Bạn chưa nhập đủ thông tin đăng nhập<p>`;

    $(".ochua").replaceWith(tenn);
  } else {
    //localstorage có dữ liệu
    let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
    nguoidung2 = JSON.parse(nguoidung2); //chuyển về mảng

    //vòng lặp
    nguoidung2 = nguoidung2 || [];
    for (let i = 0; i < nguoidung2.length; i++) {
      if (ten == nguoidung2[i].ten && mk == nguoidung2[i].mk) {
        localStorage.setItem("index", i);

        localStorage.setItem("check", 1);
        $(".chuyen").attr("href", "index.html");
        const tenn = `<p class="ochua">*Đăng nhập thành công<p>`;
        $(".ochua").replaceWith(tenn);

        $(".dk").attr("href", "index.html");
      } else if (ten != nguoidung2[i].ten && mk != nguoidung2[i].mk) {
        let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
        nguoidung2 = JSON.parse(nguoidung2); //chuyển về mảng

        //vòng lặp

        for (element of nguoidung2) {
          if (ten != element.ten || mk != element.mk) {
            //tên đăng nhập trùng thì return false, vòng lặp sẽ kết thúc
            const tenn = `<p class="ochua">*Sai tên hoặc mật khẩu<p>`;
            $(".ochua").replaceWith(tenn);
          }
        }
      }
    }

    //khi chạy hết vòng lặp mà không trùng thì return true; tức là tendangnhap đó có thể dùng được
  }
}

function ok() {
  if (localStorage.check == 1) {
    $("body").remove();
  }
}
