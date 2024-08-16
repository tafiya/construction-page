import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Hiring from "@/components/Hiring";
import Partner from "@/components/Partner";
import Rules from "@/components/Rules";


export default function Home() {
  return (
    <main>
    
       <Banner></Banner>
       <Partner></Partner>
       <Rules></Rules>
    <Hiring></Hiring>
    <Contact></Contact>
    </main>
  );
}
