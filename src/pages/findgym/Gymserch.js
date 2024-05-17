import React, { useContext, useEffect, useState } from "react";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Gymserch = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, gym } = useContext(AuthContext);
  const home = data?.data?.data;
  const gym1 = gym?.data?.data;

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (gym1 && id) {
      const input = id.toLowerCase().trim();
      const results = gym1.filter((gym) => {
        const nameMatch = gym.gym_name.toLowerCase().includes(input);
        const cityMatch = gym.address.city.toLowerCase().includes(input);
        const stateMatch = gym.address.state.toLowerCase().includes(input);
        const addressMatch = gym.address.address.toLowerCase().includes(input);
        return nameMatch || cityMatch || stateMatch || addressMatch;
      });
      setSearchResults(results);
    }
  }, [gym1, id]);

  const search = () => {
    navigate(`/findgym/${searchInput}`);
  };

  const displayResults = () => {
    return (
      <div className="row">
        {searchResults.map((gym) => (
          <div className="col-md-4" key={gym._id}>
            <div className="card p-3" style={{ height: "220px" }}>
              <div className="d-flex flex-row mb-3">
                <img
                  src={gym.profile_photo}
                  width="70"
                  height="70"
                  style={{ borderRadius: "5%" }}
                  alt="Gym 1"
                />
                <div className="d-flex flex-column ml-2 showgym">
                  <span style={{ fontSize: "15px", fontWeight: 700 }}>{gym.gym_name}</span>
                  <span className="text-black-50">{gym.time}</span>
                  <span className="ratings">
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
              <Link
                to={`/aboutgym/${gym._id}`}
                className="text-primary nonew"
                style={{ textDecoration: "none" }}
              >
                View <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="d2c_project_wrapper">
      <div className="container">
        <h2 style={{ fontWeight: 700, fontSize: "45px" }}>{home?.find_gym_teg1}</h2>
        <p style={{ fontSize: "19px" }}>{home?.find_gym_teg2}</p>
        <div className="mt-5" style={{ paddingBottom: "20px" }}>
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
                if (e.key === "Enter") {
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

export default Gymserch;
