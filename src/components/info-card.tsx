import AngleArrowSvg from "@/components/icons/angle-arrow";
import Image from "next/image";

type Props = {
  title?: string;
  subtitle?: string;
  image?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
  customColor?: string;
} & React.HTMLProps<HTMLDivElement>;

const Card = (props: Props) => {
  const {
    title,
    subtitle,
    image,
    buttonLabel,
    onButtonClick,
    icon,
    customColor = "#4999E9",
    children,
  } = props;

  return (
    <div className="isolate col-span-full flex flex-col gap-2 overflow-hidden rounded-2xl bg-white p-2 outline outline-gray-950/5 md:col-span-15">
      <div className="flex w-full items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          {image && (
            <Image
              src={image}
              width={48}
              height={48}
              className="aspect-square rounded-full object-cover"
              alt="Profile"
            />
          )}
          {(title || subtitle) && (
            <div>
              {title && <div className="text-lg font-semibold">{title}</div>}
              {subtitle && (
                <div className="text-xs text-gray-500">{subtitle}</div>
              )}
            </div>
          )}
        </div>
        {icon && (
          <div
            className="relative rounded-xl p-2 shadow-sm"
            style={{ backgroundColor: customColor }}
          >
            {icon}
          </div>
        )}
      </div>
      {children}
      <div className="flex w-full p-6">
        <button
          className="flex w-full cursor-pointer justify-center space-x-2 rounded-full border-2 border-[#DEDEE0] py-2 text-black hover:border-[#0000003A]"
          style={{ backgroundColor: "transparent" }}
          onClick={onButtonClick}
        >
          <span className="font-semibold">{buttonLabel ?? "Click Me"}</span>
          <AngleArrowSvg />
        </button>
      </div>
    </div>
  );
};

export default Card;
