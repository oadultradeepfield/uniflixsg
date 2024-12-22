"use client";

import { UserButton } from "@clerk/nextjs";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function CustomUserButton() {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-9 h-9",
    },
  };

  return (
    <UserButton appearance={userButtonAppearance}>
      <UserButton.MenuItems>
        <UserButton.Link
          label="Collection"
          labelIcon={<BookmarkIcon className="w-4 h-4 stroke-2 text-current" />}
          href="/collection"
        />
      </UserButton.MenuItems>
    </UserButton>
  );
}
