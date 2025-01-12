import Hero from "@/components/ui/Hero";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <NavBar />
        <Hero />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
