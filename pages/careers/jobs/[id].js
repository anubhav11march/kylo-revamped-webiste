
import React from 'react'
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';

const JobDetails = () => {
    return (
      <Layout pageTitle="Maxdi | Business & Digital Agency">
        {/* <PageHeader title="Careers" crumbTitle="Careers" /> */}
        <Header
          heroLogo="/assets/images/logo/kylo-image.png"
          headerClass="header__white"
          menuClass="main-menu-3"
        />
        <main>
          <section className="pt-100">
            <header
              className='job_jd-header'
            >
              <div>
                <h2>React Dev</h2>
                <h5>Work Type: Full Time</h5>
              </div>
              <a
               
                href="#apply_form"
                className="m-btn"
              >
                Apply Now
              </a>
            </header>
            <div className='jobs_desc'>
              <p>
                Business Development Intern duties and responsibilities:
                Developing and executing sales plans to meet and exceed monthly
                and quarterly sales goals Growing business through the
                development of new leads and new contacts Lead Generation
                Building business relationships with current and potential
                clients Maintaining and updating sales, marketing and business
                development documentation Collaborating with management on sales
                goals Support the team with other responsibilities as required
                Business Development Intern requirements and qualifications:
                Minimum of a Bachelor’s Degree in Business, Marketing, Finance
                or similar field Minimum of 0-6 months of experience in sales,
                business development or similar role Experience with CRM
                software Proficiency in MS Office Excellent multitasking skills
                Ability to prioritize tasks Excellent verbal and written
                communication skills Ability to present and explain ideas to a
                variety of audiences Ability to work under pressure Ability to
                sell value and create credibility Ability to maintain a high
                level of professionalism and confidentiality Enthusiastic to
                build good relationships with people Ability to work well in a
                team environment
              </p>
            </div>
            <div
              style={{marginTop: "10px"}}
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
          </section>
        </main>
        <Footer />
      </Layout>
    );
}

export default JobDetails;