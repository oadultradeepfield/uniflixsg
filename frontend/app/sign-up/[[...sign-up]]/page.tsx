import { SignUp } from "@clerk/nextjs";
import Header from "@/app/components/Header/Header";

export default function Page() {
  return (
    <div className="h-screen mx-auto flex items-center justify-center bg-base-100">
      <SignUp />
    </div>
  );
}
