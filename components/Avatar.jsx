import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden sm:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-none"
      />
    </div>
  );
};

export default Avatar;