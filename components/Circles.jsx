import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[120px] sm:w-[160px] lg:w-[200px] xl:w-[300px] absolute -right-8 -bottom-1 sm:-right-12 sm:-bottom-1 xl:-right-16 xl:-bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src="/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;