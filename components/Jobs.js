import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router'

// const data = [
//   {
//     id: "1",
//     title: "React Dev",
//     desc: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
//   },
//   {
//     id: "2",
//     title: "Backend Dev",
//     desc: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
//   },
//   {
//     id: "3",
//     title: "Full Stack Dev",
//     desc: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
//   },
// ];

const Jobs = () => {
  const { push, query } = useRouter();
  const [data, setData] = useState(null);

  const [departmentQuery, setDepartmentQuery] = useState("none");
  // https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png
  const [isLoading, setLoading] = useState(false);
  const [wordEntered, setWordEntered] = useState("");
  const [filterData, setFilteredData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/jobs?department=${query.department}&workType=${query.workType}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setLoading(false);
      });
  }, [query]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No blog data</p>;

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data?.filter((value) => {
      return value.jobTitle.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
    <section className="pb-100">
      <header
        className="jobs-padding"
        style={{
          background: "#F8F9FA",
        }}
      >
        <h3 className="mb-20">Open Positions</h3>
        <Row className="mb-20">
          <Col xs={12} xl={6} className="mb-20 mb-md-0">
            <select
              onChange={(e) => {
                if(e.target.value==="none"){
                  if(!query.workType){
                    push(`/careers/jobs`)
                  }else{
                    push(`/careers/jobs?workType=${query.workType}`)
                  }
                }
                else{
                  if(!query.workType){
                    push(`/careers/jobs?department=${e.target.value}`)
                  }
                  else{
                    push(`/careers/jobs?department=${e.target.value}&workType=${query.workType}`)
                  }
                }
              }}
              value={query.department || "none"}
            >
              <option value="none">Choose Department</option>
              <option value="Tech">Tech</option>
              <option value="Non-Tech">Non-Tech</option>
            </select>
          </Col>
          <Col xs={12} xl={6}>
            <select
              onChange={(e) => {
                if(e.target.value==="none"){
                  if(!query.department){
                    push(`/careers/jobs`)
                  }else{
                    push(`/careers/jobs?department=${query.department}`)
                  }
                }
                else{
                  if(!query.department){
                    push(`/careers/jobs?workType=${e.target.value}`)
                  }
                  else{
                    push(`/careers/jobs?department=${query.department}&workType=${e.target.value}`)
                  }
                }
              }}
              value={query.workType || "none"}
            >
              <option value="none">Choose Work Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Internship">Internship</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col style={{ position: "relative" }}>
            <input
              className="pl-50"
              type="text"
              placeholder="Search for Job Title"
              value={wordEntered}
              onChange={handleFilter}
            />
            <img
              style={{ position: "absolute", left: "30px", top: "20px" }}
              src="/assets/images/search.png"
            />
          </Col>
        </Row>
      </header>
      <main className="jobs-padding">
        {wordEntered?.length > 0
          ? filterData?.map((job, id) => (
            <Row
              onClick={() => push(`jobs/${job._id}`)}
              key={id}
              className="border pt-20 pb-20 mb-20 jobCard"
              style={{ cursor: "pointer" }}
            >
              <Col className="position-relative">
                <div className="d-flex">
                  <h5>{job?.jobTitle}</h5>
                  &nbsp; &nbsp;
                  <h7>|&nbsp;&nbsp;{job?.workType}</h7>
                </div>
                <p style={{ paddingRight: "60px" }}>{job?.description}</p>
                <div
                  style={{ position: "absolute", left: "95%", top: "38%" }}
                >
                  {">"}
                </div>
              </Col>
            </Row>
          ))
          : data?.map((job, id) => (
            <Row
              onClick={() => push(`jobs/${job._id}`)}
              key={id}
              className="border pt-20 pb-20 mb-20 jobCard"
              style={{ cursor: "pointer" }}
            >
              <Col className="position-relative">
                <div className="d-flex">
                  <h5>{job?.jobTitle}</h5>
                  &nbsp; &nbsp;
                  <h7>|&nbsp;&nbsp;{job?.workType}</h7>
                </div>
                <p style={{ paddingRight: "60px" }}>{job?.description}</p>
                <div
                  style={{ position: "absolute", left: "95%", top: "38%" }}
                >
                  {">"}
                </div>
              </Col>
            </Row>
          ))}
      </main>
    </section>
    </>
  );
}

export default Jobs