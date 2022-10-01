import { https } from "./configURL";

export const movieSer = {
  getListMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02");
  },
  getMovieByTheater: () => {
    return https.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02"
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
};





