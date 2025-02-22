import { baseApi } from "../../api/baseApi";

const usersManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  Get single user by ID 
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      // providesTags: ["profile"],
    }),
    // Get single user by Email
    getUserByEmail: builder.query({
      query: (email) => ({
        url: `/users/my-profile/${email}`,
        method: "GET",
      }),
    }),

    //  Update user profile
    updateProfile: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      // invalidatesTags: ["profile"],
    }),

    //  Delete user (Fixed)
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      //   invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetUserByEmailQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
} = usersManagementApi;
