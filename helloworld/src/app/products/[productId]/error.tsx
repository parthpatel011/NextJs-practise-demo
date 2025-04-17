"use client";
import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
export default function ErrorBoundry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    };
  return (
  <div>
    <div>
        <p>{error.message}</p>
        <button onClick={reload}>Try again</button>
    </div>
  </div>
)
}
