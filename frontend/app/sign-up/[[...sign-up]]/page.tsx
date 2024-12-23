import { SignUp } from "@clerk/nextjs";
import Header from "@/app/components/Header/Header";

export default function Page() {
  return (
    <div className="mx-auto flex h-screen items-center justify-center bg-base-100">
      <SignUp />
    </div>
  );
}
