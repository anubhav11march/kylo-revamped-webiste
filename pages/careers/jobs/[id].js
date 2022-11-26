
import React, { useRef, useState } from "react";
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import { storage } from "../../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Spinner from "react-bootstrap/Spinner";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  designation: "",
  resume: "",
};


const JobDetails = () => {
  const [disable, setDisable] = useState(false);
  const [form, setForm] = useState(INITIAL_VALUES);
  const [fileUpload, setFileupload] = useState(null);
  const [uploading, setUploading] = useState(false);
  const URL = useRef();

   const uploadFile = async () => {
     if (fileUpload == null) return;
     const fileRef = ref(storage, `resume/${fileUpload.name + v4()}`);
     await uploadBytes(fileRef, fileUpload).then(async (snapshot) => {
       await getDownloadURL(snapshot.ref).then(async (url) => {
         URL.current = url;
       });
     });
   };

   const handleChange = (e) => {
     const { name, value } = e.target;
     setForm({ ...form, [name]: value });
  };
  
   const handleSubmit = async (e) => {
     e.preventDefault();
     setUploading(true);

     await uploadFile();

     if (!URL.current) {
       alert("Something went wrong !!");
       return;
     }

     const formData = {
       fullName: form.fullName,
       email: form.email,
       phone: form.phone,
       designation: form.designation,
       resume: URL.current,
     };

     const res = await fetch("/api/applications", {
       method: "POST",
       body: JSON.stringify(formData),
       headers: {
         "Content-Type": "application/json",
       },
     });
     const data = await res.json();
     if (data.success) {
       setUploading(false);
       alert("Application Sent !!");
       setForm(INITIAL_VALUES);
     } else alert("Something went wrong!!");
   };


    return (
      <Layout pageTitle="Maxdi | Business & Digital Agency">
        {/* <PageHeader title="Careers" crumbTitle="Careers" /> */}
        <Header
          heroLogo="/assets/images/logo/kylo-image.png"
          headerClass="header__white"
          menuClass="main-menu-3"
        />
        <main>
          <section className="pt-100 pb-80">
            <header className="job_jd-header">
              <div>
                <h2>React Dev</h2>
                <h5>Work Type: Full Time</h5>
              </div>
              <a
                href="#apply_form"
                className="m-btn"
                onClick={() => setDisable(true)}
              >
                Apply Now
              </a>
            </header>
            <div className="mt-40 jobs_desc">
              <p>Responsibilities</p>
              <ul style={{ paddingLeft: "25px" }}>
                <li style={{ listStyle: "disc" }}>
                  Developing new user-facing features using React.js
                </li>
                <li style={{ listStyle: "disc" }}>
                  Building reusable components and front-end libraries for
                  future use
                </li>
                <li style={{ listStyle: "disc" }}>
                  Translating designs and wireframes into high-quality code
                </li>
                <li style={{ listStyle: "disc" }}>
                  Optimizing components for maximum performance across a vast
                  array of web-capable devices and browsers
                </li>
              </ul>

              <br />

              <p>Skills</p>
              <ul style={{ paddingLeft: "25px" }}>
                <li style={{ listStyle: "disc" }}>
                  Strong proficiency in JavaScript, including DOM manipulation
                  and the JavaScript object model
                </li>
                <li style={{ listStyle: "disc" }}>
                  Thorough understanding of React.js and its core principles
                </li>
                <li style={{ listStyle: "disc" }}>
                  Experience with popular React.js workflows (such as Flux or
                  Redux)
                </li>
                <li style={{ listStyle: "disc" }}>
                  Familiarity with modern front-end build pipelines and tools
                </li>
              </ul>
            </div>
            {disable ? (
              <div
                style={{ marginTop: "10px" }}
                className="contact__form contact__form-2 quick_apply"
                id="apply_form"
              >
                <div className="contact__form-content">
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="field-format d-sm-flex justify-content-between mb-40">
                      <div className="form-group pr-10 form-group-2">
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="field-format d-sm-flex justify-content-between mb-40">
                      <div className="form-group pr-10 form-group-2">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleChange}
                          value={form.email}
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>

                    <div className="field-format d-sm-flex justify-content-between mb-40">
                      <div className="form-group pr-10 form-group-2">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone Number"
                          maxLength={10}
                          minLength={10}
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="field-format d-sm-flex justify-content-between mb-40">
                      <div className="form-group pr-10 form-group-2">
                        <select name="designation" onChange={handleChange}>
                          <option value="">Designation Applying for</option>
                          <option value="React Developer">
                            React Developer
                          </option>
                          <option value="Backend Developer">
                            Backend Developer
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="field-format d-sm-flex justify-content-between mb-40">
                      <div className="form-group pr-10 form-group-2">
                        <input
                          type="file"
                          className="form-control"
                          name="resume"
                          placeholder="Upload Resume"
                          required
                          style={{ display: "none" }}
                          id="resume"
                          onChange={(e) => setFileupload(e.target.files[0])}
                        />
                        <div className="resume_input">
                          <p>
                            {fileUpload === null
                              ? "Upload Resume"
                              : "File Uploaded"}
                          </p>
                          <img
                            onClick={() =>
                              document.querySelector("#resume").click()
                            }
                            src="/assets/images/upload.png"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="m-btn"
                      disabled={uploading ? true : false}
                    >
                      {uploading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Send to us"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              ""
            )}
          </section>
        </main>
        <Footer />
      </Layout>
    );
}

export default JobDetails;