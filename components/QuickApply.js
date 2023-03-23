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

  const [chooseDesignation, setChooseDesignation] = useState(null);
  const [fileUploadedByClient, setFileUploadedByClient] = useState(null);

  const [fileUpload, setFileupload] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [uploadSuccess, setUploadSuccess] = useState(false);

  const [countryCode, setCountryCode] = useState("91");


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


    if (form.designation == "") {
      setChooseDesignation(false);
      console.log("Empty", form.designation);
      return;
    }

    if (form.designation != "") {
      setChooseDesignation(true);
      console.log("AA gya", form.designation);
    }

    if (fileUpload===null) {
      setFileUploadedByClient(false);
      console.log("No file");
      return;
    }

    if (fileUpload!=null) {
      setFileUploadedByClient(true);
      console.log("File", fileUpload);
    }


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
      alert("Your response has been recorded successfully!");
      setFileupload(null);
    document.getElementById("myselectbox").selectedIndex = 0;
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
                          <select onChange={(e) => { setCountryCode(e.target.value) }} style={{ height :"55px"}}>
                            <option data-countrycode="IN" value="91">(+91)</option>
                            <option data-countrycode="DZ" value="213">(+213)</option>
                            <option data-countrycode="AD" value="376">(+376)</option>
                            <option data-countrycode="AO" value="244">(+244)</option>
                            <option data-countrycode="AI" value="1264">(+1264)</option>
                            <option data-countrycode="AG" value="1268">(+1268)</option>
                            <option data-countrycode="AR" value="54">(+54)</option>
                            <option data-countrycode="AM" value="374">(+374)</option>
                            <option data-countrycode="AW" value="297">(+297)</option>
                            <option data-countrycode="AU" value="61">(+61)</option>
                            <option data-countrycode="AT" value="43">(+43)</option>
                            <option data-countrycode="AZ" value="994">(+994)</option>
                            <option data-countrycode="BS" value="1242">(+1242)</option>
                            <option data-countrycode="BH" value="973">(+973)</option>
                            <option data-countrycode="BD" value="880">(+880)</option>
                            <option data-countrycode="BB" value="1246">(+1246)</option>
                            <option data-countrycode="BY" value="375">(+375)</option>
                            <option data-countrycode="BE" value="32">(+32)</option>
                            <option data-countrycode="BZ" value="501">(+501)</option>
                            <option data-countrycode="BJ" value="229">(+229)</option>
                            <option data-countrycode="BM" value="1441">(+1441)</option>
                            <option data-countrycode="BT" value="975">(+975)</option>
                            <option data-countrycode="BO" value="591">(+591)</option>
                            <option data-countrycode="BA" value="387">(+387)</option>
                            <option data-countrycode="BW" value="267">(+267)</option>
                            <option data-countrycode="BR" value="55">(+55)</option>
                            <option data-countrycode="BN" value="673">(+673)</option>
                            <option data-countrycode="BG" value="359">(+359)</option>
                            <option data-countrycode="BF" value="226">(+226)</option>
                            <option data-countrycode="BI" value="257">(+257)</option>
                            <option data-countrycode="KH" value="855">(+855)</option>
                            <option data-countrycode="CM" value="237">(+237)</option>
                            <option data-countrycode="CA" value="1">(+1)</option>
                            <option data-countrycode="CV" value="238">(+238)</option>
                            <option data-countrycode="KY" value="1345">(+1345)</option>
                            <option data-countrycode="CF" value="236">(+236)</option>
                            <option data-countrycode="CL" value="56">(+56)</option>
                            <option data-countrycode="CN" value="86">(+86)</option>
                            <option data-countrycode="CO" value="57">(+57)</option>
                            <option data-countrycode="KM" value="269">(+269)</option>
                            <option data-countrycode="CG" value="242">(+242)</option>
                            <option data-countrycode="CK" value="682">(+682)</option>
                            <option data-countrycode="CR" value="506">(+506)</option>
                            <option data-countrycode="HR" value="385">(+385)</option>
                            <option data-countrycode="CU" value="53">(+53)</option>
                            <option data-countrycode="CY" value="90392">(+90392)</option>
                            <option data-countrycode="CY" value="357">(+357)</option>
                            <option data-countrycode="CZ" value="42">(+42)</option>
                            <option data-countrycode="DK" value="45">(+45)</option>
                            <option data-countrycode="DJ" value="253">(+253)</option>
                            <option data-countrycode="DM" value="1809">(+1809)</option>
                            <option data-countrycode="DO" value="1809">(+1809)</option>
                            <option data-countrycode="EC" value="593">(+593)</option>
                            <option data-countrycode="EG" value="20">(+20)</option>
                            <option data-countrycode="SV" value="503">(+503)</option>
                            <option data-countrycode="GQ" value="240">(+240)</option>
                            <option data-countrycode="ER" value="291">(+291)</option>
                            <option data-countrycode="EE" value="372">(+372)</option>
                            <option data-countrycode="ET" value="251">(+251)</option>
                            <option data-countrycode="FK" value="500">(+500)</option>
                            <option data-countrycode="FO" value="298">(+298)</option>
                            <option data-countrycode="FJ" value="679">(+679)</option>
                            <option data-countrycode="FI" value="358">(+358)</option>
                            <option data-countrycode="FR" value="33">(+33)</option>
                            <option data-countrycode="GF" value="594">(+594)</option>
                            <option data-countrycode="PF" value="689">(+689)</option>
                            <option data-countrycode="GA" value="241">(+241)</option>
                            <option data-countrycode="GM" value="220">(+220)</option>
                            <option data-countrycode="GE" value="7880">(+7880)</option>
                            <option data-countrycode="DE" value="49">(+49)</option>
                            <option data-countrycode="GH" value="233">(+233)</option>
                            <option data-countrycode="GI" value="350">(+350)</option>
                            <option data-countrycode="GR" value="30">(+30)</option>
                            <option data-countrycode="GL" value="299">(+299)</option>
                            <option data-countrycode="GD" value="1473">(+1473)</option>
                            <option data-countrycode="GP" value="590">(+590)</option>
                            <option data-countrycode="GU" value="671">(+671)</option>
                            <option data-countrycode="GT" value="502">(+502)</option>
                            <option data-countrycode="GN" value="224">(+224)</option>
                            <option data-countrycode="GW" value="245">(+245)</option>
                            <option data-countrycode="GY" value="592">(+592)</option>
                            <option data-countrycode="HT" value="509">(+509)</option>
                            <option data-countrycode="HN" value="504">(+504)</option>
                            <option data-countrycode="HK" value="852">(+852)</option>
                            <option data-countrycode="HU" value="36">(+36)</option>
                            <option data-countrycode="IS" value="354">(+354)</option>
                            <option data-countrycode="ID" value="62">(+62)</option>
                            <option data-countrycode="IR" value="98">(+98)</option>
                            <option data-countrycode="IQ" value="964">(+964)</option>
                            <option data-countrycode="IE" value="353">(+353)</option>
                            <option data-countrycode="IL" value="972">(+972)</option>
                            <option data-countrycode="IT" value="39">(+39)</option>
                            <option data-countrycode="JM" value="1876">(+1876)</option>
                            <option data-countrycode="JP" value="81">(+81)</option>
                            <option data-countrycode="JO" value="962">(+962)</option>
                            <option data-countrycode="KZ" value="7">(+7)</option>
                            <option data-countrycode="KE" value="254">(+254)</option>
                            <option data-countrycode="KI" value="686">(+686)</option>
                            <option data-countrycode="KP" value="850">(+850)</option>
                            <option data-countrycode="KR" value="82">(+82)</option>
                            <option data-countrycode="KW" value="965">(+965)</option>
                            <option data-countrycode="KG" value="996">(+996)</option>
                            <option data-countrycode="LA" value="856">(+856)</option>
                            <option data-countrycode="LV" value="371">(+371)</option>
                            <option data-countrycode="LB" value="961">(+961)</option>
                            <option data-countrycode="LS" value="266">(+266)</option>
                            <option data-countrycode="LR" value="231">(+231)</option>
                            <option data-countrycode="LY" value="218">(+218)</option>
                            <option data-countrycode="LI" value="417">(+417)</option>
                            <option data-countrycode="LT" value="370">(+370)</option>
                            <option data-countrycode="LU" value="352">(+352)</option>
                            <option data-countrycode="MO" value="853">(+853)</option>
                            <option data-countrycode="MK" value="389">(+389)</option>
                            <option data-countrycode="MG" value="261">(+261)</option>
                            <option data-countrycode="MW" value="265">(+265)</option>
                            <option data-countrycode="MY" value="60">(+60)</option>
                            <option data-countrycode="MV" value="960">(+960)</option>
                            <option data-countrycode="ML" value="223">(+223)</option>
                            <option data-countrycode="MT" value="356">(+356)</option>
                            <option data-countrycode="MH" value="692">(+692)</option>
                            <option data-countrycode="MQ" value="596">(+596)</option>
                            <option data-countrycode="MR" value="222">(+222)</option>
                            <option data-countrycode="YT" value="269">(+269)</option>
                            <option data-countrycode="MX" value="52">(+52)</option>
                            <option data-countrycode="FM" value="691">(+691)</option>
                            <option data-countrycode="MD" value="373">(+373)</option>
                            <option data-countrycode="MC" value="377">(+377)</option>
                            <option data-countrycode="MN" value="976">(+976)</option>
                            <option data-countrycode="MS" value="1664">(+1664)</option>
                            <option data-countrycode="MA" value="212">(+212)</option>
                            <option data-countrycode="MZ" value="258">(+258)</option>
                            <option data-countrycode="MN" value="95">(+95)</option>
                            <option data-countrycode="NA" value="264">(+264)</option>
                            <option data-countrycode="NR" value="674">(+674)</option>
                            <option data-countrycode="NP" value="977">(+977)</option>
                            <option data-countrycode="NL" value="31">(+31)</option>
                            <option data-countrycode="NC" value="687">(+687)</option>
                            <option data-countrycode="NZ" value="64">(+64)</option>
                            <option data-countrycode="NI" value="505">(+505)</option>
                            <option data-countrycode="NE" value="227">(+227)</option>
                            <option data-countrycode="NG" value="234">(+234)</option>
                            <option data-countrycode="NU" value="683">(+683)</option>
                            <option data-countrycode="NF" value="672">(+672)</option>
                            <option data-countrycode="NP" value="670">(+670)</option>
                            <option data-countrycode="NO" value="47">(+47)</option>
                            <option data-countrycode="OM" value="968">(+968)</option>
                            <option data-countrycode="PW" value="680">(+680)</option>
                            <option data-countrycode="PA" value="507">(+507)</option>
                            <option data-countrycode="PG" value="675">(+675)</option>
                            <option data-countrycode="PY" value="595">(+595)</option>
                            <option data-countrycode="PE" value="51">(+51)</option>
                            <option data-countrycode="PH" value="63">(+63)</option>
                            <option data-countrycode="PL" value="48">(+48)</option>
                            <option data-countrycode="PT" value="351">(+351)</option>
                            <option data-countrycode="PR" value="1787">(+1787)</option>
                            <option data-countrycode="QA" value="974">(+974)</option>
                            <option data-countrycode="RE" value="262">(+262)</option>
                            <option data-countrycode="RO" value="40">(+40)</option>
                            <option data-countrycode="RU" value="7">(+7)</option>
                            <option data-countrycode="RW" value="250">(+250)</option>
                            <option data-countrycode="SM" value="378">(+378)</option>
                            <option data-countrycode="ST" value="239">(+239)</option>
                            <option data-countrycode="SA" value="966">(+966)</option>
                            <option data-countrycode="SN" value="221">(+221)</option>
                            <option data-countrycode="CS" value="381">(+381)</option>
                            <option data-countrycode="SC" value="248">(+248)</option>
                            <option data-countrycode="SL" value="232">(+232)</option>
                            <option data-countrycode="SG" value="65">(+65)</option>
                            <option data-countrycode="SK" value="421">(+421)</option>
                            <option data-countrycode="SI" value="386">(+386)</option>
                            <option data-countrycode="SB" value="677">(+677)</option>
                            <option data-countrycode="SO" value="252">(+252)</option>
                            <option data-countrycode="ZA" value="27">(+27)</option>
                            <option data-countrycode="ES" value="34">(+34)</option>
                            <option data-countrycode="LK" value="94"> (+94)</option>
                            <option data-countrycode="SH" value="290">(+290)</option>
                            <option data-countrycode="KN" value="1869">(+1869)</option>
                            <option data-countrycode="SC" value="1758">(+1758)</option>
                            <option data-countrycode="SD" value="249">(+249)</option>
                            <option data-countrycode="SR" value="597">(+597)</option>
                            <option data-countrycode="SZ" value="268">(+268)</option>
                            <option data-countrycode="SE" value="46">(+46)</option>
                            <option data-countrycode="CH" value="41">(+41)</option>
                            <option data-countrycode="SI" value="963">(+963)</option>
                            <option data-countrycode="TW" value="886">(+886)</option>
                            <option data-countrycode="TJ" value="7">(+7)</option>
                            <option data-countrycode="TH" value="66">(+66)</option>
                            <option data-countrycode="TG" value="228">(+228)</option>
                            <option data-countrycode="TO" value="676">(+676)</option>
                            <option data-countrycode="TT" value="1868">(+1868)</option>
                            <option data-countrycode="TN" value="216">(+216)</option>
                            <option data-countrycode="TR" value="90">(+90)</option>
                            <option data-countrycode="TM" value="7">(+7)</option>
                            <option data-countrycode="TM" value="993">(+993)</option>
                            <option data-countrycode="TC" value="1649">(+1649)</option>
                            <option data-countrycode="TV" value="688">(+688)</option>
                            <option data-countrycode="UG" value="256">(+256)</option>
                            <option data-countrycode="GB" value="44">(+44)</option>
                            <option data-countrycode="UA" value="380">(+380)</option>
                            <option data-countrycode="AE" value="971">(+971)</option>
                            <option data-countrycode="UY" value="598">(+598)</option>
                            <option data-countrycode="US" value="1">(+1)</option>
                            <option data-countrycode="UZ" value="7">(+7)</option>
                            <option data-countrycode="VU" value="678">(+678)</option>
                            <option data-countrycode="VA" value="379">(+379)</option>
                            <option data-countrycode="VE" value="58">(+58)</option>
                            <option data-countrycode="VN" value="84">(+84)</option>
                            <option data-countrycode="VG" value="84">(+1284)</option>
                            <option data-countrycode="VI" value="84">(+1340)</option>
                            <option data-countrycode="WF" value="681">(+681)</option>
                            <option data-countrycode="YE" value="969">(+969)</option>
                            <option data-countrycode="YE" value="967">(+967)</option>
                            <option data-countrycode="ZM" value="260">(+260)</option>
                            <option data-countrycode="ZW" value="263">(+263)</option>

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
                          <select name="designation" id="myselectbox" onChange={handleChange} style={{ height :"55px"}}>
                            <option value="">Position applying for</option>
                            {
                              jobData.length > 0 && jobData.map((x, y) =>
                                <option key={y}>{x.jobTitle}</option>)

                            }
                          </select>
                          {chooseDesignation===false ? "Please select the role you are applying for*" : ""}
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
                        <p>{fileUploadedByClient===false ? "Please upload your resume*" : ""}</p>
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
                      {/* {uploadSuccess ?
                        <h6 style={{ paddingTop: "21px" }}>Your response has been recorded successfully!</h6>
                        :
                        <></>
                      } */}
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
