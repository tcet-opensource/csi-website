import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";
import datas from "./images"
import "../../App.css"
import "./swiper.css"

export default function CompanySwiper() {
    return (
      <div className="w-screen cssanimation sequence fadeInBottom flex flex-col justify-center mt-8 sm:mt-10 md:mt-16 lg:mt-20 xl:mt-24 px-12 md:px-16 lg:px-20 xl:px-24 ">
        <span className="font-Inter text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center shadow-purple-400">GALLERY</span>
        <div className="flex justify-between relative mt-4 sm:mt-8">
          <div className="swiper-prev">
            <img src="/arrow-left-circle-svgrepo-com.svg" alt="prev-image-btn" className="absolute top-1/2 left-0 h-10 w-10 z-10 animate-pulse " />
          </div>
                
          <Swiper
            modules={[Navigation]}
            className="mySwiper mx-10 my-6"
            spaceBetween={10}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            breakpoints={{
              520: {
              slidesPerView: 2,
              spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
             }, 
            }}
           >   
            {datas.map((data, i) => {
              return(
                <SwiperSlide key={i} className='carousel-item w-full md:w-full lg:w-full h-52 sm:h-60 lg:h-72 relative z-0 px-2'>
                  <img src={data.img} alt="" className="w-full h-full" />
                </SwiperSlide>
              );
            })}                
          </Swiper>
          <div className="swiper-next">
            <img src="/right-arrow.svg" alt="next-image-btn" className="absolute rotate-360 top-1/2 right-0 h-10 w-10 z-10 animate-pulse "/>
          </div>
        </div>
      </div>
    );
}
