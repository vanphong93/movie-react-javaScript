import React, { useEffect, useState } from "react";
import Movie from "./CardMovie";
import { Modal, Rate } from "antd";
import TabsMovies from "./TabsMovie/TabsMovies";
import { useDispatch, useSelector } from "react-redux";
import { AllMovie } from "./Carousel/AllMovie";
import CarouselMovies from "./Carousel/CarouselMovies";
import { NavLink } from "react-router-dom";
import Baner from "./Baner/Baner";
import { getBaner, getMovie } from "../../redux/actions/actionGetMovie";
// import { movieSer } from "../../Services/movieService";
export default function HomePage() {
  let { dataMovie, dataBaner } = useSelector((state) => {
    return state.movieReducer;
  });
  const [movies, setMovies] = useState([]);
  let dispatch = useDispatch();
  //Xử lí lấy dữ liệu all film
  useEffect(() => {
    if (dataMovie) {
      console.log("da co data");
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
        <div key={index} className="p-5">
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
        <div key={index} className="p-5">
          <Movie showModal={showModal} data={data} />
        </div>
      );
    });
  };
  // lấy dữ liêu baner
  const [banerMovie, setBanerMovie] = useState([]);
  useEffect(() => {
    if (dataBaner) {
      console.log("da co du lieu baner");
      setBanerMovie(dataBaner);
    } else {
      dispatch(getBaner(setBanerMovie));
    }
  }, []);
  //xử lí modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  let { data } = useSelector((state) => {
    return state.modalReducer;
  });
  const renderModal = () => {
    return (
      <Modal
      // destroyOnClose={true}
      // focusTriggerAfterClose={false}
        // mask={false}
        style={{ top: 20 }}
        width={1000}
        footer={null}
        title="Trailer"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={() => { handleCancel(data.maPhim) }}
      >
        {data.baner ? (
          <iframe id={data.maPhim}
            allowFullScreen={true}
            title="myFrame"
            className="w-full"
            height={450}
            src={data.trailer}
          ></iframe>
        ) : (
          <div className="flex">


            <iframe id={data.maPhim}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              title="myFrame"
              className="w-1/2"
              height={450}
              frameBorder={0}
              src={data.trailer}
            ></iframe>
            <div className="w-1/2 p-3">
              <h1
                style={{ fontSize: "30px" }}
                className="text-center text-indigo-500"
              >
                {data.tenPhim}
              </h1>
              <p>{data.moTa}</p>
              {data.isSearch ? (
                ""
              ) : (
                <NavLink to={`/detail/${data.maPhim}`}>
                  {" "}
                  <button className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                    Mua vé
                  </button>
                </NavLink>
              )}
              <h2>
                Điểm đánh giá:{" "}
                <Rate disabled allowHalf defaultValue={data.danhGia / 2} />
              </h2>
            </div>
          </div>
        )}
      </Modal>
    );
  };
  const handleCancel = (id) => {
    let stopVideo = () => {
      // var iframe = document.querySelectorAll("iframe");
      // iframe.forEach((item) => {
      //   var iframeSrc = item.src;
      //   item.src = iframeSrc;
      // });
     var iframe= document.getElementById(id);
    //  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    //  console.log('iframe: ', iframe);
    //  var anyURL=iframe.src;
     iframe.src=iframe.src
    };
    stopVideo();
    setIsModalOpen(false);
  };
  return (
    <div className="space-y-10 ">
      <section className="pt-16">
        <Baner showModal={showModal} banerMovie={banerMovie} />
      </section>
      <div className="container mx-auto">
        {renderModal()}
        <section className="my-5">
          <AllMovie
            dataMovieNext={<CarouselMovies data={renderMovieNext} />}
            dataMovieCurrent={<CarouselMovies data={renderMovieCurrent} />}
          />
        </section>{" "}
        <TabsMovies showModal={showModal} />
      </div>
    </div>
  );
}
