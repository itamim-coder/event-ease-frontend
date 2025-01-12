import { baseApi } from "@/redux/api/baseApi";

const BOOKING_URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerEvent: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["booking", "user"],
    }),
  }),
});

export const { useRegisterEventMutation } = bookingApi;
