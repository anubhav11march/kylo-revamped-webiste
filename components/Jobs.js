import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router'

const data = [
  {
    id: "1",
    title: "React Dev",
    desc: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    id: "2",
    title: "Backend Dev",
    desc: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    id: "3",
    title: "Full Stack Dev",
    desc: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
];

const Jobs = () => {
  const {push} = useRouter();
  return (
    <section className="pb-100">
      <header
        style={{
          padding: "40px 20%",
          background: "#F8F9FA",
        }}
      >
        <h3 className="mb-20">Open Positions</h3>
        <Row className="mb-20">
          <Col>
            <select>
              <option>Choose Department</option>
              <option>Tech</option>
              <option>Non-Tech</option>
            </select>
          </Col>
          <Col>
            <select>
              <option>Choose Work Type</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col style={{ position: "relative" }}>
            <input
              className="pl-50"
              type="text"
              placeholder="Search for Job Title"
            />
            <img
              style={{ position: "absolute", left: "30px", top: "20px" }}
              src="/assets/images/search.png"
            />
          </Col>
        </Row>
      </header>
      <main style={{ padding: "30px 20%" }}>
        {data?.map((job, id) => (
          <Row
            onClick={() => push(`jobs/${job.id}`)}
            key={id}
            className="border pt-20 pb-20 mb-20 jobCard"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <Col>
              <div className="d-flex">
                <h5>{job.title}</h5>
                &nbsp; &nbsp;
                <h7>|&nbsp;&nbsp;Full Time</h7>
              </div>
              <p>{job.desc}</p>
            </Col>
            <div style={{ position: "absolute", left: "95%", top: "38%" }}>
              {">"}
            </div>
          </Row>
        ))}
      </main>
    </section>
  );
}

export default Jobs