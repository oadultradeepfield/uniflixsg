import { SignedIn, SignedOut } from "@clerk/nextjs";
import CustomSignInButton from "./CustomSignInButton";
import CustomUserButton from "./CustomUserButton";
import AppLogo from "./AppLogo";

export default function Header() {
  return (
    <div className="max-w-5xl mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <AppLogo />
      </div>
      <div className="navbar-end space-x-4">
        <SignedOut>
          <CustomSignInButton />
        </SignedOut>
        <SignedIn>
          <CustomUserButton />
        </SignedIn>
      </div>
    </div>
  );
}
