import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto flex h-screen items-center justify-center bg-base-200">
      <SignIn />
    </div>
  );
}
