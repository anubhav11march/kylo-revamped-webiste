import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Experience from "../components/Experience";
import TeamHome from "../components/TeamHome";
import Project from "../components/Project";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import WhatWePromise from "../components/WhatWePromise";
import Recommendations from "../components/Recommendations";

const AboutPage = () => {
  return (
    <Layout pageTitle="Kylo Apps | Business & Digital Agency">
      <PageHeader title="About Us" crumbTitle="About Us" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <About
          subTitle="ABout Us"
          titleFirst="We bring your business"
          titleSecond="ideas to life by means of Technology"
          aboutpic={true}
        />
        <Recommendations />
        <Experience extraClass="mt-70" />

        <WhatWePromise />
        <TeamHome subTitle="OUR TEAM" />
        {/* <Project extraClass="project__area-pt" subTitle="Get Started" /> */}
        {/* <BlogHome extraClass="pt-110" /> */}
        <LetsWork change={true}/>
      </main>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
