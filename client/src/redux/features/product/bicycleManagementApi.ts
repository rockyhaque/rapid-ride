import { baseApi } from "../../api/baseApi";

const bicycleManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBicycle: builder.mutation({
      query: (bicycleInfo) => ({
        url: "bicycles/create-bicycle",
        method: "POST",
        body: bicycleInfo,
      }),
      invalidatesTags: ['bicycle']
    }),
    getAllBicycles: builder.query({
      query: () => ({
        url: "/bicycles",
        method: "GET",
      }),
      providesTags: ['bicycle']
    }),
    getBicycleDetails: builder.query({
      query: (id) => ({
        url: `/bicycles/${id}`,
        method: "GET",
      }),
    }),
    updateBicycle: builder.mutation({
      query: (args) => ({
        url: `/bicycles/${args.id}`,
        method: 'PATCH',
        body:args.data
      }),
      invalidatesTags: ['bicycle']
    }),
    deleteBicycle: builder.mutation({
      query: (id) => ({
        url: `/bicycles/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['bicycle']
    })
  }),
});

export const {useCreateBicycleMutation, useGetAllBicyclesQuery, useGetBicycleDetailsQuery, useUpdateBicycleMutation, useDeleteBicycleMutation } =
  bicycleManagementApi;
