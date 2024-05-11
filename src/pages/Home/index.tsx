import { useHomePage } from "@hooks/useHomePage";
import { Forms } from "@components/Forms";
import { BlockArts } from "@components/BlockArts";
import { Pagination } from "@components/Pagination";

const Home: React.FC = () => {
  const {
    filter,
    setFilter,
    setSearch,
    setPage,
    randomImages,
    page,
    total,
    arts,
    loadArts,
    loadRandom
  } = useHomePage();

  return (
    <>
      <Forms
        filter={filter}
        setFilter={setFilter}
        setSearch={setSearch}
        setPage={setPage}
        load={loadArts}
      />
      <BlockArts data={arts} load={loadArts} type="main" />
      {total >= 2 && arts && Boolean(arts.length) && (
        <Pagination
          load={loadArts}
          page={page}
          total={total}
          setPage={setPage}
        />
      )}
      <BlockArts data={randomImages} load={loadRandom} type="random" />
    </>
  );
};

export { Home };
