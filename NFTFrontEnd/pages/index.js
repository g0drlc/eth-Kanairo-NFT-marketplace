import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service, BigNFTSlider,Subscribe, Title, Category, Filter, NFTCard, Collection } from "../components/componentsIndex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="New Collection" paragraph="Discover the most outstanding NFTs in all topics of life" />
      <Collection />
      <Title heading="Features NFTs" paragraph="Discover the most outstanding NFTs in all topics of life" />
      <Filter />
      <NFTCard />
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories." />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;