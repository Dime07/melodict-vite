import clsx from "clsx";

const LabelSection = ({
  name,
  wrapperClassname,
}: {
  name: string;
  wrapperClassname?: string;
}) => {
  return (
    <div
      className={clsx(
        "bg-primary-100/10 text-primary-100 px-6 py-2 rounded-[22px]",
        wrapperClassname
      )}
    >
      <p className="text-lg font-bold">{name}</p>
    </div>
  );
};

export default LabelSection;
