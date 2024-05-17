import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const Gallary = () => {
  const { data } = useContext(AuthContext);
  const home = data?.data?.data;
  const photo = data?.data?.data?.vibrant_Photos;

  return (
    <section className="d2c_project_wrapper text-center">
      <div className="container">
        <h2 style={{ fontWeight: 700, fontSize: "45px" }}>
          {home?.vibrant_teg1}
        </h2>
        <p style={{ fontSize: "18px"}}>{home?.vibrant_teg2}</p>
        <div className="row" style={{ paddingBottom: "25px", marginTop:"50px"}}>
          {!photo ? (
                   <h1> </h1>
          ) : (
            photo.map((el, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4 wow fadeInLeft">
                <div className="d2c_img_wrapper">
                  <img
                    src={el}
                    className="w-100 h-100 rounded-3"
                    alt={`Project ${index}`}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {home?.vibrant_show === "no" ? null : (
          <NavLink className="btn1" style={{ margin: "-5px" }} to="/findgym">
            More
          </NavLink>
        )}
      </div>
    </section>
  );
};

export default Gallary;
