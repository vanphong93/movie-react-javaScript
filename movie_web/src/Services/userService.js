import { https } from "./configURL";

export const userServ = {
  postLogin: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  postRegister: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  postUserInfo: () => {
    return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  editUser: (data) => {
    return https.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
  },
};

// getInfoTicket: (id) => {
//   return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
// },
