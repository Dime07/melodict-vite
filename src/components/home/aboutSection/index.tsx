import aboutImage from "@/assets/images/about.png";
import musicLibraryIcon from "@/assets/icons/musicLibraryIcon.svg";
import downloadIcon from "@/assets/icons/downloadIcon.svg";
import circlesThreeIcon from "@/assets/icons/circlesThreeIcon.svg";

import LabelSection from "../../general/labelSection";
import HeadingSection from "../../general/headingSection";
import AboutItem from "./aboutItem";

const AboutSection = () => {
  const ABOUT_ITEMS = [
    {
      icon: musicLibraryIcon,
      title: "Most Collection",
      subtitle:
        "We provide more than 100K songs from any album and any artists all over the world. So no need to worry to miss your favourite song",
    },
    {
      icon: downloadIcon,
      title: "Most Wanted",
      subtitle:
        "Most downloaded on Playstore and Appstore. More than 500K times. Also that becomes the most download record for music streaming app",
    },
    {
      icon: circlesThreeIcon,
      title: "Most Collection",
      subtitle:
        "Enjoy our key features that will make you feel the best experience on listening music. Because user experience is our priority",
    },
  ];
  return (
    <section>
      <div className=" max-w-[1440px] mx-auto px-20 py-[100px] flex justify-between gap-[88px] ">
        <img src={aboutImage} alt="about image" />
        <div className="flex flex-col">
          <LabelSection name="About" wrapperClassname="w-fit" />
          <HeadingSection
            title="Why Melodict Become Number One Music App"
            wrapperClassname="mt-4 mb-16"
          />
          <div className="flex flex-col gap-10">
            {ABOUT_ITEMS.map((about) => (
              <AboutItem
                image={about.icon}
                title={about.title}
                subtitle={about.subtitle}
              />
            ))}
          </div>
          <button className="py-4 w-fit px-[47px] text-white bg-primary-100 rounded-full font-bold mt-16">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
