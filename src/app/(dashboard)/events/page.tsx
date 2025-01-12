"use client";
import AddEventForm from "@/components/views/AddEventForm";
import { EventRegisterForm } from "@/components/views/EventRegisterForm";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetAllEventsQuery } from "@/redux/features/events/eventsApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";

const EventsPage = () => {

  const { data: eventData, isLoading } = useGetAllEventsQuery(undefined);
  console.log(eventData);
  return (
    <div className="min-h-screen flex-1 rounded-xl bg-muted/50 p-4 md:min-h-min">
      <div className="flex justify-between mb-6">
        {" "}
        <h1 className="text-xl font-bold"></h1>
            <AddEventForm />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {eventData?.map((event) => (
          <div
            key={event.id}
            className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden bg-white transition-transform hover:scale-105"
          >
            {/* Event Image */}
            <div className="relative h-48 w-full">
              <Image
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                alt={`${event.title} Image`}
                fill
                className="object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="p-6">
              {/* Title */}
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {event.name}
              </h2>

              {/* Date */}
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3M16 7V3m-7 8h8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {event.date}
              </p>

              {/* Location */}
              <p className="text-sm text-gray-600 flex items-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                  />
                </svg>
                {event.location}
              </p>

              {/* Description */}
              <p className="text-gray-700 text-sm mt-4">
                Enjoy an unforgettable night of music, food, and fun!
              </p>
              <p className="text-gray-700 text-sm mt-4">
                Host : {event?.createdBy?.name}
              </p>

              {/* Button */}

              <EventRegisterForm eventId={event._id}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
