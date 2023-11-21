const HeadingSection = ({
  title,
  subtitle,
  wrapperClassname,
}: {
  title: string;
  subtitle?: string;
  wrapperClassname?: string;
}) => {
  return (
    <div className={wrapperClassname}>
      <h3 className="text-5xl text-darkBlue-100 font-bold tracking-tight">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-4 text-base font-medium text-darkBlue-80">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default HeadingSection;
