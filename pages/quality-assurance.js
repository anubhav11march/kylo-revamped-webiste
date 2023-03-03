import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import QAServicesDetails from "../components/QAServicesDetails";
import { useRouter } from "next/router";

const ServicesDetailsPage = () => {
  const route = useRouter();
  const path = route.pathname.replace("/", " ").replace("-", " ");
  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title={"Quality Assurance"} crumbTitle={"Quality Assurance"} />
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
