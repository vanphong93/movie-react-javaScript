import React, { useEffect, useState } from "react";
import Movie from "./Carousel/CardMovie";
import { Modal, Rate } from "antd";
import TabsMovies from "./TabsMovie/TabsMovies";
import { useDispatch, useSelector } from "react-redux";
import { AllMovie } from "./Carousel/AllMovie";
import CarouselMovies from "./Carousel/CarouselMovies";
import { NavLink } from "react-router-dom";
import Baner from "./Baner/Baner";
import "./modalVideo.css";
import {
  getBaner,
  getMovie,
  getMovieTheater,
} from "../../redux/actions/actionGetMovie";
import moment from "moment";
import LoremSplice from "./LoremSplice";
import TextSplice from "../../Utilities/Icon";

// import { movieSer } from "../../Services/movieService";
export default function HomePage() {
  let { dataMovie, dataBaner, dataTheater } = useSelector((state) => {
    return state.movieReducer;
  });
  const [movies, setMovies] = useState([]);
  let dispatch = useDispatch();
  //Xử lí lấy dữ liệu all film
  useEffect(() => {
    if (dataMovie) {
      setMovies(dataMovie);
    } else {
      dispatch(getMovie(setMovies, dispatch));
    }
  }, []);

  const renderMovieCurrent = () => {
    let newData = movies.filter((item) => {
      return item.dangChieu;
    });
    return newData.map((data, index) => {
      return (
        <div key={index} className="p-3 xl:p-5">
          <Movie showModal={showModal} data={data} />
        </div>
      );
    });
  };
  const renderMovieNext = () => {
    let newData = movies.filter((item) => {
      return !item.dangChieu;
    });
    return newData.map((data, index) => {
      return (
        <div key={index} className="p-2 lg:p-3 xl:p-5">
          <Movie showModal={showModal} data={data} />
        </div>
      );
    });
  };
  // lấy dữ liêu baner
  const [banerMovie, setBanerMovie] = useState([]);
  useEffect(() => {
    if (dataBaner) {
      setBanerMovie(dataBaner);
    } else {
      dispatch(getBaner(setBanerMovie));
    }
  }, []);
  //lay du lieu theater
  const [movieTheater, setMovieTheater] = useState([]);
  useEffect(() => {
    if (dataTheater) {
      setMovieTheater(dataTheater);
    } else {
      dispatch(getMovieTheater(setMovieTheater));
    }
  }, []);

  //xử lí modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  let { data } = useSelector((state) => {
    return state.modalReducer;
  });
  const renderModal = () => {
    return (
      <Modal
        // closable={true}
        destroyOnClose={true}
        // mask={false}
        style={{ top: 20 }}
        width={1000}
        footer={null}
        title="Trailer"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={() => {
          handleCancel();
        }}
      >
        {data.baner ? (
          <iframe
            id={data.maPhim}
            allowFullScreen={true}
            title="myFrame"
            className="w-full"
            height={450}
            src={data.trailer}
          ></iframe>
        ) : (
          <div className="container md:flex">
            <iframe
              id={data.maPhim}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              title="myFrame"
              className="w-full md:w-1/2"
              height={450}
              frameBorder={0}
              src={data.trailer}
            ></iframe>
            <div className="w-full md:w-1/2 p-3">
              <h1
                style={{ fontSize: "30px" }}
                className="text-center text-indigo-500"
              >
                {data.tenPhim}
              </h1>
              <TextSplice data={data.moTa} />
              {/* <LoremSplice data={data.moTa} /> */}
              {/* <p>{data.moTa}</p> */}
              <p className="font-semibold">
                Ngày chiếu {moment(data.ngayChieuGioChieu).format("DD-MM-YYYY")}
                <br />
                Time: {(Math.floor(Math.random() * 5) + 2) * 30} phút
              </p>

              <Rate disabled allowHalf defaultValue={data.danhGia / 2} />

              <NavLink to={`/detail/${data.maPhim}`}>
                {" "}
                <button className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                  Mua vé
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </Modal>
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="space-y-10 mb-10 ">
      <section className="mb-15">
        <Baner showModal={showModal} banerMovie={banerMovie} />
      </section>

      <div className="container mx-auto" id="filmHot">
        {renderModal()}
        <section className="mb-14">
          <AllMovie
            dataMovieNext={<CarouselMovies data={renderMovieNext} />}
            dataMovieCurrent={<CarouselMovies data={renderMovieCurrent} />}
          />
        </section>{" "}
        <section id="cinemax" className="">
          <h1 className="text-center text-purple-500 text-6xl mb-12 hover:animate-pulse ">
            Rạp Cinema
          </h1>
          <TabsMovies showModal={showModal} dataMovie={movieTheater} />
        </section>
      </div>
    </div>
  );
}
