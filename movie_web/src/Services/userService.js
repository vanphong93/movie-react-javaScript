import { https } from "./configURL";
import { localServ } from "./localService";

export const userServ = {
  postLogin: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  postRegister: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  getListUser: () => {
    let uri = `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${
      localServ.user.get()?.maNhom
    }`;
    return https.get(uri);
  },
  UserSreach: (tukhoa) => {
    let uri = `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${
      localServ.user.get()?.maNhom
    }&tuKhoa=${tukhoa}`;
    return https.get(uri);
  },
  UserAdd: (dataUser) => {
    let uri = `/api/QuanLyNguoiDung/ThemNguoiDung`;
    return https.post(uri, dataUser);
  },
  UserDelate: (taiKhoan) => {
    let uri = `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return https.delete(uri);
  },
};
