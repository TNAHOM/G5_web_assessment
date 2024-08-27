"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-4/6 text-left">
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
