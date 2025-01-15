import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4 px-3">
      {api.data.map((anime) => {
        return (
          <Link
            href={`/${anime.mal_id}`}
            className="cursor-pointer text-light hover:text-secondary transition-all"
          >
            <Image
              src={anime.images.webp.image_url}
              alt=".."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h2 className="p-2 md:text-sm text-xs font-bold ">{anime.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
