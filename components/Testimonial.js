import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIAL_DATA = [
  {
    clientLogo: "/assets/images/testimonials/client-logo/RentoutLogo123.png",
    clientText:
      "Team Kylo has been highly reliable. Also, they are very responsive and ready to fix any type of application issues. Their biggest strength is their pricing which is unbeatable in the market. They delivered an amazing application to us.",
    clientImg: "/assets/images/testimonials/RentoutFounder.jpeg",
    clientName: "Bhanu Pasyavula",
    clientPosition: "Founder",
    company: "Rentout",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/ActiveSolutionsLogo.png",
    clientText:
      "Understanding the customers’ requirement with accuracy is what Kylo strives for. They put in great effort to make us understand the complexities and helped us feel comfortable with their customer centric approach and interaction.",
    clientImg: "/assets/images/testimonials/ActiveSolutionsMD.jpeg",
    clientName: "Bharath Aditya",
    clientPosition: "Managing Director",
    company: "Active Solutions",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/HitikitLogo.png",
    clientText:
      "Being a start-up, we were looking for a team who can develop the perfect product we envisioned and guide us in kickoff. It's commendable that Kylo was innovative in giving us a product better than what we visualised.",
    clientImg: "/assets/images/testimonials/HitikitFounder.jpeg",
    clientName: "Manideep Mittapeli",
    clientPosition: "Founder",
    company: "Hitikit",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/SteloLogo.png",
    clientText:
      "Kylo Apps delivered a top-notch app which exceeded our expectations. The responsibility with which the team operated really helped us in banking on them easily. All their team members were very cooperative and responsive.",
    clientImg: "/assets/images/testimonials/SteloFounder.jpeg",
    clientName: "Sumeet Jain",
    clientPosition: "Founder",
    company: "Stelo",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/joytshi.png",
    clientText:
      "Apps fulfilled all our requirements efficiently and supported us even after the launch. They continuously roll out new features that help scale our business. Our customers are very satisfied with the app Kylo Apps made for us.",
    clientImg: "/assets/images/testimonials/jyotishiVP.jpg",
    clientName: "Krishna K. Pidaparthy",
    clientPosition: "Founder",
    company: "Jyotishi",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/corp86Logo.png",
    clientText:
      "It was a pleasure working with Kylo Apps. The passion and professionalism they showcased was exceptional. They worked on our dream project as if it was their own. I highly appreciate their dedication and flexibility.",
    clientImg: "/assets/images/testimonials/corp86Founder.jpg",
    clientName: "Vineet Jain",
    clientPosition: "Founder",
    company: "Corp86",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/ubpLogo.png",
    clientText:
      "Kylo offers one of the best development services we have come across. The user interface is flawless and very easy to operate. It also provides us with excellent data analysis, which allows us to manage our operations conveniently.",
    clientImg: "/assets/images/testimonials/ubpFounder.png",
    clientName: "Kartik Gabra",
    clientPosition: "Founder",
    company: "UBP",
  },
];

const Testimonial = ({ testimonialArea, paddingTop }) => {
  return (
    <section
      className={`${testimonialArea} fix p-relative ${paddingTop} pb-120`}
    >
      <div className="testimonials__shape">
        <img
          className="t-shape-1 d-none d-sm-block"
          src="/assets/images/shape/testimonials/t-shape-1.png"
          alt=""
        />
        <img
          className="t-shape-2"
          src="/assets/images/shape/testimonials/t-shape-2.png"
          alt=""
        />
        <img
          className="t-shape-3"
          src="/assets/images/shape/testimonials/t-shape-3.png"
          alt=""
        />
        {/* <img className="t-shape-4" src="/assets/images/shape/testimonials/t-shape-4.png" alt=""/> */}
        <img
          className="t-shape-5 d-none d-lg-block"
          src="/assets/images/shape/testimonials/t-shape-5.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-65">
          <Col xl={12}>
            <div className="testimonials__title text-center">
              <SectionTitle
                subTitle="Testimonials"
                titleFirst="What our clients say"
              />
              <p>
                We go above and beyond for customer satisfaction. Happy clients
                inspire us to work harder each time.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={"auto"}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
            >
              {TESTIMONIAL_DATA.map(
                (
                  {
                    clientLogo,
                    clientText,
                    clientImg,
                    clientName,
                    clientPosition,
                    company,
                  },
                  index
                ) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard
                      clientLogo={clientLogo}
                      clientText={clientText}
                      clientImg={clientImg}
                      clientName={clientName}
                      clientPosition={clientPosition}
                      company={company}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div className="swiper-pagination"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
