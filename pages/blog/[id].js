import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import BlogDetails from "../../components/BlogDetails";
import LetsWork from "../../components/LetsWork";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

const SingleBlog = () => {
  const { query } = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/blogs/${query.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No blog data</p>;

  console.log("data", data);

  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title="Blog Details" crumbTitle="Blog Details" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <BlogDetails data={data} />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default SingleBlog;
