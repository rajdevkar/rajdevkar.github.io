import Link, { LinkProps } from "next/link";
import PlusSvg from "./svgs/PlusSvg";
import clsx from "clsx";

const HeaderBlock = ({children, hideLeft, hideRight, hoverEffects, ...linkProps}: {children: React.ReactNode; hideLeft?: boolean; hideRight?: boolean; hoverEffects?: boolean} & LinkProps) => {
  return (
    <Link className={clsx("px-6 py-5 group/item relative flex items-center font-medium", hoverEffects && "hover:bg-black/[2.5%]")} {...linkProps}>
      {!hideLeft && <PlusSvg className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2" />}
      {!hideRight && <PlusSvg className="absolute size-[15px] fill-black/10 -top-2 -right-2" />}
      {!hideLeft && <PlusSvg className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2" />}
      {!hideRight && <PlusSvg className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2" />}
      {children}
    </Link>
  )
}

export default HeaderBlock;