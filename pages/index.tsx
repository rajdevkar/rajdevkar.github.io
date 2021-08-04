import Head from "next/head";

export default function Home() {
  return (
    <body className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Raj Devkar • Full Stack Developer</title>
      </Head>
      <div className="bg-home bg-bottom bg-cover">
        <div className="relative container mx-auto px-6 pt-10 pb-0 md:p-0 w-screen h-screen flex flex-col justify-between md:justify-center items-center space-y-4 md:space-y-8 font-primary">
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8 mt-10 md:mt-0">
            <div className="relative">
              <div className="w-auto absolute -left-3 -top-14 md:-top-16">
                <img
                  src="/assets/images/teemo.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <h1 className="text-center text-white text-3xl md:text-6xl font-bold mt-2 md:mt-1">
                RAJ DEVKAR
              </h1>
            </div>
            <p className="text-xxs text-white md:text-xs animate-slow-bounce pt-0 md:pt-10">
              ↓ Press any button ↓
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-10 md:gap-y-0">
              <a
                href="https://www.facebook.com/rajdevkar99"
                target="_blank"
                className="p-4 text-xxs text-center text-white w-40 border-2 border-white border-dashed rounded"
              >
                FACEBOOK
              </a>
              <a
                href="https://www.instagram.com/rajdevkar99/"
                target="_blank"
                className="p-4 text-xxs text-center text-white w-40 border-2 border-white border-dashed rounded"
              >
                INSTAGRAM
              </a>
              <a
                href="https://github.com/rajdevkar"
                target="_blank"
                className="p-4 text-xxs text-center text-white w-40 border-2 border-white border-dashed rounded"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/rajdevkar"
                target="_blank"
                className="p-4 text-xxs text-center text-white w-40 border-2 border-white border-dashed rounded"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
