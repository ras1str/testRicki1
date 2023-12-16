import React from 'react';
import styles from './CardCharacter.module.css';
import { Character } from '../../Interfaces';
import { NavLink } from 'react-router-dom';

const CardCharacter: React.FC<Character> = ({ image, name, species, status, gender, id }) => {
  return (
    <div
      style={{ height: '500px', width: '300px' }}
      className="mt-3 bg-white border shadow rounded "
    >
      <img src={image} alt={name} />
      <div className="card__info">
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{status}</p>
        <p>{gender}</p>
        <NavLink to={`${id}`}>Полная информация</NavLink>
      </div>
    </div>
  );
};

export default CardCharacter;
