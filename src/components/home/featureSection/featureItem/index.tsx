const FeatureItem = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-6 max-w-[371px]">
      <div className="w-full h-[371px] bg-dark-100 rounded-ss-2xl rounded-se-2xl flex justify-center items-end overflow-hidden">
        <img src={image} alt={title} />
      </div>
      <div>
        <p className="text-2xl font-bold text-darkBlue-100 text-center">
          {title}
        </p>
        <p className="text-base font-medium text-darkBlue-80 text-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
