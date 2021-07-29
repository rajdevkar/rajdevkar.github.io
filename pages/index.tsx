import Head from "next/head";

export default function Home() {
  return (
    <body className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Raj Devkar • Full Stack Developer</title>
      </Head>

      <div className="relative container mx-auto px-6 pt-10 pb-0 md:p-0 w-screen h-screen flex flex-col justify-between md:justify-center items-center space-y-4 md:space-y-8 font-primary">
        <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8">
          <h1 className="text-center text-2xl md:text-6xl font-bold">
            RAJ DEVKAR
          </h1>
          <p className="text-xxs md:text-xs animate-slow-bounce pt-0 md:pt-10">
            ↓ Press any button ↓
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-10 md:gap-y-0">
            <a
              href="https://www.facebook.com/rajdevkar99"
              className="p-4 text-xxs text-center w-40 border-2 border-black border-dashed rounded"
            >
              FACEBOOK
            </a>
            <a
              href="https://www.instagram.com/rajdevkar99/"
              className="p-4 text-xxs text-center w-40 border-2 border-black border-dashed rounded"
            >
              INSTAGRAM
            </a>
            <a
              href="https://github.com/rajdevkar"
              className="p-4 text-xxs text-center w-40 border-2 border-black border-dashed rounded"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/rajdevkar"
              className="p-4 text-xxs text-center w-40 border-2 border-black border-dashed rounded"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        <div className="w-auto absolute bottom-0 -left-11">
          <img src="/assets/images/teemo.svg" width={200} height={200} alt="" />
        </div>
      </div>
    </body>
  );
}
