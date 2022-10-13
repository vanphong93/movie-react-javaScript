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
};
