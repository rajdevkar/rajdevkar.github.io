"use client";

import Card from "@/components/Card";
import HeaderBlock from "@/components/HeaderBlock";
import GithubSvg from "@/components/svgs/GithubSvg";
import TwitterSvg from "@/components/svgs/TwitterSvg";
import Link from "next/link";

export default function home() {
  return (
    <div>
      <header className="relative">
        <div className="pt-10 sm:pt-12">
          <div className="relative flex justify-between group/row isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
            <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
              <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
              <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
              <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
              <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
            </div>
            <div className="w-full flex justify-between">
              <HeaderBlock href="/">
                <span className="font-medium text-black"><span className="leading-5 font-bold text-gray-600">Raj Devkar</span>, Sr. Product Engineer</span>
              </HeaderBlock>
              <div className="hidden lg:flex">
                <HeaderBlock href="/#about" hoverEffects>
                    About
                </HeaderBlock>
                <HeaderBlock href="/#skills" hoverEffects hideLeft>
                    Skills
                </HeaderBlock>
                <HeaderBlock href="/#contact" hoverEffects hideLeft>
                    Contact
                </HeaderBlock>
                <HeaderBlock href="https://www.github.com/rajdevkar" target="_blank" hoverEffects hideLeft>
                    <GithubSvg className="size-6" />
                </HeaderBlock>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="absolute bottom-6 inset-x-6 lg:hidden flex justify-center">
        <div className="rounded-full border border-[#0000001A] text-[#0000009A] font-semibold flex items-center shadow-xl">
          <Link href="/#about" className="text-center px-10 py-4">
              About
          </Link>
          <Link href="/#skills" className="text-center px-10 py-4">
              Skills
          </Link>
          <Link href="/#contact" className="text-center px-10 py-4">
              Contact
          </Link>
        </div>
      </div>

      <div className="grid w-full grid-flow-dense grid-cols-30 gap-2 bg-gray-950/5 p-2">
        <Card 
          title="Raj Devkar"
          subtitle="rajdevkar.6@gmail.com" 
          buttonLabel="Email Me" 
          onButtonClick={() => console.log('ok')}
          icon={<GithubSvg className="w-10 h-10 fill-white" />}
          customColor="#24292e"
        >
          <div className="text-2xl text-gray-700 p-6">
            some cool tweet
          </div>
        </Card>
        <Card 
          title="raj devkar"
          subtitle="@rajdevkar99" 
          buttonLabel="DM Me" 
          onButtonClick={() => console.log('ok')} 
          image={`/avatars/memoji.jpeg`}
          icon={<TwitterSvg className="w-10 h-10 fill-white" />}
          customColor="#4999E9"
        >
          <div className="text-2xl text-gray-700 p-6">
            some cool tweet
          </div>
        </Card>
      </div>
    </div>
  );
};

