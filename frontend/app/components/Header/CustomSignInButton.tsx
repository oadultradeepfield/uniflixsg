import { SignInButton } from "@clerk/nextjs";

export default function CustomSignInButton() {
  return (
    <SignInButton>
      <button className="btn btn-secondary">Sign In</button>
    </SignInButton>
  );
}
