import { getAnimeRespons } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeRespons(`anime/${id}`);
  console.log(anime);

  return (
    <>
      <div className="container mx-auto p-6 bg-primary text-light">
        {/* Detail Judul dan Tahun */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">{anime.data.title}</h1>
          <p className="text-gray-400 text-lg">{anime.data.year}</p>
        </div>

        <div className="w-full flex justify-center mb-6 mt-6">
          <VideoPlayer
            YoutubeId={anime.data.trailer.youtube_id}
            className="rounded-lg overflow-hidden"
          />
        </div>

        {/* Bagian Gambar */}
        <div className="flex flex-row pt-6 px-2 gap-4">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.title}
            width={150}
            height={250}
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <h3 className="text-sm font-bold md:text-2xl">
              {anime.data.title} ( {anime.data.year} )
            </h3>
            {[
              { label: "Ranking", value: anime.data.rank },
              { label: "Nilai", value: anime.data.score },
              { label: "Status", value: anime.data.status },
              { label: "Episode", value: anime.data.episodes },
              { label: "Durasi", value: anime.data.duration },
            ].map((item, index) => (
              <h3 key={index} className="text-gray-300">
                {item.label}: {item.value}
              </h3>
            ))}
          </div>
        </div>

        {/* Sinopsis */}
        <div className="mt-6 px-2">
          <h2 className="text-xl font-semibold mb-2">Sinopsis : </h2>
          <p className="text-gray-300 leading-relaxed">{anime.data.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default page;
