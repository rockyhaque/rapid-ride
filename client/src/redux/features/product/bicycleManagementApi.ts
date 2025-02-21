import { baseApi } from "../../api/baseApi";

const bicycleManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBicycles: builder.query({
      query: () => ({
        url: "/bicycles",
        method: "GET",
      }),
    }),
    getBicycleDetails: builder.query({
      query: (id) => ({
        url: `/bicycles/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBicyclesQuery, useGetBicycleDetailsQuery } = bicycleManagementApi;
