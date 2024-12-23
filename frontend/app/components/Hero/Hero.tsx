import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-base-100">
      <div className="hero-content text-center">
        <div className="flex max-w-md flex-col items-center">
          <div className="flex flex-row items-center justify-center space-x-4">
            <h1 className="text-5xl font-bold text-pink-700">Welcome!</h1>
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
