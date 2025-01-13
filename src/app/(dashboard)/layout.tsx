"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import Notification from "@/components/views/Notification";
import notifyBooking from "@/hooks/notifyBooking";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Assuming you're using React and the user's ID is known

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user: any;
  console.log(token);

  user = useAppSelector(selectCurrentUser);
  useEffect(() => {
    setIsLoading(true);

    if (!user) {
      // removeUserInfo(authKey);
      return router.push("/login");
    }
    setIsLoading(false);
  }, [router, isLoading]);

  const userId = user?.userId;

  notifyBooking(userId!);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        {children}
      </SidebarInset>
      <Toaster position="top-right" richColors />
    </SidebarProvider>
  );
}
