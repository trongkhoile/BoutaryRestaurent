function xoall() {
  if (localStorage.check == 1) {
    $("body").show();
  } else if (localStorage.check == null) {
    $("body").hide();
  }
}
window.onload = function () {
  xoall();
};

function checkten() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  var ten1 = nguoidung2[localStorage.index].ten;
  const html = `<h1 class="ten">${ten1}</h1>`;
  $(".ten").replaceWith(html);
}
checkten();

function thoat() {
  $(".dx").attr("href", "index.html");
  localStorage.removeItem("check");
  localStorage.removeItem("index");
}
function ban() {
  thaythe();
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let monan = nguoidung2[localStorage.index].value;
  let a = monan.filter(function (e) {
    return e.tenmonan == "Coroque ";
  });
  let b = monan.filter(function (e) {
    return e.tenmonan == "Foie Gras";
  });
  let c = monan.filter(function (e) {
    return e.tenmonan == "Gallete";
  });
  let d = monan.filter(function (e) {
    return e.tenmonan == "Bouillabaisse";
  });
  let e = monan.filter(function (e) {
    return e.tenmonan == "Steak Tartare";
  });
  let f = monan.filter(function (e) {
    return e.tenmonan == "Moules Marinières";
  });
  let g = monan.filter(function (e) {
    return e.tenmonan == "Creme brulee";
  });
  let h = monan.filter(function (e) {
    return e.tenmonan == "Crepe";
  });
  let z = monan.filter(function (e) {
    return e.tenmonan == "Macaroon";
  });
  function sumArray(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += Number(a[i].ip);
    }

    return sum;
  }
  function sumArray(b) {
    let sum = 0;
    for (let i = 0; i < b.length; i++) {
      sum += Number(b[i].ip);
    }

    return sum;
  }
  function sumArray(c) {
    let sum = 0;
    for (let i = 0; i < c.length; i++) {
      sum += Number(c[i].ip);
    }

    return sum;
  }
  function sumArray(d) {
    let sum = 0;
    for (let i = 0; i < d.length; i++) {
      sum += Number(d[i].ip);
    }

    return sum;
  }
  function sumArray(e) {
    let sum = 0;
    for (let i = 0; i < e.length; i++) {
      sum += Number(e[i].ip);
    }

    return sum;
  }
  function sumArray(f) {
    let sum = 0;
    for (let i = 0; i < f.length; i++) {
      sum += Number(f[i].ip);
    }

    return sum;
  }
  function sumArray(g) {
    let sum = 0;
    for (let i = 0; i < g.length; i++) {
      sum += Number(g[i].ip);
    }

    return sum;
  }
  function sumArray(h) {
    let sum = 0;
    for (let i = 0; i < h.length; i++) {
      sum += Number(h[i].ip);
    }

    return sum;
  }
  function sumArray(z) {
    let sum = 0;
    for (let i = 0; i < z.length; i++) {
      sum += Number(z[i].ip);
    }

    return sum;
  }

  function inramanhinh1() {
    var soluong1 = sumArray(a);
    var monan1 = `<h3>${soluong1} - Coroque Monsieur </h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh2() {
    var soluong1 = sumArray(b);
    var monan1 = `<h3>${soluong1} - Foie Gras</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh3() {
    var soluong1 = sumArray(c);
    var monan1 = `<h3>${soluong1} - Gallete</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh4() {
    var soluong1 = sumArray(d);
    var monan1 = `<h3>${soluong1} - Bouillabaisse</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh5() {
    var soluong1 = sumArray(e);
    var monan1 = `<h3>${soluong1} - Steak Tartare</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh6() {
    var soluong1 = sumArray(f);
    var monan1 = `<h3>${soluong1} - Moules Marinières</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh7() {
    var soluong1 = sumArray(g);
    var monan1 = `<h3>${soluong1} - Creme brulee</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh8() {
    var soluong1 = sumArray(h);
    var monan1 = `<h3>${soluong1} - Crepe</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  function inramanhinh9() {
    var soluong1 = sumArray(z);
    var monan1 = `<h3>${soluong1} - Macaroon</h3>`;
    if (soluong1 != 0) {
      $("#odungmonan").append(monan1);
    }
  }
  if (nguoidung2[localStorage.index].value !== null) {
    const html = ` 
  <button class="nut w3-hover-green" >
    Đồ đã đặt
  </button>
   `;
    const html1 = `<button class="huy w3-hover-brown" onclick=huy()>
   Hủy đơn 
 </button>`;
    const html2 = `<p class="huydon">(Lưu ý : chỉ có thể hủy đơn trong 1 tiếng )</p>`;
    $(".nut").replaceWith(html);
    $("#odungmonan").prepend(html1);
    $("#odungmonan").prepend(html2);
  }

  inramanhinh1();
  inramanhinh2();
  inramanhinh3();
  inramanhinh4();
  inramanhinh5();
  inramanhinh6();
  inramanhinh7();
  inramanhinh8();
  inramanhinh9();
}
function huy() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  nguoidung2[localStorage.index].value.length = 0;

  localStorage.setItem("nguoidung2", JSON.stringify(nguoidung2));
  $("#odungmonan").remove();
}

$(".thaythe").replaceWith(thaythe);
function thaythe() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  if (nguoidung2[localStorage.index].value.length == 0) {
    $("#odungmonan").remove();
  }
}
function ingia() {
  let nguoidung2 = localStorage.getItem("nguoidung2"); //lấy dữ liệu
  nguoidung2 = JSON.parse(nguoidung2);
  let sum = 0;
  for (let i = 0; i < nguoidung2[localStorage.index].value.length; i++) {
    sum += Number(nguoidung2[localStorage.index].value[i].gia);
  }

  return sum;
}
