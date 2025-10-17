import Image from "next/image";
import HomeBanner from "./components/home/HomeBanner";
import HomeCollection from "./components/home/HomeCollection";
import HomeProducts from "./components/home/HomeProducts";
import HomeNewTrendingCollections from "./components/home/HomeNewTrendingCollections";
import HomeBestSellingProducts from "./components/home/HomeBestSellingProducts";
import HomePolicy from "./components/home/HomePolicy";
import HomeOurCustomerSay from "./components/home/HomeOurCustomerSay";
import HomeNewsletter from "./components/home/HomeNewsletter";
import { bannerApi, categoryApi, homeCollectionApi, homeproductApi } from "@/api-services/HomeServices";
import { productApi } from "@/api-services/ProductServices";

export default async function Home() {

  let bannerData = await bannerApi()
  let homeCollectionData = homeCollectionApi()

  let categoryData=await categoryApi() //[ {men},{women},{kids} ]

  
   let productData = await homeproductApi(categoryData[0]._id)
   //Men Data
 


   
  
  return (
    <>
      <HomeBanner bannerData={bannerData}/>
      <HomeCollection homeCollectionData={homeCollectionData}/>
      <HomeProducts categoryData={categoryData} productData={productData}/>
      <HomeNewTrendingCollections />
       <HomeBestSellingProducts /> 
      <HomePolicy />
      <HomeOurCustomerSay />
      <HomeNewsletter />
    </>
  );
}
