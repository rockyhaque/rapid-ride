import { baseApi } from "../../api/baseApi";

const usersManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    getUserByEmail: builder.query({
      query: (email) => ({
        url: `/users/my-profile/${email}`,
        method: "GET",
      }),
    }),
    updateProfile: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["profile"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/users/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserByEmailQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
  useBlockUserMutation
} = usersManagementApi;
