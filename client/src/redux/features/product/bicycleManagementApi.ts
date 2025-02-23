import { baseApi } from "../../api/baseApi";

const bicycleManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBicycle: builder.mutation({
      query: (bicycleInfo) => ({
        url: "bicycles/create-bicycle",
        method: "POST",
        body: bicycleInfo,
      }),
      // invalidatesTags: ['bicycle']
    }),
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

export const {useCreateBicycleMutation ,useGetAllBicyclesQuery, useGetBicycleDetailsQuery } =
  bicycleManagementApi;
