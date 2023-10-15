"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function useToast({
  type,
  message,
  successMessage,
  successRoute,
}: {
  type: string;
  message: string;
  successMessage?: string;
  successRoute?: string;
}) {
  const router = useRouter();
  useEffect(() => {
    if (message === "") return;
    if (type === "success") toast.success(message);
    if (type === "error") toast.error(message);

    if (successMessage && successRoute)
      if (message === successMessage) router.push(successRoute);

    return () => {
      toast.dismiss();
    };
  }, [message, type, router, successMessage, successRoute]);
}
