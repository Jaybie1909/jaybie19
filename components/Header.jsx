import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-6 lg:px-10 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-y-4 sm:gap-y-6 py-4 sm:py-6 lg:py-8">
          {/* text logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
          >
            <span className="text-white font-extrabold">Jay</span>
            <span className="text-red-500 font-light">bie.</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;