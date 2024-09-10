import Image from "next/image";
import { raleway } from "./utils/importedFonts";
import logo from './images/stripped-logo.svg'

export default function Home() {
  return (
    <main className="py-20 px-7 flex flex-col text-center">
      <header className="flex flex-col items-center gap-4">
    <Image 
    src={logo}
    width="0"
    height="0"
    sizes="100vw"
    className="h-48 w-48"
    alt="Website"
   />
   <h1 className={`${raleway.className} text-3xl`}>Writeups by Peace</h1>
   <p>Biweekly writeups by Peace, on a diverse set of topics</p>

      </header>
  
    </main>
  );
}
