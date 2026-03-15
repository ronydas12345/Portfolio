import Image from 'next/image';

export default function Hero() {

  return (
    <section className="w-full h-[1024px] bg-white overflow-hidden">
      {/* Main Content */}
      <div className="w-full h-[503px] mt-[126px] flex">
        {/* Left Section - Title and Description */}
        <div className="w-[65%] flex flex-col">
          {/* Title Section */}
          <div className="w-full h-40 bg-black flex items-center px-8">
            <h1 className="text-7xl font-normal text-white text-right ml-auto">
              Hi, I'm Raunak Das
            </h1>
          </div>

          {/* Divider */}
          <div className="w-full h-[5px] bg-neutral-100" />

          {/* Description Section */}
          <div className="w-full flex-1 bg-slate-950 flex items-center px-12">
            <p className="text-white text-3xl font-normal text-right">
              Welcome to my portfolio. I'm a passionate developer creating innovative digital solutions.
              Explore my work and let's build something amazing together.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-[35%] relative flex items-center justify-center bg-white">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - About Me Introduction */}
      <div className="w-full h-[495px] bg-black flex flex-col">
        <div className="h-40 bg-black flex items-center">
          <h2 className="text-7xl font-normal text-white text-right px-8 ml-auto">
            About Me
          </h2>
        </div>
        <div className="flex-1 bg-zinc-300" />
      </div>
    </section>
  );
}
