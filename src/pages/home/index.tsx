import AboutSection from "../../components/home/aboutSection";
import FeatureSection from "../../components/home/featureSection";
import HeroSection from "../../components/home/heroSection";
import Layout from "../../components/layout";

const HomeContent = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
    </>
  );
};

const Home = () => {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
};

export default Home;
