import firstUser from "@/assets/images/people/people-1.png";
import secondUser from "@/assets/images/people/people-2.png";
import thirdUser from "@/assets/images/people/people-3.png";
import starIcon from "@/assets/icons/starIcon.svg";
import heroImage from "@/assets/images/listening_music.png";
import stretchPink from "@/assets/images/square_stretch_pink.svg";
import { CSSProperties } from "react";

type ActiveUserStyle = {
  "--custom-color": string;
} & CSSProperties;

const HeroSection = () => {
  const ACTIVE_USERS = [
    { image: firstUser, color: "#F49392" },
    { image: secondUser, color: "#1E9896" },
    { image: thirdUser, color: "#F09B83" },
  ];
  return (
    <section className="bg-dark-100">
      <div className=" max-w-[1440px] mx-auto px-20 py-[100px] flex justify-between">
        {/* left side */}
        <div>
          <div>
            <h1 className="text-[64px] text-white font-bold w-[540px] tracking-tight">
              Listen The Best Music Just on Your Held.
              <span>
                <img
                  className="inline ms-5 mb-3 animate-bounce"
                  src={stretchPink}
                  alt="stretch pink"
                />
              </span>
            </h1>
            <h3 className="mt-6 text-white/70 font-medium max-w-[484px] tracking-tight">
              Welcome to simplicity era. Enjoy your favourite song, album, and
              artist with our breakthrough only in one super app, one hand.
            </h3>
          </div>
          <div className="mt-16 flex gap-4">
            <button className="py-4 w-[180px] bg-primary-100 text-white rounded-[32px] font-bold hover:bg-primary-100/90 transition-all duration-500">
              Download now
            </button>
            <button className="py-4 w-[180px] bg-transparent border border-white text-white rounded-[32px] font-bold hover:bg-white hover:border-0 hover:text-dark-100 transition-all duration-500">
              Top 5 songs
            </button>
          </div>
          {/* active users */}
          <div className="mt-[90px] flex gap-12">
            <div className="flex gap-6 items-center">
              <div className="flex">
                {ACTIVE_USERS.map((user) => (
                  <div
                    style={
                      { "--custom-color": `${user.color}` } as ActiveUserStyle
                    }
                    className="w-16 h-16 rounded-full bg-[var(--custom-color)] border border-white flex justify-center items-center overflow-hidden -ms-3"
                  >
                    <img src={user.image} alt="active user" />
                  </div>
                ))}
              </div>
              <p className="text-white text-xl font-bold">
                500 K + <br />
                <span className="opacity-70 font-medium">active users</span>
              </p>
            </div>
            <div className="h-16s w-1 bg-white/20" />
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                <img src={starIcon} alt="star icon" />
              </div>
              <p className="text-white text-xl font-bold">
                4.7 <br />
                <span className="opacity-70 font-medium">User Rating</span>
              </p>
            </div>
          </div>
        </div>
        <img src={heroImage} alt="people listening on music" />
      </div>
    </section>
  );
};

export default HeroSection;
