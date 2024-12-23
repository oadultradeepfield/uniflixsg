import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchBar from "./components/Recommendation/SearchBar";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-base-100">
        <div className="border-b-2 border-base-200 px-2 py-1">
          <Header />
        </div>
        <main className="flex flex-grow flex-col items-center justify-center px-2 py-4">
          <Hero />
          <SearchBar />
        </main>
        <Footer />
      </div>
    </>
  );
}
