import Link, { LinkProps } from "next/link";
import PlusSvg from "./icons/plus";
import clsx from "clsx";

const HeaderBlock = ({
  children,
  hideLeft,
  hideRight,
  hoverEffects,
  ...linkProps
}: {
  children: React.ReactNode;
  hideLeft?: boolean;
  hideRight?: boolean;
  hoverEffects?: boolean;
} & LinkProps) => {
  return (
    <Link
      className={clsx(
        "group/item relative flex items-center px-6 py-5 font-medium dark:text-white duration-100 ease-in-out transition-all",
        hoverEffects && "hover:bg-black/[2.5%] dark:hover:bg-white/10",
      )}
      {...linkProps}
    >
      {!hideLeft && (
        <PlusSvg className="absolute -top-2 -left-2 hidden size-[15px] fill-black/10 dark:fill-white/10 group-first/item:block" />
      )}
      {!hideRight && (
        <PlusSvg className="absolute -top-2 -right-2 size-[15px] fill-black/10 dark:fill-white/10" />
      )}
      {!hideLeft && (
        <PlusSvg className="absolute -bottom-2 -left-2 hidden size-[15px] fill-black/10 dark:fill-white/10 group-first/item:group-last/row:block" />
      )}
      {!hideRight && (
        <PlusSvg className="absolute -right-2 -bottom-2 hidden size-[15px] fill-black/10 dark:fill-white/10 group-last/row:block" />
      )}
      {children}
    </Link>
  );
};

export default HeaderBlock;
