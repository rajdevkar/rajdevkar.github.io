"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

// const works = [
//   {
//     link: "https://agencyon.cloud/",
//     name: "Agency Cloud",
//     description: "Finance management platform for businesses and freelancers.",
//   },
//   {
//     link: "https://play.google.com/store/apps/details?id=com.niledeagencycloud&hl=en",
//     name: "Agency Cloud App",
//     description: "Financial management app for businesses and freelancers.",
//   },
//   {
//     link: "https://play.google.com/store/apps/details?id=com.floret&hl=en_IN",
//     name: "Floret College of Designing",
//     description: "College app for managing syllabus and attendance.",
//   },
//   {
//     link: "https://play.google.com/store/apps/details?id=com.swapnealtechnologies.trans_it&hl=en_IN",
//     name: "Trans-IT Coaching Institute",
//     description: "Educational app for students and teachers.",
//   },
//   {
//     link: "https://play.google.com/store/apps/details?id=com.squirrel.davanafood&hl=en_IN",
//     name: "Squirrel - Delivery Partner",
//     description: "Delivery tracking app for a pizzeria.",
//   },
// ];

const Home = () => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const [message, setMessage] = useState<string>("");
  const [resMessages, setResMessages] = useState<
    { message: string; type: "me" | "sender" }[]
  >([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    if (resMessages.length) {
      scrollToBottom();
    }
  }, [resMessages]);

  const handleSubmit = async () => {
    try {
      setResMessages((prev) => [...prev, { message, type: "sender" }]);

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log(data);
      setResMessages((prev) => [
        ...prev,
        { message: "I will get back with you soon", type: "me" },
      ]);

      // Clear the message after successful send
      setMessage("");
    } catch (error) {
      console.log(error);
      setResMessages((prev) => [
        ...prev,
        { message: "Please try again", type: "me" },
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <Header />

      <section id="hero" className="grid grid-cols-6 gap-6 xl:grid-cols-4">
        <div className="@container relative isolate order-2 col-span-full overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 md:order-1 lg:col-span-4 xl:col-span-3 dark:bg-gray-950 dark:outline-white/10">
          <div className="flex flex-col justify-between space-y-6 p-6 lg:flex-row lg:space-y-0 @lg:p-8">
            <div className="flex h-full flex-col gap-2 lg:gap-4">
              <div className="flex flex-col gap-4 lg:gap-2">
                <div className="flex items-center space-x-4">
                  <div className="size-10 rounded-full bg-blue-400 p-1 xl:size-11">
                    <Image
                      height="40"
                      width="40"
                      src="/images/love-2-memoji.png"
                      alt="Memoji"
                    ></Image>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg xl:text-xl">Hi, I’m Raj.</span>
                    <span className="text-xs xl:text-sm dark:text-gray-500">
                      Sr. Frontend Developer
                    </span>
                  </div>
                </div>
                <h2 className="max-w-sm text-4xl/relaxed font-bold text-gray-950 xl:text-5xl/relaxed dark:text-white">
                  Coding Future, One line at a ⏱️
                </h2>
              </div>
              <p className="max-w-3xl text-base/relaxed text-gray-500 xl:text-lg/relaxed">
                I develop web and mobile applications using React Native, React
                JS, Laravel, Vue JS, with expertise in Tailwind CSS, MySQL,
                MongoDB, Firebase, GraphQL, and REST APIs
              </p>
            </div>
            <div className="flex flex-row items-start space-x-6">
              <Link
                href="https://www.linkedin.com/in/rajdevkar/"
                target="_blank"
              >
                <FaLinkedin className="size-6 dark:fill-white" />
              </Link>
              <Link href="https://x.com/rajdevkar99" target="_blank">
                <FaTwitter className="size-6 dark:fill-white" />
              </Link>
              <Link href="https://www.github.com/rajdevkar" target="_blank">
                <FaGithub className="size-6 dark:fill-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="@container relative isolate order-1 col-span-full aspect-video flex-1 overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 md:order-2 lg:col-span-2 lg:aspect-auto xl:col-span-1 dark:bg-gray-950 dark:outline-white/10">
          <div className="relative flex h-full flex-1 bg-blue-400">
            <AnimatePresence>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                exit={{ scale: 1 }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative mx-auto flex -translate-y-5 items-center justify-center overflow-visible"
              >
                <div className="absolute h-[180px] w-[180px] rounded-full bg-white opacity-40"></div>
                <div className="absolute h-[230px] w-[230px] rounded-full bg-white opacity-30"></div>
                <div className="absolute h-[280px] w-[280px] rounded-full bg-white opacity-20"></div>
                <div className="absolute h-[330px] w-[330px] rounded-full bg-white opacity-10"></div>
                <div className="absolute h-[380px] w-[380px] rounded-full bg-white opacity-5"></div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 -bottom-5 flex justify-center xl:-bottom-6">
              <Image
                height="340"
                width="340"
                src="/images/namaskar-memoji.png"
                alt="Memoji"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="work"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {works.map((i, k) => (
          <div
            key={k}
            className="@container isolate overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10"
          >
            <div className="flex h-full flex-col gap-4">
              <div className="mx-6 mt-6 flex items-center border-b border-gray-950/5 pb-6 @lg:mx-8 @lg:mt-8 @lg:pb-6 dark:border-white/10">
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="text-2xl font-semibold">{i.name}</h3>
                  <p className="text-sm text-gray-500">{i.description}</p>
                </div>
                <Link
                  href={i.link}
                  target="_blank"
                  className="group cursor-pointer rounded-full p-2.5 outline-1 outline-gray-950/5 dark:outline-white/10"
                >
                  <MoveUpRight />
                </Link>
              </div>
              <Image
                height="340"
                width="340"
                src="/images/namaskar-memoji.png"
                alt="Memoji"
              ></Image>
            </div>
          </div>
        ))}
      </section> */}

      <section id="contact" className="grid grid-cols-4 gap-6">
        <div className="@container isolate col-span-full overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 lg:col-span-2 dark:bg-gray-950 dark:outline-white/10">
          <div className="flex h-full flex-col gap-4 p-6 @lg:p-8">
            <div className="flex h-52 flex-col gap-4 overflow-y-scroll">
              <div>
                <div className="mb-1 text-sm text-gray-500">Raj Devkar</div>
                <div className="mt-2 flex items-start gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                      RD
                    </span>
                  </div>
                  <div className="max-w-[80%] rounded-[20px] bg-[#E9E9EB] px-4 py-3 dark:bg-gray-800 dark:text-white">
                    <p>
                      want to work together? just want to chat? send me a text
                      here (no, for real)
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-[20px] bg-[#0B84FE] px-4 py-3 text-white">
                  <p>sounds good 🙏</p>
                </div>
              </div>
              {resMessages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  className={clsx(
                    item.type === "sender" ? "flex justify-end" : "",
                  )}
                >
                  {item.type === "me" ? (
                    <>
                      <div className="mb-1 text-sm text-gray-500">
                        Raj Devkar
                      </div>
                      <div className="mt-2 flex items-start gap-3">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                            RD
                          </span>
                        </div>
                        <div className="max-w-[80%] rounded-[20px] bg-[#E9E9EB] px-4 py-3 dark:bg-gray-800 dark:text-white">
                          <p>{item.message}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="max-w-[80%] rounded-[20px] bg-[#0B84FE] px-4 py-3 text-white">
                      <p>{item.message}</p>
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-4 dark:border-white/10">
              <Link
                href="mailto:rajdevkar.6@gmail.com"
                className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/rajdevkar99"
                target="_blank"
                className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <form
                className="flex w-full items-center gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    // disabled={!!resMessages.length}
                    className="w-full rounded-full bg-gray-950/[2.5%] px-4 py-2 text-[15px] text-gray-500 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed dark:bg-white/5"
                  />
                </div>
                <button className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
                  <ArrowUp className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="@container relative isolate col-span-full overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 lg:col-span-2 dark:bg-gray-950 dark:outline-white/10">
          <div className="relative flex h-full flex-col px-6 pt-6 @lg:p-8">
            <div className="flex flex-1 flex-col justify-between">
              <div className="mb-6 flex flex-col">
                <h2 className="mb-2 text-2xl font-semibold text-gray-950 lg:mb-1 dark:text-white">
                  Contact Me
                </h2>
                <p className="max-w-sm text-base/relaxed text-gray-500 lg:text-lg/relaxed">
                  Drop me a line via email or slide into my Twitter DMs -
                  let&apos;s make something awesome happen! ✨
                </p>
              </div>

              <div className="flex flex-row items-start space-x-6">
                <Link
                  href="https://www.linkedin.com/in/rajdevkar/"
                  target="_blank"
                >
                  <FaLinkedin className="size-6 dark:fill-white" />
                </Link>
                <Link href="https://x.com/rajdevkar99" target="_blank">
                  <FaTwitter className="size-6 dark:fill-white" />
                </Link>
                <Link href="https://www.github.com/rajdevkar" target="_blank">
                  <FaGithub className="size-6 dark:fill-white" />
                </Link>
              </div>
            </div>
            <Image
              height="340"
              width="340"
              src="/images/hi-memoji.png"
              alt="Memoji"
              className="-right-8 -bottom-12 size-auto translate-y-10 md:absolute md:-right-0 md:size-64 md:translate-0"
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
