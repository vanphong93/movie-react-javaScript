import { https } from "./configURL";
import { localServ } from "./localService";

export const phimServ = {
  getListPhim: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${
      localServ.user.get().maNhom
    }`;
    return https.get(uri);
  },
  themPhim: (formdata) => {
    let uri = "/api/QuanLyPhim/ThemPhimUploadHinh";
    return https.post(uri, formdata);
  },
};
