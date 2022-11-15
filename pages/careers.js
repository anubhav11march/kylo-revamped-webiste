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
import KyloDes from "../components/KyloDes";

const Careers = () => {
  return (
    <Layout pageTitle="Maxdi | Business & Digital Agency">
      <PageHeader title="Careers" crumbTitle="Careers" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <KyloDes
          subTitle="Kylo Apps"
          titleFirst="Careers at Kylo Apps"
        />
        {/* <Experience extraClass="mt-70" /> */}
        {/* <TeamHome subTitle="Team Members" /> */}
        {/* <Project extraClass="project__area-pt" subTitle="Get Started" /> */}
        {/* <BlogHome extraClass="pt-110" /> */}
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default Careers;
