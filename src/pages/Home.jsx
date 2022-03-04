import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";
import banner from "../assets/images/banner.png";



const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider 
        data={heroSliderData} 
        control={true} 
        auto={true} 
        timeOut={8000}
      />


      <Section>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policy?.map((item, index) => (
                <Link to='/policy' key={index} className='policy-link'>
                  <PolicyCard 
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>


      <Section>
        <SectionTitle>
          Top sản phẩm bán chạy của tuần
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productData?.getProducts(4)?.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                >
                </ProductCard>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>

      {/* New product */}
      <Section>
        <SectionTitle>
          Sản phẩm mới nhất
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productData?.getProducts(8)?.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                >
                </ProductCard>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      {/* End New product */}
    

      {/* Banner */}
      <Section>
        <SectionBody>
          <Link to='/catalog'>
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* End Banner */}


      {/* Popular product */}
      <Section>
        <SectionTitle>
          Sản phẩm phổ biến nhất
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productData?.getProducts(12)?.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                >
                </ProductCard>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      {/* End Popular product */}
    </Helmet>
  );
};

export default Home;
