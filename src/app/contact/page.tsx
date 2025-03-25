"use client";

import { Mail, Twitter, ArrowUpRight, ArrowUp } from "lucide-react";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Contact() {
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState<string>("");
  const [resMessages, setResMessages] = useState<
    { message: string; type: "me" | "sender" }[]
  >([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: 'end' });
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
      setResMessages((prev) => [...prev, { message: "I will get back with you soon", type: "me" }]);

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
    <main className="bg-dot-gray-950/[0.1] dark:bg-dot-white/[0.1]">
      <Header />
      <div className="mx-auto bg-gray-950/5 p-6">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 lg:max-w-none">
          <div className="grid grid-cols-4 gap-6">
            {/* Email card */}
            <div className="@container isolate col-span-1 flex-1 overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10">
              <div className="flex h-full flex-col gap-6 p-6 @md:p-8">
                <div className="relative flex-1">
                  <div className="absolute top-0 right-0">
                    <Mail className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold text-gray-950 dark:text-white">
                      Raj Devkar
                    </h2>
                    <div className="text-gray-500">
                      <div className="mb-4">
                        <div className="mb-1 text-sm">To</div>
                        <div>rajdevkar.6@gmail.com</div>
                      </div>
                      <div>
                        <div className="mb-1 text-sm">Let&apos;s Chat</div>
                        <div className="text-gray-400">Say hello</div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="mailto:rajdevkar.6@gmail.com"
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200/80 px-6 py-2.5 text-gray-950 transition-colors hover:bg-gray-950/[2.5%] dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Email Me{" "}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Twitter card */}
            <div className="@container isolate col-span-1 flex-1 overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10">
              <div className="flex h-full flex-col gap-6 p-6 @md:p-8">
                <div className="relative flex-1">
                  <div className="absolute top-0 right-0">
                    <Twitter className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="mb-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                          RD
                        </span>
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-950 dark:text-white">
                          Raj Devkar
                        </h2>
                        <p className="text-gray-500">@rajdevkar99</p>
                      </div>
                    </div>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                      i get computers &apos;puting ✷<br />
                      ai design{" "}
                      <a
                        href="https://figma.com"
                        className="text-[#0B84FE] no-underline hover:opacity-70"
                      >
                        @figma
                      </a>{" "}
                      ✷ prev{" "}
                      <a
                        href="https://diagram.com"
                        className="text-[#0B84FE] no-underline hover:opacity-70"
                      >
                        @diagram
                      </a>
                    </p>
                  </div>
                  <a
                    href="https://twitter.com/rajdevkar99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200/80 px-6 py-2.5 text-gray-950 transition-colors hover:bg-gray-950/[2.5%] dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    DM Me{" "}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Message Box */}
            <div className="@container isolate col-span-2 overflow-hidden rounded-2xl bg-white outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10">
              <div className="flex h-full flex-col gap-4 p-6 @md:p-8">
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
                          want to work together? just want to chat? send me a
                          text here (no, for real)
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
                    <Twitter className="h-5 w-5" />
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
          </div>

          {/* Full Width Calendar */}
          <div className="@container isolate overflow-hidden rounded-2xl bg-white p-2 outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10">
            <div className="flex flex-col gap-6 p-6 @md:p-8">
              <div className="relative">
                <div className="absolute top-0 right-0">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.75 2.5A.75.75 0 017.5 1.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zM4 5.5c0-1.1.9-2 2-2h12a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2v-13zm2 0v13h12v-13H6zm2 2a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zm0 4a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zm0 4a.75.75 0 000 1.5h4a.75.75 0 000-1.5H8z" />
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-semibold text-gray-950 dark:text-white">
                  Schedule a Call
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Pick a time that works best for you. I&apos;ll be happy to
                  chat about your project or answer any questions.
                </p>
                <iframe
                  src="https://cal.com/rajdevkar/15min"
                  className="h-[650px] w-full rounded-xl border-0"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
