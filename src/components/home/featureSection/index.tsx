import HeadingSection from "../../general/headingSection";
import LabelSection from "../../general/labelSection";
import FeatureItem from "./featureItem";

import feature1 from "@/assets/images/features/feature-1.png";
import feature2 from "@/assets/images/features/feature-2.png";
import feature3 from "@/assets/images/features/feature-3.png";

const FEATURES = [
  {
    image: feature1,
    title: "Amazing Algorithm",
    subtitle:
      "Our smart algorithm can suggest the best genres andsongs based on your behavior and most listened on your device",
  },
  {
    image: feature2,
    title: "Smart Lyric",
    subtitle:
      "Enjoy new experience on read lyrics that following rythm of the song, so you can karaoke just on your phone",
  },
  {
    image: feature3,
    title: "Follow Your Idol",
    subtitle:
      "Now you can follow your favourite idol to get recommendation on theiralbums or songs also you can get notification every new release song",
  },
];

const FeatureSection = () => {
  return (
    <section>
      <div className=" max-w-[1440px] mx-auto px-20 py-[100px]">
        <LabelSection name="FEATURE" wrapperClassname="mx-auto mb-4" />
        <HeadingSection
          title="Why Should Melodict?"
          subtitle="There some features that you can get while using Melodict"
          wrapperClassname="text-center"
        />
        <div className="flex flex-row justify-between mt-16">
          {FEATURES.map((item) => (
            <FeatureItem
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="py-4 w-fit px-[47px] text-white bg-primary-100 rounded-full font-bold mt-16">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
