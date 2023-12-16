import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../CardCharacter/CardCharacter';
import styles from './CharacterList.module.css';
import { Loader } from '../UI/Loader';
import FilterCharacter from '../Filter/FilterCharacter';
import { Character } from '../../Interfaces';
import { Button, Col, Row } from 'react-bootstrap';
import { CharacterData, useGetCharactersQuery } from '../../store/api/characters.api';

type Props = {
  data: CharacterData;
  pageIncrement: () => void;
  pageDicrement: () => void;
  page: number;
};

export const Pagination = ({ data, pageIncrement, pageDicrement, page }: Props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button onClick={() => pageDicrement()}>❮ </Button>
      {data && data.info.prev ? <Button>{data?.info.prev?.slice(-1)}</Button> : ''}
      <Button>{page}</Button>
      {data && data.info.next ? <Button>{data?.info.next?.slice(-1)}</Button> : ''}

      <Button onClick={() => pageIncrement()}> ❯</Button>
    </div>
  );
};

const CharactersList = ({ data }: { data: CharacterData }) => {
  return (
    <div>
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
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CharactersList;
