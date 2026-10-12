import AboutBanner from "@/component/AboutBanner";
import AboutCTA from "@/component/AboutCTA";
import JourneySection from "@/component/JourneySection";
import MissionSection from "@/component/MissionSection";
import TeamSection from "@/component/TeamSection";


const AboutPage = () => {
  return (
    <div>
       <AboutBanner/>
       <MissionSection/>
       <JourneySection/>
       <TeamSection/>
       <AboutCTA/>

    </div>
  )
}

export default AboutPage;