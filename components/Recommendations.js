import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import Marquee from "react-fast-marquee";
import product1 from '../public/assets/images/clients/c1.png'
import product2 from '../public/assets/images/clients/c2.png'
import product3 from '../public/assets/images/clients/c3.png'
import product4 from '../public/assets/images/clients/c4.png'
import product5 from '../public/assets/images/clients/c5.png'
import product6 from '../public/assets/images/clients/c6.jpg'
import product7 from '../public/assets/images/clients/c7.png'
import product8 from '../public/assets/images/clients/c8.png'
import product9 from '../public/assets/images/clients/c9.jpg'
import product10 from '../public/assets/images/clients/c10.jpg'
import product11 from '../public/assets/images/clients/c11.png'
import product12 from '../public/assets/images/clients/c12.svg'
import product13 from '../public/assets/images/clients/c13.jpg'
import product14 from '../public/assets/images/clients/c14.svg'
import product15 from '../public/assets/images/clients/c15.svg'
const MEMBER_DATA = [
  {
    memberImg: "../assets/images/badges/1.png",
  },
  {
    memberImg: "../assets/images/badges/2.svg",
  },
  {
    memberImg: "../assets/images/badges/3.png",
  },
  {
    memberImg: "../assets/images/badges/4.png",
  },
  {
    memberImg: "../assets/images/badges/5.png",
  },
  {
    memberImg: "../assets/images/badges/6.png",
  },
  {
    memberImg: "../assets/images/badges/7.svg",
  },
  {
    memberImg: "../assets/images/badges/8.svg",
  },
  {
    memberImg: "../assets/images/badges/9.png",
  },
  {
    memberImg: "../assets/images/badges/10.svg",
  },
  {
    memberImg: "../assets/images/badges/11.svg",
  },
  {
    memberImg: "../assets/images/badges/12.png",
  },
];

const clientImages = [
  {
    src: product1
  },
  {
    src: product2
  },
  {
    src: product3
  },
  {
    src: product4
  },
  {
    src: product5
  },
  {
    src: product6
  },
  {
    src: product7
  },
  {
    src: product8
  },
  {
    src: product9
  },
  {
    src: product10
  },
  {
    src: product11
  },
  {
    src: product12
  },
  {
    src: product13
  },
  {
    src: product14
  }
]
const Recommendations = () => {
  return (
    <section className="about__area  p-relative pt-120 pb-100 about__pb pt-50-mobile">
      <Container>
        <div className="about__title mb-80 text-center section__title-home">
          <SectionTitle
            subTitle="OUR CLIENTELE"
            titleFirst="Globally trusted for innovative development"
            titleSecond=""
          />
        </div>
      </Container>
      <div className="container my-4 d-flex justify-content-center flex-wrap gap-4">
        {clientImages.map(({ src }, index) => (
          <img src={src.src} key={index} width="90px" height="90px" style={{ objectFit: 'contain' }} className="mx-4" />
        ))}
      </div>
      <Marquee pauseOnHover speed="80" gradient={false}>
        {MEMBER_DATA.map(({ memberImg }, index) => (
          <img src={memberImg} key={index} width="120px" className="mx-4" />
        ))}
      </Marquee>
    </section>
  );
};

export default Recommendations;
