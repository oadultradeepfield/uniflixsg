import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100">
        <div className="px-2 py-1 border-b-2 border-base-200">
          <Header />
        </div>
        <div className="flex-1 px-2 py-4">
          {/* Your main content goes here */}
        </div>
        <Footer />
      </div>
    </>
  );
}
