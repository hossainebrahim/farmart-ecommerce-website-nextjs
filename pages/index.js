import HomeCategory from "../app/components/Home/HomeCategory";
import HomeHero from "../app/components/Home/HomeHero";
import FeaturedBrands from "../app/components/Home/FeaturedBrands";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <FeaturedBrands />
    </>
  );
}
