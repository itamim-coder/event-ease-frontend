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
    getUserCreatedEvent: build.query({
      query: () => ({
        url: `${EVENT_URL}/user-event`,
        method: "GET",
      }),

      providesTags: ["event", "user"],
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `${EVENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["event"],
    }),

    eventUpdate: build.mutation({
      query: ({ id, data }) => {
        console.log("Final data being sent to the backend:", { id, data }); // Add final log
        console.log("Sending the PUT request", {
          url: `${EVENT_URL}/${id}`,
          method: "PUT",
          body: data,
        });
        return {
          url: `${EVENT_URL}/${id}`,
          method: "PUT",
          body: data, // Ensure data is an actual object with fields, not empty
        };
      },
      invalidatesTags: ["event"],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetAllEventsQuery,
  useGetUserCreatedEventQuery,
  useDeleteEventMutation,
  useEventUpdateMutation,
} = eventApi;
