import AboutSection from "../../components/home/aboutSection";
import HeroSection from "../../components/home/heroSection";
import Layout from "../../components/layout";

const HomeContent = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
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
