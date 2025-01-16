"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setSearchValue("");
  }, [pathname]);

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value.trim();
      if (!keyword) {
        alert("Input ora oleh kosong! Ketik keyword sing bener.");
        return;
      }
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder=" golet anime..."
        className="w-full rounded p-1 bg-secondary"
        ref={searchRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-3" onClick={handleSearch}>
        <MagnifyingGlass size={20} />
      </button>
    </div>
  );
};

export default InputSearch;
