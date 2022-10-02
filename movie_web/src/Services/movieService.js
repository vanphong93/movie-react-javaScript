import { https } from "./configURL";

export const movieSer = {
  getListMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04");
  },
  getMovieByTheater: () => {
    return https.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04"
    );
  },
  getBanerMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getInfoMovie: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getInfoMovieTheater: (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  getInfoTicket: (id) => {
    return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  },
};
