import { useState } from 'react';
import CharactersList, { Pagination } from '../components/CharacterList/CharactersList';
import { useGetCharactersQuery } from '../store/api/characters.api';
import { Loader } from '../components/UI/Loader';

const Main = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetCharactersQuery(page);

  const pageDicrement = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const pageIncrement = () => {
    if (page < 42) {
      setPage((page) => page + 1);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Pagination
        data={data!}
        pageDicrement={pageDicrement}
        pageIncrement={pageIncrement}
        page={page}
      />

      <CharactersList data={data!} />
    </div>
  );
};

export default Main;
