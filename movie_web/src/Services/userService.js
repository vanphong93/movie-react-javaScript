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
    return https.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
  },
};
//put or post
// getInfoTicket: (id) => {
//   return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
// },
