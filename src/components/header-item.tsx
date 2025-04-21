import React from "react";
import PlusSvg from "./icons/plus";
import clsx from "clsx";

const HeaderBlock = ({
  children,
  hideLeft,
  hideRight,
  hoverEffects,
}: {
  children: React.ReactNode;
  hideLeft?: boolean;
  hideRight?: boolean;
  hoverEffects?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "group/item relative flex items-center font-medium transition-all duration-100 ease-in-out dark:text-white",
        hoverEffects && "hover:bg-black/[2.5%] dark:hover:bg-white/10",
      )}
    >
      {!hideLeft && (
        <PlusSvg className="absolute -top-2 -left-2 hidden size-[15px] fill-black/10 group-first/item:block dark:fill-white/10" />
      )}
      {!hideRight && (
        <PlusSvg className="absolute -top-2 -right-2 size-[15px] fill-black/10 dark:fill-white/10" />
      )}
      {!hideLeft && (
        <PlusSvg className="absolute -bottom-2 -left-2 hidden size-[15px] fill-black/10 group-first/item:group-last/row:block dark:fill-white/10" />
      )}
      {!hideRight && (
        <PlusSvg className="absolute -right-2 -bottom-2 hidden size-[15px] fill-black/10 group-last/row:block dark:fill-white/10" />
      )}
      {React.cloneElement(children as React.ReactHTMLElement<HTMLDivElement>, {
        className: "px-6 py-5 cursor-pointer",
      })}
    </div>
  );
};

export default HeaderBlock;
