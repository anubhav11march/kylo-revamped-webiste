import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Spinner from "react-bootstrap/Spinner";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  designation: "",
  resume: ""
}

const QuickApply = () => {
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
    console.log("form: ", form);

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
      alert("Message Sent !!");
      setForm(INITIAL_VALUES);
      } else alert("Something went wrong!!");
  };

  return (
    <section className="about__area fix p-relative pt-110 pb-120 about__pb quick_apply_career">
      <Container>
        <Row>
          <Col>
            <div
              className="contact__form contact__form-2 quick_apply_career-div"
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
                      {/* <img
                        src="https://img.freepik.com/free-photo/charming-businesswoman-glasses-striped-shirt-working-with-laptop-computer-while-siting-home_171337-13027.jpg?w=1060&t=st=1668582899~exp=1668583499~hmac=db91c9098a5681b5143228dddf0c1a268e3babf7048d534cdb3f377d53cde789"
                        alt=""
                      /> */}
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
