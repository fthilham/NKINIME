import { getAnimeRespons } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  // const keyword = params.keyword
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeRespons("anime", `q=${decodeKeyword}`);
  return (
    <>
      <section>
        <Header title={`Hasil nggolet : ${decodeKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
