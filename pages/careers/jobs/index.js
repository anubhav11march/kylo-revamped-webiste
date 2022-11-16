import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Jobs from '../../../components/Jobs';
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';

const JobsPage = () => {
    return (
      <Layout pageTitle="Maxdi | Business & Digital Agency">
      <PageHeader title="Open Roles" crumbTitle="Jobs" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <Jobs/>
      </main>
      <Footer />
    </Layout>
  );
}

export default JobsPage;