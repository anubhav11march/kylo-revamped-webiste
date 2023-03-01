import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import MobileServicesDetails from "../components/MobileServiceDetails";
import { useRouter } from "next/router";

const ServicesDetailsPage = () => {
  const route = useRouter();
  const path = route.pathname
    .replace("/", " ")
    .replace("-", " ")
    .replace("app-", "");
  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title={"Mobile App Development"} crumbTitle={"Mobile App Development"} />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <MobileServicesDetails />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default ServicesDetailsPage;
