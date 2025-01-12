// notifyBooking.ts
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const notifyBooking = (userId: string) => {
  console.log(userId);
  useEffect(() => {
    const socket: Socket = io("http://localhost:5000", {
      withCredentials: true,
    });
    // console.log(socket);
    socket.on("connect", () => {
      socket.emit("joinRoom", userId); // Join the room for notifications
    });

    socket.on("newBooking", (data) => {
      console.log("New booking notification:", data.message);
      // You can implement UI updates here to show notifications or update the UI accordingly
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]); // Dependencies are set to userId to reconnect if it's updated

  return null; // The hook doesn't need to return anything
};

export default notifyBooking;
