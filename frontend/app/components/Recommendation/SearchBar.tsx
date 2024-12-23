"use client";

import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Recommendation from "./Recommendation";

export default function SearchBar() {
  const [text, setText] = useState<string>(() => {
    return localStorage.getItem("searchText") || "";
  });

  const [searchQuery, setSearchQuery] = useState<string>(() => {
    return localStorage.getItem("searchQuery") || "";
  });

  const maxLength = 150;

  useEffect(() => {
    localStorage.setItem("searchText", text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const textarea = document.getElementById("search") as HTMLTextAreaElement;
    if (textarea && text) {
      textarea.value = text;
    }
  }, []);

  const isWithinWordLimit = text.length <= maxLength;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  const handleSubmit = (): void => {
    if (isWithinWordLimit) {
      const trimmedText = text.trim();
      setSearchQuery(trimmedText);
      if (typeof window !== "undefined") {
        localStorage.setItem("searchQuery", trimmedText);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-6 px-4">
      <div className="card w-full max-w-md border bg-base-100 shadow">
        <div className="card-body p-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-base-content opacity-50" />
            <textarea
              id="search"
              value={text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Tell us about yourself in 20 – 30 words"
              className="textarea textarea-bordered h-24 w-full resize-none pl-10"
            />
          </div>
          <div
            id="text-length"
            className="flex items-center justify-between text-sm"
          >
            <span>
              {text.length}/{maxLength} characters
            </span>
            <button
              className="btn btn-secondary btn-sm"
              onClick={handleSubmit}
              disabled={!isWithinWordLimit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {searchQuery && <Recommendation query={searchQuery} />}
    </div>
  );
}
