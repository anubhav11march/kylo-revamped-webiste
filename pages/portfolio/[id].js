import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import LetsWork from "../../components/LetsWork";
import PageHeader from "../../components/PageHeader";
import PortfolioDetails from "../../components/PortfolioDetails";
import { useRouter } from "next/router";

const TeamPage = () => {

  return (
    <Layout pageTitle="Maxdi | Business & Digital Agency">
      <PageHeader title="Portfolio Details" crumbTitle="Portfolio Details" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <PortfolioDetails />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default TeamPage;
