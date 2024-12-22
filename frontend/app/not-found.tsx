"use client";

import React from "react";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-lg">
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
            <HomeIcon className="w-4 h-4" />
            Return Home
          </Link>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-base-content/75 hover:text-base-content/50 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
