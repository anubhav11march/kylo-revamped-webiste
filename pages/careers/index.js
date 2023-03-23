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
import WriteToUs from "../../components/WriteToUs";

const Careers = () => {
  return (
    <Layout pageTitle="KYLO APPS | Transforming Businesses Through Technology">
      <PageHeader title="Careers" crumbTitle="Careers" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <KyloDes subTitle="See Where You Fit In" titleFirst="Careers at Kylo Apps" />
        <WhyKylo />
        <LifeAtKylo />
        <QuickApply />
        {/* <LetsWork /> */}
        <WriteToUs />
      </main>
      <Footer />
    </Layout>
  );
};

export default Careers;
