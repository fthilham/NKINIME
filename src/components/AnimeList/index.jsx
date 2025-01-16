import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-7 px-3">
      {api.data?.map((anime, index) => {
        return (
          <Link
            key={index}
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-light hover:text-secondary transition-all"
          >
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
                className="relative h-auto w-full object-cover rounded-lg"
              />
            </div>
            <h2 className="p-2 md:text-sm text-xs font-bold ">{anime.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
