import Banner from "@/component/Home/banner";
import Features from "../../component/Features";
import Categories from "@/component/Categories";
import LatestPosts from "@/component/LatestPosts";
import FeaturedStory from "@/component/FeaturedStory";
import Community from "@/component/Community";
import Stats from "@/component/Stats";
import CTA from "@/component/CTA";


export default function Homepage() {
  return (
   <div className="">
   <Banner></Banner>
   <Features/>
   <Categories/>
   <LatestPosts/>
   <FeaturedStory/>
   <Community/>
   <Stats/>
   <CTA/>
   </div>
  );
}
