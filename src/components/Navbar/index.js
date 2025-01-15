import Link from "next/link";
import InputSearch from "./InputSeacrh";
const Navbar = () => {
  return (
    <header className="bg-primary">
      <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2">
        <Link href="/" className="font-bold font-black text-secondary text-3xl">
          NIKINIME
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
