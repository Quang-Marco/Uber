const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

const kiemTraGiaTienKmDauTien = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};

const kiemTraGiaTienKmTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};

const kiemTraGiaTienKmTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};

const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};

document.getElementById("btnTinhTien").onclick = (event) => {
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let giaTienKmTu1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  let giaTienKmTu19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);

  let tongTien = 0;
  if (soKm <= 1 && soKm > 0) {
    tongTien = soKm * giaTienKmDauTien;
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKmTu1Den19;
  } else if (soKm > 19) {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKm - 19) * giaTienKmTu19TroLen;
  }
  let tongTienThoiGianCho = Math.floor(thoiGianCho / 3) * giaTienCho;

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = (
    tongTien + tongTienThoiGianCho
  ).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

document.getElementById("btnInHoaDon").onclick = (event) => {
  $("#myModal").modal("show");

  // Reset Table
  document.getElementById("suDung1").innerHTML = "";
  document.getElementById("suDung2").innerHTML = "";
  document.getElementById("suDung3").innerHTML = "";
  document.getElementById("suDung4").innerHTML = "";
  document.getElementById("donGia1").innerHTML = "";
  document.getElementById("donGia2").innerHTML = "";
  document.getElementById("donGia3").innerHTML = "";
  document.getElementById("donGia4").innerHTML = "";
  document.getElementById("thanhTien1").innerHTML = "";
  document.getElementById("thanhTien2").innerHTML = "";
  document.getElementById("thanhTien3").innerHTML = "";
  document.getElementById("thanhTien4").innerHTML = "";
  document.getElementById("tongTienHoaDon").innerHTML = "";

  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let giaTienKmTu1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  let giaTienKmTu19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);

  let tongTienThoiGianCho = Math.floor(thoiGianCho / 3) * giaTienCho;
  if (thoiGianCho > 3) {
    document.getElementById("suDung4").innerHTML = thoiGianCho;
    document.getElementById("donGia4").innerHTML = giaTienCho;
    document.getElementById("thanhTien4").innerHTML = tongTienThoiGianCho;
  }

  let tongTien = 0;
  if (soKm <= 1 && soKm > 0) {
    tongTien = soKm * giaTienKmDauTien;
    document.getElementById("suDung1").innerHTML = soKm;
    document.getElementById("donGia1").innerHTML = giaTienKmDauTien;
    document.getElementById("thanhTien1").innerHTML = soKm * giaTienKmDauTien;
    document.getElementById("tongTienHoaDon").innerHTML =
      tongTien + tongTienThoiGianCho;
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKmTu1Den19;
    document.getElementById("suDung1").innerHTML = 1;
    document.getElementById("donGia1").innerHTML = giaTienKmDauTien;
    document.getElementById("thanhTien1").innerHTML = giaTienKmDauTien;
    document.getElementById("suDung2").innerHTML = soKm - 1;
    document.getElementById("donGia2").innerHTML = giaTienKmTu1Den19;
    document.getElementById("thanhTien2").innerHTML =
      tongTien - giaTienKmDauTien;
    document.getElementById("tongTienHoaDon").innerHTML =
      tongTien + tongTienThoiGianCho;
  } else if (soKm > 19) {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKm - 19) * giaTienKmTu19TroLen;
    document.getElementById("suDung1").innerHTML = 1;
    document.getElementById("donGia1").innerHTML = giaTienKmDauTien;
    document.getElementById("thanhTien1").innerHTML = giaTienKmDauTien;
    document.getElementById("suDung2").innerHTML = 18;
    document.getElementById("donGia2").innerHTML = giaTienKmTu1Den19;
    document.getElementById("thanhTien2").innerHTML = 18 * giaTienKmTu1Den19;
    document.getElementById("suDung3").innerHTML = soKm - 19;
    document.getElementById("donGia3").innerHTML = giaTienKmTu19TroLen;
    document.getElementById("thanhTien3").innerHTML =
      (soKm - 19) * giaTienKmTu19TroLen;
    document.getElementById("tongTienHoaDon").innerHTML =
      tongTien + tongTienThoiGianCho;
  }
};
