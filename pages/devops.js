import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import WebServicesDetails from "../components/WebServicesDetails";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import Devops from "../components/DevopsServices";
import { useRouter } from "next/router";

const ServicesDetailsPage = () => {
  const route = useRouter();
  const path = route.pathname.replace("/", " ").replace("-", " ");
  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title={"DevOps"} crumbTitle={"DevOps"} />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <Devops />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default ServicesDetailsPage;
