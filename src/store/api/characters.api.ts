import { Character } from '../../Interfaces';
import { api } from './api';

interface CharacterData {
  info: {
    next: string;
    prev: string;
  };
  results: Character[];
}

export const characters = api.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterData, number>({
      query: (page: number = 1) => `/api/character/?page=${page}`,
      providesTags: ['characters'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCharactersQuery } = characters;
