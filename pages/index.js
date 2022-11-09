import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Facts from "../components/Facts";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import Link from "next/link";

const HomeOne = () => {
  return (
    <Layout pageTitle="Maxdi | Business & Digital Agency">
      <Header heroLogo="/assets/images/logo/kylo-image.png" />
      <main>
        <Hero />
        <About
          subTitle="About Us"
          titleFirst="We are here to make your"
          titleSecond="product look more elegant and stylish"
        />
        <Services extraClass="mt-75" />
        <Facts />
        <Portfolio />
        <Link href={"/portfolio"} style={{margin: "0px auto"}}>
          <a className="m-btn viewMore">
            View More
          </a>
        </Link>
        <Experience />
        <Testimonial testimonialArea="testimonials__area" paddingTop="pt-120" />
        <Faq />
        <BlogHome extraClass="pt-60" />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default HomeOne;
