import { baseApi } from "@/redux/api/baseApi";

const EVENT_URL = "/event";

export const eventApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createEvent: build.mutation({
      query: (data) => ({
        url: `${EVENT_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["event", "user"],
    }),
    getAllEvents: build.query({
      query: () => ({
        url: `${EVENT_URL}`,
        method: "GET",
      }),

      providesTags: ["event", "booking"],
    }),
  }),
});

export const { useCreateEventMutation, useGetAllEventsQuery } = eventApi;
