function an() {
  $(".mondadat").hide();
}
function check1() {
  if (localStorage.check == 1) {
    var lienhe = `<a href="thongtinnguoidung.html" class="lienhe5 w3-hover-text-green"
    >Thông tin người dùng
  </a>`;
    $(".lienhe5").replaceWith(lienhe);
  }
}

window.onload = function () {
  an();
  check1();
};
function xoa() {
  $(".mondadat").hide();
}
//mon1
function mon1() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon11">Coroque </h3>
  <div class="daylakhung">
 
  <input class="soluong" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan w3-hover-green" onclick="monmoi1()">
  <p><b>Coroque-10$</b></p>
</button>`;
  $(".dung").append(html);
  $(".tenmonan").replaceWith(html1);
}
function monmoi1() {
  $(".mondadat").show();
  var soluong = $(".soluong").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong").replaceWith(html1);
}
function bo() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan w3-hover-green" onclick="mon1()">
  <p><b>Coroque-10$</b></p>
</button>`;

  $(".tenmonan").replaceWith(html1);
}
// mon2
function mon2() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon12">Foie Gras</h3>
  <div class="daylakhung">
 
  <input class="soluong1" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo1()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan2 w3-hover-green" onclick="monmoi2()">
  <p><b>FoieGras-10$</b></p>
</button>`;
  $(".dung").append(html);
  $(".tenmonan2").replaceWith(html1);
}
function monmoi2() {
  $(".mondadat").show();
  var soluong = $(".soluong1").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong1" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong1").replaceWith(html1);
}
function bo1() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan2 w3-hover-green" onclick="mon2()">
  <p><b>FoieGras-10$</b></p>
</button>`;

  $(".tenmonan2").replaceWith(html1);
}
//mon3
function mon3() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon13">Gallete</h3>
  <div class="daylakhung">
 
  <input class="soluong2" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo2()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan3 w3-hover-green" onclick="monmoi3()">
  <p><b>Gallete-5$</b></p>
</button>`;
  $(".dung").append(html);
  $(".tenmonan3").replaceWith(html1);
}
function monmoi3() {
  $(".mondadat").show();
  var soluong = $(".soluong2").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong2" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong2").replaceWith(html1);
}
function bo2() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan3 w3-hover-green" onclick="mon3()">
  <p><b>Gallete-5$</b></p>
</button>`;

  $(".tenmonan3").replaceWith(html1);
}
//mon4
function mon4() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon14">Bouillabaisse</h3>
  <div class="daylakhung">
 
  <input class="soluong3" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo3()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan4 w3-hover-green" onclick="monmoi4()">
  <p><b>Bouillabaisse-15$</b></p>
</button>`;
  $(".dung1").append(html);
  $(".tenmonan4").replaceWith(html1);
}
function monmoi4() {
  $(".mondadat").show();
  var soluong = $(".soluong3").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong3" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong3").replaceWith(html1);
}
function bo3() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan4 w3-hover-green" onclick="mon4()">
  <p><b>Bouillabaisse-15$</b></p>
</button>`;

  $(".tenmonan4").replaceWith(html1);
}
//mon5
function mon5() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon15">Steak Tartare</h3>
  <div class="daylakhung">
 
  <input class="soluong4" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo4()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan5 w3-hover-green" onclick="monmoi5()">
  <p><b>SteakTartare-20$</b></p>
</button>`;
  $(".dung1").append(html);
  $(".tenmonan5").replaceWith(html1);
}
function monmoi5() {
  $(".mondadat").show();
  var soluong = $(".soluong4").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong4" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong4").replaceWith(html1);
}
function bo4() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan5 w3-hover-green" onclick="mon5()">
  <p><b>SteakTartare-20$</b></p>
</button>`;

  $(".tenmonan5").replaceWith(html1);
}
//mon6
function mon6() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon16">Moules Marinières</h3>
  <div class="daylakhung">
 
  <input class="soluong5" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo5()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan6 w3-hover-green" onclick="monmoi6()">
  <p><b>Marinières-20$</b></p>
</button>`;
  $(".dung1").append(html);
  $(".tenmonan6").replaceWith(html1);
}
function monmoi6() {
  $(".mondadat").show();
  var soluong = $(".soluong5").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong5" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong5").replaceWith(html1);
}
function bo5() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan6 w3-hover-green" onclick="mon6()">
  <p><b>Marinières-20$</b></p>
</button>`;

  $(".tenmonan6").replaceWith(html1);
}
//mon7
function mon7() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon17">Creme brulee</h3>
  <div class="daylakhung">
 
  <input class="soluong6" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo6()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan7 w3-hover-green" onclick="monmoi7()">
  <p><b>Cremebrulee-10$</b></p>
</button>`;
  $(".dung2").append(html);
  $(".tenmonan7").replaceWith(html1);
}
function monmoi7() {
  $(".mondadat").show();
  var soluong = $(".soluong6").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong6" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong6").replaceWith(html1);
}
function bo6() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan7 w3-hover-green" onclick="mon7()">
  <p><b>Cremebrulee-10$</b></p>
</button>`;

  $(".tenmonan7").replaceWith(html1);
}
//mon8
function mon8() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon18">Crepe</h3>
  <div class="daylakhung">
 
  <input class="soluong7" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo7()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan8 w3-hover-green" onclick="monmoi8()">
  <p><b>Crepe-10$</b></p>
