import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-base-100">
      <div className="hero-content text-center">
        <div className="flex max-w-md flex-col items-center">
          <div className="flex flex-row items-center justify-center space-x-1">
            <div className="h-20 w-20">
              <Image src="/logo.png" alt="App Logo" width={60} height={60} />
            </div>
            <h1 className="text-6xl font-bold text-pink-700">UniFliXsg</h1>
          </div>
          <p className="py-6">
            Discover Your Perfect Undergraduate Program in Singapore with
            AI-Powered Matching! P.S. Only single major programs will be shown.
            😉
          </p>
        </div>
      </div>
    </div>
  );
}
