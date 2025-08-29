import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-20 -bottom-8 sm:-left-28 sm:-bottom-10 xl:-left-36 xl:-bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[120px] sm:w-[160px] lg:w-[200px] xl:w-[260px] select-none pointer-events-none">
      <Image
        src="/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;