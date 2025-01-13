// notifyBooking.ts
import { setNotification } from "@/redux/features/notification/notification.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const notifyBooking = (userId: string) => {
  console.log("Notifications enabled for user:", userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket: Socket = io("http://localhost:5000", {
      withCredentials: true,
    });

    // Join the user's notification room when connected
    socket.on("connect", () => {
      socket.emit("joinRoom", userId);
      console.log("Socket connected for user:", userId);
    });

    // Handle `newBooking` notifications
    socket.on("newBooking", (data) => {
      console.log("New booking notification:", data.message);
      dispatch(setNotification(data.message));
    });

    // Handle `statusChanged` notifications
    socket.on("statusChanged", (data) => {
      console.log("Status changed notification:", data.message);
      dispatch(setNotification(data.message));
    });
    // Handle `statusChanged` notifications
    socket.on("eventUpdated", (data) => {
      // console.log("Status changed notification:", data.message);
      dispatch(setNotification(data.message));
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
      console.log("Socket disconnected for user:", userId);
    };
  }, [userId, dispatch]); // Reconnect if `userId` or `dispatch` changes

  return null; // The hook does not return any JSX or UI elements
};

export default notifyBooking;
