import Image from "next/image";

export default function AppLogo() {
  return (
    <div className="flex flex-row items-center space-x-3">
      <div className="w-8 h-8 -mt-4">
        <Image src="/logo.png" alt="App Logo" width={40} height={40} />
      </div>
      <div className="text-2xl font-bold text-pink-700">UniFliXsg</div>
    </div>
  );
}
