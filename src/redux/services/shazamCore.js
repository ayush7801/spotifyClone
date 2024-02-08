import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'a9b6c4de33msh820c3f409e8887ap199c0ajsn47cacc07b7ed');
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/track'}),
    }), 
});

export const { useGetTopChartsQuery } = shazamCoreApi;