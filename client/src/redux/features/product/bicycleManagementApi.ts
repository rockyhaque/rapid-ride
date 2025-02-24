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
    //* previous
    // getAllBicycles: builder.query({
    //   query: () => ({
    //     url: "/bicycles",
    //     method: "GET",
    //   }),
    //   providesTags: ['bicycle']
    // }),

    //* using search and filter
    getAllBicycles: builder.query({
      query: (params: Record<string, unknown>) => ({
        url: "/bicycles",
        method: "GET",
        params, // Passing query parameters to the backend
      }),
      providesTags: ['bicycle'],
    }),

    getBicycleDetails: builder.query({
      query: (id) => ({
        url: `/bicycles/${id}`,
        method: "GET",
      }),
      providesTags: ['bicycle']
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
