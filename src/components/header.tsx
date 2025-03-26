import HeaderBlock from "./header-block";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="relative">
      <div className="pt-10 sm:pt-12">
        <div className="group/row relative isolate flex justify-between pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
          <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
            <div className="absolute inset-x-0 top-0 border-t border-black/5 dark:border-white/10"></div>
            <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/10"></div>
            <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block dark:border-white/10"></div>
            <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block dark:border-white/10"></div>
          </div>
          <div className="flex w-full justify-between">
            <HeaderBlock>
              <Link
                href="/"
                className="font-medium text-black dark:text-white/30"
              >
                <span className="leading-5 font-bold text-gray-600 dark:text-white">
                  Raj Devkar
                </span>
                , Sr. Product Engineer
              </Link>
            </HeaderBlock>
            <div className="hidden lg:flex">
              <HeaderBlock hoverEffects>
                <Link href="/work">Work</Link>
              </HeaderBlock>
              <HeaderBlock hoverEffects hideLeft>
                <Link href="/contact">Contact</Link>
              </HeaderBlock>
              <HeaderBlock hoverEffects hideLeft>
                {theme === "dark" ? (
                  <button onClick={() => setTheme("light")}>
                    <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
                  </button>
                ) : (
                  <button onClick={() => setTheme("dark")}>
                    <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
                  </button>
                )}
              </HeaderBlock>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
