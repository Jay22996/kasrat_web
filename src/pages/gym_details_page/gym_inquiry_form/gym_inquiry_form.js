import {
  faEnvelope,
  faMap,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const GymInquiryForm = () => {
    
  const { id } = useParams();
  const { data } = useContext(AuthContext);
  const home = data?.data?.data;
  var baseurl = "https://node-test-1avh.onrender.com";

  const [data1, setdata1] = useState("");
  useEffect(() => {
    axios
      .get(`${baseurl}/gym/findgymbyid/${id}`)
      .then(function (response) {
        setdata1(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, [baseurl]);

  const gym = data1?.data?.data;
  const gymid = gym?._id;
  const [formData, setFormData] = useState({
    user_name: "",
    user_num: "",
    date: new Date(),
    plan: "",
    comment: "",
    medical_issue: "",
    do_gym: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submit = async () => {
    if (
      formData.user_name === "" ||
      formData.user_num === "" ||
      formData.plan === "" ||
      formData.do_gym === ""
    ) { document.getElementById("alert").style.display = "block";
    setTimeout(() => {
      document.getElementById("alert").style.display = "none";
    }, 2000);
    } else {
      if (formData.comment === "") {
        formData.comment = "no comment";
      }
      if (formData.medical_issue === "") {
        formData.medical_issue = "no medical issue";
      }

      await axios
      .post (`${baseurl}/inquiry/inquirysend/${gymid}`, formData)
      .then(function (response) {
          if(response.data.status === "inquiry send"){
            setFormData({
                user_name: "",
                user_num: "",
                plan: "",
                comment: "",
                medical_issue: "",
                do_gym: "",
              });
          }
      })
      .catch(function (error) {
          console.log(error);
      });
      

      document.getElementById("true").style.display = "block";
    setTimeout(() => {
      document.getElementById("true").style.display = "none";
    }, 9000);
    }
  };
  return (
    <section class="d2c_contact_wrapper d2c_contact_page">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xl-6 offset-md-2 offset-xl-3 text-center">
            <h2 className="mt-5" style={{ fontWeight: 600, fontSize: "45px" }}>
              {home?.gym_inquiry1}
            </h2>
            <p class="d2c_contact_title_content" style={{ fontSize: "19px" }}>
              {home?.gym_inquiry2}
            </p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-12 col-lg-6 mb-5 mb-lg-0 wow fadeInLeft">
            <div class="d2c_form_wrapper">
              <div class="row needs-validation" novalidate>
                <div class="col-md-6">
                  <label
                    for="validationCustomFirstName"
                    class="form-label mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomLastName"
                    autoComplete="off"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="validationCustomLastName" class="form-label mb-3">
                    Mobile No
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomLastName"
                    autoComplete="off"
                    name="user_num"
                    value={formData.user_num}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustomLastName" class="form-label mb-3">
                    Select Plan
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                  >
                    <option selected>Open this select menu</option>
                    <option value="Trial">Trial</option>
                    <option value="1">1 month</option>
                    <option value="3">3 month</option>
                    <option value="6">6 month</option>
                    <option value="12">1 year</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomLastName" class="form-label mb-3">
                    Do you have any gym experience?
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="do_gym"
                    value={formData.do_gym}
                    onChange={handleChange}
                  >
                    <option selected>Open this select menu</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomMessage" class="form-label mb-3">
                    Medical Issue
                  </label>
                  <textarea
                    class="form-control"
                    rows="4"
                    id="validationCustomMessage"
                    placeholder="Type medical issue here..."
                    required
                    name="medical_issue"
                    value={formData.medical_issue}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomMessage" class="form-label mb-3">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    rows="4"
                    id="validationCustomMessage"
                    placeholder="Type medical issue here..."
                    required
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                  ></textarea>
                  <button onClick={submit} class="btn1">
                    Send Inquiry
                  </button>
                    <div
                    id="alert"
                        class="alert alert-primary align-items-center"
                        role="alert"
                        style={{display:"none", backgroundColor: "rgb(237 138 148)" }}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="Warning:"
                        >
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg> Name,Mobile Number,Plan and gym experience must be provide
                    </div>
                    <div
                    id="true"
                        class="alert alert-primary align-items-center"
                        role="alert"
                        style={{display:"none", backgroundColor: "purplr" }}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="Warning:"
                        >
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg> Inquiry successfully sent! We appreciate your interest and we will contact you soon.
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 wow fadeInRight">
            <div class="d2c_contact_us_wrapper">
              <h2 style={{ fontWeight: 600, fontSize: "45px" }}>Contact Us</h2>
              <p class="d2c_contact_content" style={{ fontSize: "19px" }}>
                Don't hesitate to ask for a consultation or ask any type of
                questions directly, just contact us
              </p>
              <ul>
                <li class="d-flex">
                  <FontAwesomeIcon icon={faMap} style={{ fontSize: "30px" }} />
                  <div class="d2c_contact_info">
                    <p class="mb-1">
                      <span>{gym?.gym_name}</span>
                    </p>
                    <p>{gym?.address?.address}</p>
                  </div>
                </li>
                <li class="d-flex">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ fontSize: "30px" }}
                  />
                  <div class="d2c_contact_info">
                    <p class="mb-1">
                      <span>Email Address</span>
                    </p>
                    <p>
                      <a
                        style={{ textDecoration: "none", color: "#674CAE" }}
                        href={`mailto:${gym?.email}`}
                      >
                        {gym?.email}
                      </a>
                    </p>
                  </div>
                </li>
                <li class="d-flex">
                  <FontAwesomeIcon
                    icon={faSquarePhone}
                    style={{ fontSize: "30px" }}
                  />
                  <div class="d2c_contact_info">
                    <p class="mb-1">
                      <span>Mobile No</span>
                    </p>
                    <p>
                      <a
                        style={{ textDecoration: "none", color: "#674CAE" }}
                        href={`tel:${gym?.mobile_num}`}
                      >
                        {gym?.mobile_num}
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div class="d2c_contact_map position-relative rounded-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6050.469896764953!2d-73.98371524427581!3d40.69082292666655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4b350fc303%3A0x4ae5d65964e327f0!2sWilloughby%20St%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e0!3m2!1sen!2sbd!4v1708337743218!5m2!1sen!2sbd"
                        class="rounded-3" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div class="d2c_overlay rounded-3"></div>
                </div> */}
      </div>
    </section>
  );
};

export default GymInquiryForm;
