//TODO: Fix routes, api and put mapping in functions 

import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Spinner from "react-bootstrap/Spinner";

import { useRouter } from 'next/router'

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  designation: "",
  resume: "",
};

const QuickApply = () => {

  const { push, query } = useRouter();
  const [jobData, setJobData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [form, setForm] = useState(INITIAL_VALUES);
  const [fileUpload, setFileupload] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [uploadSuccess, setUploadSuccess] = useState(false);

  const [countryCode, setCountryCode] = useState("+91");


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
      alert("Something went wrong!");
      return;
    }

    const formData = {
      fullName: form.fullName,
      email: form.email,
      phone: `+${countryCode}-${form.phone}`,
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
      setUploadSuccess(true);
      alert("Application Sent!");
      setForm(INITIAL_VALUES);
    } else alert("Something went wrong!");
  };

  // useEffect(() => {
  //   if (!jobData) {
  //     fetch(`/api/jobs?department=${query.department}&workType=${query.workType}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setJobData(data?.data);
  //         console.log(`jobData`, jobData)
  //       });
  //   }
  //   //FIXME: Query in dependency array isnt fetching the data and jobData is making infinite calls 
  // }, [jobData]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/jobs?department=${query.department}&workType=${query.workType}`)
      .then((res) => res.json())
      .then((data) => {
        setJobData(data?.data);
        console.log(`jobData : `, jobData)
        setLoading(false);
      });
  }, [query, uploadSuccess]);

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
                            placeholder="Full Name *"
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
                            placeholder="Email Address *"
                            required
                          />
                        </div>
                      </div>


                      <div className="d-flex w-100" style={{ marginBottom: "30px" }}>
                        <div style={{ width: "200px", lineHeight: "55px" }}>
                          <select onChange={(e) => {setCountryCode(e.target.value)}}>
                            <option data-countryCode="IN" value="91">(+91)</option>
                            <option data-countryCode="DZ" value="213">(+213)</option>
                            <option data-countryCode="AD" value="376">(+376)</option>
                            <option data-countryCode="AO" value="244">(+244)</option>
                            <option data-countryCode="AI" value="1264">(+1264)</option>
                            <option data-countryCode="AG" value="1268">(+1268)</option>
                            <option data-countryCode="AR" value="54">(+54)</option>
                            <option data-countryCode="AM" value="374">(+374)</option>
                            <option data-countryCode="AW" value="297">(+297)</option>
                            <option data-countryCode="AU" value="61">(+61)</option>
                            <option data-countryCode="AT" value="43">(+43)</option>
                            <option data-countryCode="AZ" value="994">(+994)</option>
                            <option data-countryCode="BS" value="1242">(+1242)</option>
                            <option data-countryCode="BH" value="973">(+973)</option>
                            <option data-countryCode="BD" value="880">(+880)</option>
                            <option data-countryCode="BB" value="1246">(+1246)</option>
                            <option data-countryCode="BY" value="375">(+375)</option>
                            <option data-countryCode="BE" value="32">(+32)</option>
                            <option data-countryCode="BZ" value="501">(+501)</option>
                            <option data-countryCode="BJ" value="229">(+229)</option>
                            <option data-countryCode="BM" value="1441">(+1441)</option>
                            <option data-countryCode="BT" value="975">(+975)</option>
                            <option data-countryCode="BO" value="591">(+591)</option>
                            <option data-countryCode="BA" value="387">(+387)</option>
                            <option data-countryCode="BW" value="267">(+267)</option>
                            <option data-countryCode="BR" value="55">(+55)</option>
                            <option data-countryCode="BN" value="673">(+673)</option>
                            <option data-countryCode="BG" value="359">(+359)</option>
                            <option data-countryCode="BF" value="226">(+226)</option>
                            <option data-countryCode="BI" value="257">(+257)</option>
                            <option data-countryCode="KH" value="855">(+855)</option>
                            <option data-countryCode="CM" value="237">(+237)</option>
                            <option data-countryCode="CA" value="1">(+1)</option>
                            <option data-countryCode="CV" value="238">(+238)</option>
                            <option data-countryCode="KY" value="1345">(+1345)</option>
                            <option data-countryCode="CF" value="236">(+236)</option>
                            <option data-countryCode="CL" value="56">(+56)</option>
                            <option data-countryCode="CN" value="86">(+86)</option>
                            <option data-countryCode="CO" value="57">(+57)</option>
                            <option data-countryCode="KM" value="269">(+269)</option>
                            <option data-countryCode="CG" value="242">(+242)</option>
                            <option data-countryCode="CK" value="682">(+682)</option>
                            <option data-countryCode="CR" value="506">(+506)</option>
                            <option data-countryCode="HR" value="385">(+385)</option>
                            <option data-countryCode="CU" value="53">(+53)</option>
                            <option data-countryCode="CY" value="90392">(+90392)</option>
                            <option data-countryCode="CY" value="357">(+357)</option>
                            <option data-countryCode="CZ" value="42">(+42)</option>
                            <option data-countryCode="DK" value="45">(+45)</option>
                            <option data-countryCode="DJ" value="253">(+253)</option>
                            <option data-countryCode="DM" value="1809">(+1809)</option>
                            <option data-countryCode="DO" value="1809">(+1809)</option>
                            <option data-countryCode="EC" value="593">(+593)</option>
                            <option data-countryCode="EG" value="20">(+20)</option>
                            <option data-countryCode="SV" value="503">(+503)</option>
                            <option data-countryCode="GQ" value="240">(+240)</option>
                            <option data-countryCode="ER" value="291">(+291)</option>
                            <option data-countryCode="EE" value="372">(+372)</option>
                            <option data-countryCode="ET" value="251">(+251)</option>
                            <option data-countryCode="FK" value="500">(+500)</option>
                            <option data-countryCode="FO" value="298">(+298)</option>
                            <option data-countryCode="FJ" value="679">(+679)</option>
                            <option data-countryCode="FI" value="358">(+358)</option>
                            <option data-countryCode="FR" value="33">(+33)</option>
                            <option data-countryCode="GF" value="594">(+594)</option>
                            <option data-countryCode="PF" value="689">(+689)</option>
                            <option data-countryCode="GA" value="241">(+241)</option>
                            <option data-countryCode="GM" value="220">(+220)</option>
                            <option data-countryCode="GE" value="7880">(+7880)</option>
                            <option data-countryCode="DE" value="49">(+49)</option>
                            <option data-countryCode="GH" value="233">(+233)</option>
                            <option data-countryCode="GI" value="350">(+350)</option>
                            <option data-countryCode="GR" value="30">(+30)</option>
                            <option data-countryCode="GL" value="299">(+299)</option>
                            <option data-countryCode="GD" value="1473">(+1473)</option>
                            <option data-countryCode="GP" value="590">(+590)</option>
                            <option data-countryCode="GU" value="671">(+671)</option>
                            <option data-countryCode="GT" value="502">(+502)</option>
                            <option data-countryCode="GN" value="224">(+224)</option>
                            <option data-countryCode="GW" value="245">(+245)</option>
                            <option data-countryCode="GY" value="592">(+592)</option>
                            <option data-countryCode="HT" value="509">(+509)</option>
                            <option data-countryCode="HN" value="504">(+504)</option>
                            <option data-countryCode="HK" value="852">(+852)</option>
                            <option data-countryCode="HU" value="36">(+36)</option>
                            <option data-countryCode="IS" value="354">(+354)</option>
                            <option data-countryCode="ID" value="62">(+62)</option>
                            <option data-countryCode="IR" value="98">(+98)</option>
                            <option data-countryCode="IQ" value="964">(+964)</option>
                            <option data-countryCode="IE" value="353">(+353)</option>
                            <option data-countryCode="IL" value="972">(+972)</option>
                            <option data-countryCode="IT" value="39">(+39)</option>
                            <option data-countryCode="JM" value="1876">(+1876)</option>
                            <option data-countryCode="JP" value="81">(+81)</option>
                            <option data-countryCode="JO" value="962">(+962)</option>
                            <option data-countryCode="KZ" value="7">(+7)</option>
                            <option data-countryCode="KE" value="254">(+254)</option>
                            <option data-countryCode="KI" value="686">(+686)</option>
                            <option data-countryCode="KP" value="850">(+850)</option>
                            <option data-countryCode="KR" value="82">(+82)</option>
                            <option data-countryCode="KW" value="965">(+965)</option>
                            <option data-countryCode="KG" value="996">(+996)</option>
                            <option data-countryCode="LA" value="856">(+856)</option>
                            <option data-countryCode="LV" value="371">(+371)</option>
                            <option data-countryCode="LB" value="961">(+961)</option>
                            <option data-countryCode="LS" value="266">(+266)</option>
                            <option data-countryCode="LR" value="231">(+231)</option>
                            <option data-countryCode="LY" value="218">(+218)</option>
                            <option data-countryCode="LI" value="417">(+417)</option>
                            <option data-countryCode="LT" value="370">(+370)</option>
                            <option data-countryCode="LU" value="352">(+352)</option>
                            <option data-countryCode="MO" value="853">(+853)</option>
                            <option data-countryCode="MK" value="389">(+389)</option>
                            <option data-countryCode="MG" value="261">(+261)</option>
                            <option data-countryCode="MW" value="265">(+265)</option>
                            <option data-countryCode="MY" value="60">(+60)</option>
                            <option data-countryCode="MV" value="960">(+960)</option>
                            <option data-countryCode="ML" value="223">(+223)</option>
                            <option data-countryCode="MT" value="356">(+356)</option>
                            <option data-countryCode="MH" value="692">(+692)</option>
                            <option data-countryCode="MQ" value="596">(+596)</option>
                            <option data-countryCode="MR" value="222">(+222)</option>
                            <option data-countryCode="YT" value="269">(+269)</option>
                            <option data-countryCode="MX" value="52">(+52)</option>
                            <option data-countryCode="FM" value="691">(+691)</option>
                            <option data-countryCode="MD" value="373">(+373)</option>
                            <option data-countryCode="MC" value="377">(+377)</option>
                            <option data-countryCode="MN" value="976">(+976)</option>
                            <option data-countryCode="MS" value="1664">(+1664)</option>
                            <option data-countryCode="MA" value="212">(+212)</option>
                            <option data-countryCode="MZ" value="258">(+258)</option>
                            <option data-countryCode="MN" value="95">(+95)</option>
                            <option data-countryCode="NA" value="264">(+264)</option>
                            <option data-countryCode="NR" value="674">(+674)</option>
                            <option data-countryCode="NP" value="977">(+977)</option>
                            <option data-countryCode="NL" value="31">(+31)</option>
                            <option data-countryCode="NC" value="687">(+687)</option>
                            <option data-countryCode="NZ" value="64">(+64)</option>
                            <option data-countryCode="NI" value="505">(+505)</option>
                            <option data-countryCode="NE" value="227">(+227)</option>
                            <option data-countryCode="NG" value="234">(+234)</option>
                            <option data-countryCode="NU" value="683">(+683)</option>
                            <option data-countryCode="NF" value="672">(+672)</option>
                            <option data-countryCode="NP" value="670">(+670)</option>
                            <option data-countryCode="NO" value="47">(+47)</option>
                            <option data-countryCode="OM" value="968">(+968)</option>
                            <option data-countryCode="PW" value="680">(+680)</option>
                            <option data-countryCode="PA" value="507">(+507)</option>
                            <option data-countryCode="PG" value="675">(+675)</option>
                            <option data-countryCode="PY" value="595">(+595)</option>
                            <option data-countryCode="PE" value="51">(+51)</option>
                            <option data-countryCode="PH" value="63">(+63)</option>
                            <option data-countryCode="PL" value="48">(+48)</option>
                            <option data-countryCode="PT" value="351">(+351)</option>
                            <option data-countryCode="PR" value="1787">(+1787)</option>
                            <option data-countryCode="QA" value="974">(+974)</option>
                            <option data-countryCode="RE" value="262">(+262)</option>
                            <option data-countryCode="RO" value="40">(+40)</option>
                            <option data-countryCode="RU" value="7">(+7)</option>
                            <option data-countryCode="RW" value="250">(+250)</option>
                            <option data-countryCode="SM" value="378">(+378)</option>
                            <option data-countryCode="ST" value="239">(+239)</option>
                            <option data-countryCode="SA" value="966">(+966)</option>
                            <option data-countryCode="SN" value="221">(+221)</option>
                            <option data-countryCode="CS" value="381">(+381)</option>
                            <option data-countryCode="SC" value="248">(+248)</option>
                            <option data-countryCode="SL" value="232">(+232)</option>
                            <option data-countryCode="SG" value="65">(+65)</option>
                            <option data-countryCode="SK" value="421">(+421)</option>
                            <option data-countryCode="SI" value="386">(+386)</option>
                            <option data-countryCode="SB" value="677">(+677)</option>
                            <option data-countryCode="SO" value="252">(+252)</option>
                            <option data-countryCode="ZA" value="27">(+27)</option>
                            <option data-countryCode="ES" value="34">(+34)</option>
                            <option data-countryCode="LK" value="94"> (+94)</option>
                            <option data-countryCode="SH" value="290">(+290)</option>
                            <option data-countryCode="KN" value="1869">(+1869)</option>
                            <option data-countryCode="SC" value="1758">(+1758)</option>
                            <option data-countryCode="SD" value="249">(+249)</option>
                            <option data-countryCode="SR" value="597">(+597)</option>
                            <option data-countryCode="SZ" value="268">(+268)</option>
                            <option data-countryCode="SE" value="46">(+46)</option>
                            <option data-countryCode="CH" value="41">(+41)</option>
                            <option data-countryCode="SI" value="963">(+963)</option>
                            <option data-countryCode="TW" value="886">(+886)</option>
                            <option data-countryCode="TJ" value="7">(+7)</option>
                            <option data-countryCode="TH" value="66">(+66)</option>
                            <option data-countryCode="TG" value="228">(+228)</option>
                            <option data-countryCode="TO" value="676">(+676)</option>
                            <option data-countryCode="TT" value="1868">(+1868)</option>
                            <option data-countryCode="TN" value="216">(+216)</option>
                            <option data-countryCode="TR" value="90">(+90)</option>
                            <option data-countryCode="TM" value="7">(+7)</option>
                            <option data-countryCode="TM" value="993">(+993)</option>
                            <option data-countryCode="TC" value="1649">(+1649)</option>
                            <option data-countryCode="TV" value="688">(+688)</option>
                            <option data-countryCode="UG" value="256">(+256)</option>
                            <option data-countryCode="GB" value="44">(+44)</option>
                            <option data-countryCode="UA" value="380">(+380)</option>
                            <option data-countryCode="AE" value="971">(+971)</option>
                            <option data-countryCode="UY" value="598">(+598)</option>
                            <option data-countryCode="US" value="1">(+1)</option>
                            <option data-countryCode="UZ" value="7">(+7)</option>
                            <option data-countryCode="VU" value="678">(+678)</option>
                            <option data-countryCode="VA" value="379">(+379)</option>
                            <option data-countryCode="VE" value="58">(+58)</option>
                            <option data-countryCode="VN" value="84">(+84)</option>
                            <option data-countryCode="VG" value="84">(+1284)</option>
                            <option data-countryCode="VI" value="84">(+1340)</option>
                            <option data-countryCode="WF" value="681">(+681)</option>
                            <option data-countryCode="YE" value="969">(+969)</option>
                            <option data-countryCode="YE" value="967">(+967)</option>
                            <option data-countryCode="ZM" value="260">(+260)</option>
                            <option data-countryCode="ZW" value="263">(+263)</option>

                          </select>
                        </div>
                        <div className="form-group pr-10 form-group-2" style={{ width: "100%", paddingLeft: "5px" }}>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Phone Number"
                            maxLength={15}
                            minLength={10}
                            required
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>


                      <div className="field-format d-sm-flex justify-content-between mb-40">
                        <div className="form-group pr-10 form-group-2">
                          <select name="designation" onChange={handleChange}>
                            <option value="">Position applying for</option>
                            {
                              jobData.length > 0 && jobData.map((x, y) =>
                                <option key={y}>{x.jobTitle}</option>)

                            }
                          </select>
                        </div>
                      </div>

                      <div className="field-format d-sm-flex justify-content-between mb-40">
                        <div
                          className="form-group pr-10 form-group-2"
                          onClick={() =>
                            document.querySelector("#resume").click()
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <input
                            type="file"
                            className="form-control"
                            name="resume"
                            placeholder="Upload Resume *"
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
                              src="/assets/images/upload.png"
                              width={"20px"}
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
                      {uploadSuccess ?
                        <h6 style={{ paddingTop: "21px" }}>Your response has been recorded successfully!</h6>
                        :
                        <></>
                      }
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
                      // style={{ objectFit:"cover"}}
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
