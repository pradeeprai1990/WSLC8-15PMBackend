import Image from "next/image";
import HomeBanner from "./components/home/HomeBanner";
import HomeCollection from "./components/home/HomeCollection";
import HomeProducts from "./components/home/HomeProducts";
import HomeNewTrendingCollections from "./components/home/HomeNewTrendingCollections";
import HomeBestSellingProducts from "./components/home/HomeBestSellingProducts";
import HomePolicy from "./components/home/HomePolicy";
import HomeOurCustomerSay from "./components/home/HomeOurCustomerSay";
import HomeNewsletter from "./components/home/HomeNewsletter";
import { bannerApi, homeCollectionApi } from "@/api-services/HomeServices";
import { productApi } from "@/api-services/ProductServices";

export default async function Home() {

  let bannerData = await bannerApi()
  let homeCollectionData = homeCollectionApi()
  let productData = await productApi()
  return (
    <>
      <HomeBanner bannerData={bannerData}/>
      <HomeCollection homeCollectionData={homeCollectionData}/>
      <HomeProducts productData={productData}/>
      <HomeNewTrendingCollections />
      <HomeBestSellingProducts productData={productData} />
      <HomePolicy />
      <HomeOurCustomerSay />
      <HomeNewsletter />
    </>
  );
}
