import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import LetsWork from "../../components/LetsWork";
import Footer from "../../components/Footer";
import KyloDes from "../../components/KyloDes";
import WhyKylo from "../../components/Whykylo";
import QuickApply from "../../components/QuickApply";
import LifeAtKylo from "../../components/LifeAtKylo";

const Careers = () => {
  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title="Careers" crumbTitle="Careers" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <KyloDes subTitle="Kylo Apps" titleFirst="Careers at Kylo Apps" />
        <WhyKylo />
        <LifeAtKylo />
        <QuickApply />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default Careers;
