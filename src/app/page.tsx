import Image from "next/image";
import { raleway } from "./utils/importedFonts";
import logo from './images/stripped-logo.svg'
import WriteUpItem from "./components/WriteUpItem";
import Footer from "./components/Footer";

export default function Home() {

  
  return (
    <main className="py-20 px-7 flex flex-col text-center">
      <header className="flex flex-col items-center gap-4">
    <Image 
    src={logo}
    width="0"
    height="0"
    sizes="100vw"
    className="h-48 w-48 md:h-80 md:w-80 xl:h-96 xl:w-96"
    alt="Website logo"
   />
   <h1 className={`${raleway.className} text-3xl md:text-4xl xl:text-6xl`}>Writeups by Peace</h1>
   <p className="xl:text-2xl">Biweekly writeups by Peace, on a diverse set of topics</p>
      </header>
  
  <section className="grid grid-cols-1 gap-7 px-4 py-20 md:px-10 md:grid-cols-2 xl:grid-cols-3">
  {Array.from({ length: 5 }).map((item, index) => (
     <WriteUpItem key={index}/>
     ))}
  </section>

<Footer />
 

    </main>
  );
}
