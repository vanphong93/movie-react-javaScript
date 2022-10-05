import { https } from "./configURL";

export const movieSer = {
  getListMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00");
  },
  getMovieByTheater: () => {
    return https.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00"
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
  postTicket:(data) => { 
    return https.post("/api/QuanLyDatVe/DatVe",data)
   }
};
