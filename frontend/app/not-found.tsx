"use client";

import React from "react";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4">
      <div className="max-w-lg space-y-6 text-center">
        <div className="text-6xl font-bold text-base-content/90">404</div>
        <div className="space-y-3">
          <div className="text-2xl font-semibold text-base-content/80">
            Page Not Found
          </div>
          <div className="text-base-content/75">
            Oops! The page you're looking for seems to have wandered off.
          </div>
        </div>
        <div className="space-y-4">
          <Link href="/" className="btn btn-primary">
            <HomeIcon className="h-4 w-4" />
            Return Home
          </Link>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-base-content/75 transition-colors hover:text-base-content/50"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
