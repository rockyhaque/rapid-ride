import { baseApi } from "@/redux/api/baseApi";

const orderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/orders/create-order",
        method: "POST",
        body: orderInfo,
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify-order",
        method: "POST",
        params: { order_id },
      }),
    }),
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
      providesTags: ["order"],
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

export const {
  useCreateOrderMutation,
useVerifyOrderQuery,
  useGetAllOrdersQuery,
  useGetMyOrderQuery,
  useDeleteOrderMutation,
} = orderManagementApi;
