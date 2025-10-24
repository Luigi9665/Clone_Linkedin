import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Pencil, X } from "react-bootstrap-icons";

function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          992: { slidesPerView: 2, spaceBetween: 10 },
          1200: { slidesPerView: 2, spaceBetween: 10 },
        }}
        loop={true}
        style={{ width: "100%" }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundColor: "#DDE7F1" }} className=" cardCarousel  rounded-3  p-3">
            <div className="h-100">
              <div className="d-flex justify-content-between align-items-center h-100  ">
                <div className="lineHeight ">
                  <p className="m-0 fw-bold">Disponibile a lavorare</p>
                  <p className="m-0">Ruoli di Sviluppatore Web</p>
                  <a className=" classLink fw-semibold m-0" href="#">
                    {" "}
                    Mostra dettagli
                  </a>
                </div>
                <div>
                  <div style={{ cursor: "pointer" }} className="   toAddCarousel  ">
                    <Pencil className="fs-5 " />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" cardCarousel  rounded-3 p-3 border border-1">
            <div className="h-100">
              <div className="d-flex justify-content-between align-items-center h-100  ">
                <div className="lineHeight">
                  <p className="m-0 ">
                    <span className="fw-bold me-1">Fai sapere ai recruiter interni</span>
                    che ti <br /> interessano offerte di lavoro presso la tua azienda attuale
                  </p>
                  <a className=" classLink fw-semibold m-0" href="#">
                    {" "}
                    Inizia
                  </a>
                </div>
                <div>
                  <div style={{ cursor: "pointer" }} className=" toCancelCarousel align-items-start  ">
                    <X className="fs-2" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" cardCarousel  rounded-3 p-3 border border-1">
            <div className="h-100">
              <div className="d-flex justify-content-between align-items-center h-100  ">
                <div className="lineHeight">
                  <p className="m-0 ">
                    <span className="fw-bold me-1">Fai sapere che stai facendo selezione</span>
                    che ti <br /> e attrai candidati qualificati.
                  </p>
                  <a className=" classLink fw-semibold m-0" href="#">
                    {" "}
                    Inizia
                  </a>
                </div>
                <div>
                  <div style={{ cursor: "pointer" }} className=" toCancelCarousel align-items-start  ">
                    <X className="fs-2" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="  cardCarousel rounded-3 p-3 border border-1">
            <div className="h-100">
              <div className="d-flex justify-content-between align-items-center h-100  ">
                <div className="lineHeight">
                  <p className="m-0 ">
                    <span className="fw-bold me-1">Metti in risalto i tuoi servizi</span>
                    che ti <br /> in un’apposita sezione sul tuo profilo, così sarà più facile trovarti.
                  </p>
                  <a className=" classLink fw-semibold m-0" href="#">
                    {" "}
                    Inizia
                  </a>
                </div>
                <div>
                  <div style={{ cursor: "pointer" }} className=" toCancelCarousel align-items-start  ">
                    <X className="fs-2" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Swiper>
    </div>
  );
}

export default Carousel;
