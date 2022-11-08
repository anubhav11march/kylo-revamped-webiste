import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import QAServicesDetails from "../components/QAServicesDetails";

const ServicesDetailsPage = () => {
  return (
    <Layout pageTitle="Maxdi | Business & Digital Agency">
      <PageHeader title="Services Details" crumbTitle="Services Details" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <QAServicesDetails />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default ServicesDetailsPage;
