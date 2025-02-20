import { IBicycle } from "@/types/bicycle.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// RTK Query API Slice
export const bicyclesApi = createApi({
  reducerPath: "bicyclesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getBicycles: builder.query<IBicycle[], void>({
      query: () => "/bicycles",
    }),
  }),
});

export const { useGetBicyclesQuery } = bicyclesApi;
