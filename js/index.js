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
    tongTien = giaTienKmDauTien + soKm * giaTienKmTu1Den19;
  } else if (soKm > 19) {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKm - 19) * giaTienKmTu19TroLen;
  }

  let tongTienThoiGianCho = Math.floor(thoiGianCho / 3) * giaTienCho;

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  );
};

document.getElementById("btnInHoaDon").onclick = (event) => {
  $("#myModal").modal("show");
};
