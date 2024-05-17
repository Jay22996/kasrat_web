import React, { useContext, useState } from "react";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const FindGym = () => {
  // const navigate = useNavigate();
  const { data, gym } = useContext(AuthContext);

  const home = data?.data?.data;
  const gym1 = gym?.data?.data;

  // const navige = (el) =>{
  //   console.log(el);
  //   navigate("/aboutgym")
  // }
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const gyms = gym1;
  // console.log(gyms);

  const search = () => {
    const input = searchInput.toLowerCase().trim();
    const results = gyms.filter(gym => {
      const nameMatch = gym.gym_name.toLowerCase().includes(input);
      const cityMatch = gym.address.city.toLowerCase().includes(input);
      const stateMatch = gym.address.state.toLowerCase().includes(input);
      const addressMatch = gym.address.address.toLowerCase().includes(input);
      return nameMatch || cityMatch || stateMatch || addressMatch;
    });
    setSearchResults(results);
  };
  

  const displayResults = () => {
    if (searchResults.length === 0) {
      return (
        <div class="row">
          {!gym1 ? (
         <h1> </h1>

          ) : (
            gym1.map((el) => {
              return (
                <div class="col-md-4">
                  <div class="card p-3" style={{ height: "220px" }}>
                    <div class="d-flex flex-row mb-3">
                      <img
                        src={el.profile_photo}
                        width="70"
                        height="70"
                        style={{ borderRadius: "5%" }}
                        alt="Gym 1"
                      />
                      <div class="d-flex flex-column ml-2 showgym">
                        <span style={{ fontSize: "15px", fontWeight: 700 }}>
                          {el.gym_name}
                        </span>
                        <span class="text-black-50">{el.time}</span>
                        <span class="ratings">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <span
                              key={value}
                              style={{
                                cursor: "pointer",
                                color:
                                  value <= el?.averageRating ? "gold" : "grey",
                              }}
                            >
                              &#9733;
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                    <p>{el.address.address.substring(0, 80)}...</p>
                    <Link
                      to={`/aboutgym/${el._id}`}
                      class="text-primary nonew"
                      style={{ textDecoration: "none" }}
                    >
                      View <FontAwesomeIcon icon={faChevronRight} />
                    </Link>

                    {/* </div> */}
                  </div>
                </div>
              );
            })
          )}
        </div>
      );
    } else {
      return (
        <div class="row">

         { searchResults.map((gym) => (
          <div class="col-md-4">
            <div class="card p-3" style={{ height: "220px" }}>
              <div class="d-flex flex-row mb-3">
                <img
                  src={gym.profile_photo}
                  width="70"
                  height="70"
                  style={{ borderRadius: "5%" }}
                  alt="Gym 1"
                />
                <div class="d-flex flex-column ml-2 showgym">
                  <span style={{ fontSize: "15px", fontWeight: 700 }}>
                    {gym.gym_name}
                  </span>
                  <span class="text-black-50">{gym.time}</span>
                  <span class="ratings">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        style={{
                          cursor: "pointer",
                          color: value <= gym?.averageRating ? "gold" : "grey",
                        }}
                      >
                        &#9733;
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <p>{gym.address.address.substring(0, 80)}...</p>
              {/* <div class="text-primary nonew" onClick={() => {
                        navige(el);
                      }}> */}
              <Link
                to={`/aboutgym/${gym._id}`}
                class="text-primary nonew"
                style={{ textDecoration: "none" }}
              >
                View <FontAwesomeIcon icon={faChevronRight} />
              </Link>

              {/* </div> */}
            </div>
          </div>
          ) )}
        </div>
      );
    }
  };

  return (
    <section class="d2c_project_wrapper">
      <div class="container">
        <h2 style={{ fontWeight: 700, fontSize: "45px" }}>
          {home?.find_gym_teg1}
        </h2>
        <p style={{ fontSize: "19px" }}>{home?.find_gym_teg2}</p>
        <div class="mt-5" style={{ paddingBottom: "20px" }}>
          <div>
            <input
              style={{
                paddingLeft: "10px",
                margin: "0px 0px 20px 0px",
                width: "250px",
                height: "35px",
                borderRadius: "5px 0px 0px 5px",
              }}
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  search();
                }
              }}
              placeholder="Search..."
            />
            <button
              style={{
                height: "35px",
                width: "35px",
                borderRadius: "0px 5px 5px 0px",
                backgroundColor: "#7258BD",
                color: "white",
              }}
              onClick={search}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <div id="searchResults">{displayResults()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindGym;