</button>`;
  $(".dung2").append(html);
  $(".tenmonan8").replaceWith(html1);
}
function monmoi8() {
  $(".mondadat").show();
  var soluong = $(".soluong7").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong7" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong7").replaceWith(html1);
}
function bo7() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan8 w3-hover-green" onclick="mon8()">
  <p><b>Crepe-10$</b></p>
</button>`;

  $(".tenmonan8").replaceWith(html1);
}
//mon9
function mon9() {
  $(".mondadat").show();

  const html = `<div class="khungmonan">
  <h3 class="mon19">Macaroon</h3>
  <div class="daylakhung">
 
  <input class="soluong8" type="number" value="1" min="1" max="100">
  <button class="bo" onclick="bo8()">Bỏ</button>
  </div>
  </div>
  `;
  const html1 = `   <button class="tenmonan9 w3-hover-green" onclick="monmoi9()">
  <p><b>Macaroon-10$</b></p>
</button>`;
  $(".dung2").append(html);
  $(".tenmonan9").replaceWith(html1);
}
function monmoi9() {
  $(".mondadat").show();
  var soluong = $(".soluong8").val();
  var somoi = Number(soluong) + 1;
  const html1 = ` <input class="soluong8" type="number" value="${somoi}" min="1" max="100"> `;
  $(".soluong8").replaceWith(html1);
}
function bo8() {
  $(".khungmonan").click(function () {
    $(this).remove();
  });

  const html1 = `   <button class="tenmonan9 w3-hover-green" onclick="mon9()">
  <p><b>Macaroon-10$</b></p>
</button>`;

  $(".tenmonan9").replaceWith(html1);
}
//datmon
function dat() {
  chay();
  check();
}
function chay() {
  if (localStorage.check != 1) {
    alert("Bạn chưa đăng nhập");
    e.stopImmediatePropagation();
  }
  //khi chạy hết vòng lặp mà không trùng thì return true; tức là tendangnhap đó có thể dùng được
  return "c";
}

function check() {
  if (chay() == "c") {
    let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
    nguoidung2 = JSON.parse(nguoidung2);
    let ip = $(".soluong").val();
    let tenmonan = $(".mon11").html();
    let ip1 = $(".soluong1").val();
    let tenmonan1 = $(".mon12").html();
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
    };
    const khaivi1 = {
      ip: ip1,
      tenmonan: tenmonan1,
    };
    checkmon1();
    checkmon2();
    checkmon3();
    checkmon4();
    checkmon5();
    checkmon6();
    checkmon7();
    checkmon8();
    checkmon9();

    alert("Đặt món thành công");
  }
}
function checkmon1() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong").val();
  let tenmonan = $(".mon11").html();

  if (tenmonan == "Coroque ") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 10,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon2() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong1").val();
  let tenmonan = $(".mon12").html();

  if (tenmonan == "Foie Gras") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 10,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon3() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong2").val();
  let tenmonan = $(".mon13").html();

  if (tenmonan == "Gallete") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 5,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon4() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong3").val();
  let tenmonan = $(".mon14").html();

  if (tenmonan == "Bouillabaisse") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 15,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon5() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong4").val();
  let tenmonan = $(".mon15").html();

  if (tenmonan == "Steak Tartare") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 20,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon6() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong5").val();
  let tenmonan = $(".mon16").html();

  if (tenmonan == "Moules Marinières") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 20,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon7() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong6").val();
  let tenmonan = $(".mon17").html();

  if (tenmonan == "Creme brulee") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 20,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon8() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong7").val();
  let tenmonan = $(".mon18").html();

  if (tenmonan == "Crepe") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 10,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function checkmon9() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let ip = $(".soluong8").val();
  let tenmonan = $(".mon19").html();

  if (tenmonan == "Macaroon") {
    const khaivi = {
      ip: ip,
      tenmonan: tenmonan,
      gia: Number(ip) * 10,
    };
    nguoidung2[localStorage.index].value.push(khaivi);

    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  }
}
function bam() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);

  let ten = $(".input1").val();
  let tuoi = $(".input2").val();
  let thoigian = $(".input3").val();
  if (localStorage.check != 1) {
    alert("Bạn chưa đăng nhập");
  } else if (ten == "") {
    alert("Vui lòng điền đầy đủ thông tin");
  } else if (tuoi == "") {
    alert("Vui lòng điền đầy đủ thông tin");
  } else if (thoigian == "") {
    alert("Vui lòng điền đầy đủ thông tin");
  } else if (nguoidung2[localStorage.index].datcho.length !== 0) {
    alert("Bạn đã đặt bàn rồi ");
  } else if (nguoidung2[localStorage.index].datcho.length == 0) {
    const datban = {
      ten: ten,
      tuoi: tuoi,
      thoigian: thoigian,
    };

    nguoidung2[localStorage.index].datcho.push(datban);
    localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
    alert("Đặt bàn thành công ");
  }
}
