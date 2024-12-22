import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen mx-auto flex items-center justify-center bg-base-200">
      <SignIn />
    </div>
  );
}
