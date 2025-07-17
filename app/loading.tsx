"use client";

import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#eeeeee]">
      <Spinner size="lg" label="Loading..." />
    </div>
  );
}
