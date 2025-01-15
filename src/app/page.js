import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  );
  const topAnime = await response.json();
  return (
    <>
      <section>
        <Header
          title="Sing Paling Populer"
          linkTitle="Deleng Kabeh"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};
export default Page;
