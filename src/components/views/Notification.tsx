"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

import { CardFooter } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";

const Notification = () => {
  const notifications = useAppSelector(
    (state) => state.notification.notifications
  );
  console.log(notifications, "compo");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] border-none">
        {/* Notifications */}
        <div className="grid gap-4 pt-5">
          {notifications?.length > 0 ? (
            notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Received notification
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              No new notifications
            </p>
          )}
        </div>
        <CardFooter className="flex justify-center">
          <Button size="sm" variant="link">
            View All Notifications
          </Button>
        </CardFooter>
      </PopoverContent>
    </Popover>
  );
};

export default Notification;
