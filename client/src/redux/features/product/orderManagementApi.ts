import { baseApi } from "@/redux/api/baseApi";

const orderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders/all-orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    getMyOrder: builder.query({
      query: (email) => ({
        url: `/orders/my-order/${email}`,
        method: "GET",
      }),
      providesTags: ["order"]
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/delete-order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useGetAllOrdersQuery, useGetMyOrderQuery, useDeleteOrderMutation } = orderManagementApi;
