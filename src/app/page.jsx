import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeRespons } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeRespons("top/anime", "limit=20");

  return (
    <>
      <section>
        <Header
          title="Sing Paling Populer"
          linkTitle="Deleng Kabeh >>>"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};
export default Page;
