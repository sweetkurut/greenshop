import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./home.module.sass";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Cards from "./components/cards/cards";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Swiper
            className={styles.mySwiper}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            // navigation={true}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.banner_content}>
                <p className={styles.banner_subTitle}>Welcome to GreenShop</p>
                <h1 className={styles.banner_title}>
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p className={styles.banner_tilteDesc}>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className={styles.banner_btn}>SHOP NOW</button>
              </div>
              <img src="/public/img/banner_img.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.banner_content}>
                <p>Welcome to GreenShop</p>
                <h1 className={styles.banner_title}>
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className={styles.banner_btn}>SHOP NOW</button>
              </div>
              <img src="/public/img/banner_img.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
