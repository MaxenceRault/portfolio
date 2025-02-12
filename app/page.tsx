
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
    
  );
}
