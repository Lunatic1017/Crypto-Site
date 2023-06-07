import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiheader = {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'daec6ce931msh8a307d881fb62f4p1b4bf6jsn9cd7b034ad40',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) =>  ({
    url ,headers: cryptoNewsApiheader
})

export const cryptoNewsApi  = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({    //to create request
        getCryptoNews   : builder.query({
            query :  ({newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
