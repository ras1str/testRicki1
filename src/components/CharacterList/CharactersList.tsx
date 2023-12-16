import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../CardCharacter/CardCharacter';
import styles from './CharacterList.module.css';
import { Loader } from '../UI/Loader';
import FilterCharacter from '../Filter/FilterCharacter';
import { Character } from '../../Interfaces';
import { Button, Col, Row } from 'react-bootstrap';
import { useGetCharactersQuery } from '../../store/api/characters.api';

const CharactersList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetCharactersQuery(page);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  const pageHandler = (action: boolean) => {
    if (page <= 1 && action == false) {
    } else {
      action ? setPage((page) => page + 1) : setPage((page) => page - 1);
    }
  };

  console.log(data);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Button onClick={() => pageHandler(false)}>❮ </Button>
        {data && data.info.prev ? <Button>{data?.info.prev?.slice(-1)}</Button> : ''}
        <Button>{page}</Button>
        {data && data.info.next ? <Button>{data?.info.next?.slice(-1)}</Button> : ''}

        <Button onClick={() => pageHandler(true)}> ❯</Button>
      </div>

      <Row>
        {data &&
          data.results.map((character) => (
            <Col>
              <Card
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
                status={character.status}
                gender={character.gender}
              />
              <NavLink to={`${character.id}`}>Полная информация</NavLink>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default CharactersList;
