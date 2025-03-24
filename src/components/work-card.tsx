import Image from "next/image";
import { WorkCardType } from "@/types";

export default function WorkCard({
  title,
  description,
  icon,
  image,
  darkMode,
}: WorkCardType) {
  return (
    <div className="@container isolate col-span-full flex flex-col gap-2 overflow-hidden rounded-2xl bg-white p-2 outline outline-gray-950/5 md:col-span-15 dark:bg-gray-950 dark:outline-white/10">
      <div className="flex flex-col gap-6 p-6 @md:flex-row @md:gap-x-8 @md:p-8">
        <div className="flex h-18 w-28 shrink-0 items-center justify-center">
          {icon}
        </div>
        <div>
          <span className="text-xl/10 font-medium text-gray-950 @md:text-2xl/10 dark:text-white">
            {title}
          </span>
          <p className="max-w-xl text-sm/7 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="relative h-112 overflow-hidden rounded-lg bg-gray-950/[2.5%] bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed p-4 [--pattern-fg:var(--color-gray-950)]/5 sm:p-8 dark:[--pattern-fg:var(--color-white)]/10">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="m-4 rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
}
