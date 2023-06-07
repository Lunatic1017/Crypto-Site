import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Key': 'daec6ce931msh8a307d881fb62f4p1b4bf6jsn9cd7b034ad40',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>  ({
    url ,headers: cryptoApiHeaders
})


export const cryptoApi  = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({    //to create request
        getCryptos : builder.query({
            query :  (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId , timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)
        }),
    })
});


export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;