import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-3">
      <h1 className="font-bold text-xl text-light">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="font-bold md:text-s text-xs text-light hover:text-secondary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
