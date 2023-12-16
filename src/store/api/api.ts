import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const disabledAuthTokenEndpoints = ['characters'];

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://rickandmortyapi.com',
});

export const api = createApi({
  reducerPath: 'api',

  baseQuery: baseQuery,
  tagTypes: disabledAuthTokenEndpoints,
  endpoints: (builder) => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
