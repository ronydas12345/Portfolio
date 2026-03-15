import Image from 'next/image';

export default function Hero() {

  return (
    <section className="w-full bg-slate-950 overflow-hidden">
      {/* Main Content */}
      <div className="w-full h-[400px] flex">
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
        <div className="w-[35%] relative flex items-center justify-center bg-slate-950">
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

      {/* Divider Line */}
      <div className="w-full h-[2px] bg-neutral-700" />
    </section>
  );
}
