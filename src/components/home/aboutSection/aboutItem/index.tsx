const AboutItem = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex gap-10">
      <div className="w-[72px] h-[72px] rounded-xl bg-[#F552791F] shrink-0 flex justify-center items-center">
        <img src={image} alt={title} />
      </div>
      <div>
        <p className="text-darkBlue-100 text-2xl font-bold mb-2">{title}</p>
        <p className="text-darkBlue-80 text-base font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default AboutItem;
