import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Stock {
    
}

const URL : string = import.meta.env.VITE_STOCK_URL
const API_KEY : string = import.meta.env.VITE_API_KEY_ALPHAVANTAGE

export const apiSlice = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL
  }),
  endpoints(builder) {
    return {
      fetchStocks: builder.query<any, any>({
        query({interval, symbol}) {
          return `query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`;
        },
      }),
    };
  },
});

//Redux toolkit creates a thunk hook autmatically combining the names
export const { useFetchStocksQuery } = apiSlice;
