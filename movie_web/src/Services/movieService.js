import { https_client } from "./configURL";
export const movieSer = {
  getListMovie: () => {
    return https_client.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
  },
  getMovieByTheater: () => {
    return https_client.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03"
    );
  },
  getBanerMovie: () => {
    return https_client.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getInfoMovie: (id) => {
    return https_client.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getInfoMovieTheater: (id) => {
    return https_client.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  getInfoTicket: (id) => {
    return https_client.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  },
  postTicket:(data) => { 
    return https_client.post("/api/QuanLyDatVe/DatVe",data)
   }
};
