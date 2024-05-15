import React from "react";

const GymPhotos = (props) => {
  const data = props?.data;
  const photos = data?.photos
  return (
    <section class="d2c_project_wrapper text-center">
      <div class="container">
        <h2 style={{ fontWeight: 700, fontSize: "45px" }}>
          {data?.about_gym_photo_teg}
        </h2>
        <p style={{ fontSize: "19px" }}>{data?.about_gym_photo_p}</p>
        <div class="row">
          {!photos? (
            <h1> </h1>
          ) : (
            photos.map((el) => {
              return (
                <div class="col-md-6 col-lg-4 mb-4 mb-md-4 wow fadeInUp">
                  <div class="d2c_img_wrapper">
                    <img
                      src={el}
                      class="w-100 h-100 rounded-3"
                      alt="Project 1"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default GymPhotos;
