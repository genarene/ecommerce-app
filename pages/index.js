import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>A spectrum of quality speakers</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  // get products from sanity dashboard
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // fetch data for the banner
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { bannerData, products },
  };
};
export default Home;
