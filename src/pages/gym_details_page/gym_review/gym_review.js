import React from "react";
import photo1 from '../../../assets/images/testimonial_img_one.jpg';
import photo2 from '../../../assets/images/testimonial_img_two.jpg';
import photo3 from '../../../assets/images/testimonial_img_three.jpg';
import Slider from "react-slick";

const GymReview = (props) => {
  const data = props?.data
  // console.log(data);
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        // centerPadding: '50px',
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
        ],
      };
    return (
        <section class="d2c_testimonial_wrapper">
            <div class="container">
                <h2 class="text-center" style={{ fontWeight: 700, fontSize: '45px' }}>{data?.about_gym_review_p}
                </h2>
                <div className="row">
          <Slider {...settings}>
            <div className="col">
              <div className="d2c_card">
                <div className="d2c_customer_info_wrapper d-flex align-items-center">
                  <div className="d2c_img_wrapper">
                    <img
                      src={photo1}
                      className="w-100 h-100"
                      alt="Testimonial One"
                    />
                  </div>
                  <div className="d2c_customer_info">
                    <h5>Nattasha Mith</h5>
                    <p className="mb-0">
                      <span>Alaska, USA</span>
                    </p>
                  </div>
                </div>
                <p className="d2c_testimonial_content">
                  I'm a very particular person who likes to order a site done. I
                  just told him an idea without any clear plan he did
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d2c_card">
                <div className="d2c_customer_info_wrapper d-flex align-items-center">
                  <div className="d2c_img_wrapper">
                    <img
                      src={photo2}
                      className="w-100 h-100"
                      alt="Testimonial One"
                    />
                  </div>
                  <div className="d2c_customer_info">
                    <h5>ray galario</h5>
                    <p className="mb-0">
                      <span>Sydney, Australia</span>
                    </p>
                  </div>
                </div>
                <p className="d2c_testimonial_content">
                  Reactprox did a great job creating our site for us. He was a
                  very good responsive, answered all of our QA.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d2c_card">
                <div className="d2c_customer_info_wrapper d-flex align-items-center">
                  <div className="d2c_img_wrapper">
                    <img
                      src={photo3}
                      className="w-100 h-100"
                      alt="Testimonial One"
                    />
                  </div>
                  <div className="d2c_customer_info">
                    <h5>Benny Roll</h5>
                    <p className="mb-0">
                      <span>NewYork, USA</span>
                    </p>
                  </div>
                </div>
                <p className="d2c_testimonial_content">
                  Tanahair is the friendliest and most efficient company I have
                  ever used. The whole thing takes time
                </p>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
            </div>
        </section>
    );
};

export default GymReview;