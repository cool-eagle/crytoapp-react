import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '544c1da9e2mshdd47d16df3e9186p1b9d90jsn4cfccd3a9501'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url, headers: cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCryptosQuery,
}=cryptoApi;