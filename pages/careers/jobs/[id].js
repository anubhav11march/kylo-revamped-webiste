
import React, { useState } from 'react'
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';

const JobDetails = () => {
  const [disable, setDisable] = useState(false);

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
                  <form action="#" id="contact-form" method="POST">
                    <div className="field-format d-sm-flex justify-content-between mb-40">
                      <div className="form-group pr-10 form-group-2">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
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
                          name="number"
                          placeholder="Phone Number"
                          maxLength={10}
                          minLength={10}
                          required
                        />
                      </div>
                    </div>

                    <div className="field-format d-sm-flex justify-content-between mb-40">
                      <div className="form-group pr-10 form-group-2">
                        <select>
                          <option>Designation Applying for</option>
                          <option>React Developer</option>
                          <option>Backend Developer</option>
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
                        />
                        <div className="resume_input">
                          <p>Upload Resume</p>
                          <img
                            onClick={() =>
                              document.querySelector("#resume").click()
                            }
                            src="/assets/images/upload.png"
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="m-btn">
                      Send to us
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