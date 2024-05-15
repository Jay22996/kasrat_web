import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
const ContactUsPage = () => {
    const { data } = useContext(AuthContext);
    var baseurl = "https://node-test-1avh.onrender.com";

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
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
          formData.name === "" ||
          formData.number === "" ||
          formData.email === ""
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
          .post (`${baseurl}/inquiry/contact`,formData)
          .then(function (response) {
              if(response.data.status === "done"){
                setFormData({
                    name: "",
                    number: "",
                    email: "",
                    message: "",
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

    const home = data?.data?.data;
    return (
        <section class="d2c_contact_wrapper d2c_contact_page">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-xl-6 offset-md-2 offset-xl-3 text-center">
                        <h2 className='mt-5' style={{ fontWeight: 600, fontSize: '45px' }}>{home?.kasrat_con_teg1}</h2>
                        <p class="d2c_contact_title_content" style={{fontSize: '19px' }}>{home?.kasrat_con_teg2}</p>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 mb-5 mb-lg-0 wow fadeInLeft">
                        <div class="d2c_form_wrapper">
                            <div class="row needs-validation" novalidate>
                                <div class="col-md-6">
                                    <label for="validationCustomFirstName" class="form-label mb-3">First Name</label>
                                    <input type="text" class="form-control" id="validationCustomFirstName"
                                        autocomplete="off" placeholder="First Name" name="name"
                                        value={formData.name}
                                        onChange={handleChange} required/>
                                </div>
                                <div class="col-md-6">
                                    <label for="validationCustomLastName" class="form-label mb-3">Contact Numbere</label>
                                    <input type="text" class="form-control" id="validationCustomLastName" autocomplete="off"
                                        placeholder="Contact Number" required name="number"
                                        value={formData.number}
                                        onChange={handleChange}/>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustomEmail" class="form-label mb-3">Email Address</label>
                                    <div class="input-group has-validation">
                                        <input type="email" class="form-control" id="validationCustomEmail"
                                            autocomplete="on" placeholder="Hello@mail.com" required name="email"
                                            value={formData.email}
                                            onChange={handleChange}/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustomMessage" class="form-label mb-3">Message</label>
                                    <textarea class="form-control" rows="4" id="validationCustomMessage"
                                        placeholder="Type message here..." required name="message"
                                        value={formData.message}
                                        onChange={handleChange}></textarea>
                                    <button class="btn1" onClick={submit}>Send Message</button>
                                    <div
                    id="alert"
                    class="alert alert-primary align-items-center"
                    role="alert"
                    style={{
                      display: "none",
                      backgroundColor: "rgb(237 138 148)",
                    }}
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
                    </svg>{" "}
                    Name,Mobile Number and Email must be provide
                  </div>
                  <div
                    id="true"
                    class="alert alert-primary align-items-center"
                    role="alert"
                    style={{ display: "none", backgroundColor: "purplr" }}
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
                    </svg>{" "}
                    Inquiry successfully sent! We appreciate your interest and
                    we will contact you soon.
                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 wow fadeInRight">
                        <div class="d2c_contact_us_wrapper">
                            <h2 style={{ fontWeight: 600, fontSize: '45px' }}>{home?.kasrat_con_teg3}</h2>
                            <p class="d2c_contact_content" style={{fontSize: '19px' }}>{home?.kasrat_con_teg4}</p>
                            <ul>
                                <li class="d-flex">
                                <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"30px"}}/>
                                    <div class="d2c_contact_info">
                                        <p class="mb-1"><span>Email Address</span></p>
                                        <p><a style={{textDecoration:"none",color:"#674CAE"}} href={`mailto:${home?.footer_email}`}>{home?.footer_email}</a></p>
                                    </div>
                                </li>
                                <li class="d-flex">
                                <FontAwesomeIcon icon={faSquarePhone} style={{fontSize:"30px"}}/>
                                    <div class="d2c_contact_info">
                                        <p class="mb-1"><span>Mobile No</span></p>
                                        <p><a style={{textDecoration:"none",color:"#674CAE"}} href={`tel:${home?.footer_com}`}>{home?.footer_com}</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d2c_contact_map position-relative rounded-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.530027989782!2d72.89008009999999!3d21.2108208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2fda200691%3A0x30a6ecf446ef9446!2sAlaknanda%20Infoplus!5e0!3m2!1sen!2sin!4v1715688558757!5m2!1sen!2sin"
                        class="rounded-3"  allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div class="d2c_overlay rounded-3"></div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsPage;