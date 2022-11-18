import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const QuickApply = () => {
  return (
    <section className="about__area fix p-relative pt-100 pb-120 about__pb quick_apply">
      <Container>
        <Row>
          <Col>
            <div
              className="contact__form contact__form-2 quick_apply"
              id="apply_form"
              style={{ boxShadow: "0", paddingTop: "0", paddingRight: "10px" }}
            >
              <Row>
                <Col
                  xl={{ span: 6, order: 1 }}
                  xs={{ span: 12, order: 2 }}
                  className="pt-60"
                >
                  <div className="contact__form-title mb-40">
                    <h4>Quick Apply</h4>
                  </div>
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
                </Col>
                <Col xl={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
                  <div className="about__thumb">
                    <div className="about__thumb-shape">
                      <img
                        className="about-s-1 d-none d-lg-block quick_apply-s-1"
                        src="/assets/images/shape/about/about-s-1.png"
                        alt=""
                      />
                      <img
                        className="quick_apply-shape-7"
                        src="/assets/images/shape/hero/hero-shape-7.png"
                        alt=""
                      />
                    </div>
                    <div className="quick-apply_thumb-image">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src="https://img.freepik.com/free-photo/charming-businesswoman-glasses-striped-shirt-working-with-laptop-computer-while-siting-home_171337-13027.jpg?w=1060&t=st=1668582899~exp=1668583499~hmac=db91c9098a5681b5143228dddf0c1a268e3babf7048d534cdb3f377d53cde789"
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuickApply;
