import { https } from "./configURL";

export const userServ = {
  postLogin: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  postRegister: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
 postUserInfo:() => { return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan") }
};





// getInfoTicket: (id) => {
//   return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
// },