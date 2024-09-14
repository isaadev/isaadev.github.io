import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/icon.png" 
          alt="Isa"
          width={150}
          height={150}
          className=""
          priority
        />
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-sm text-center sm:text-left">
          Hi, Im <span className="text-blue-400">Isa</span>, a rising senior at Boston University majoring in Computer Science with experience in fullstack development. Welcome to my personal website for CS 506.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/work-experience" className="hover:underline hover:underline-offset-4">
          Experience
        </Link>
        <Link href="/projects" className="hover:underline hover:underline-offset-4">
          Projects
        </Link>
        <Link href="/contact" className="hover:underline hover:underline-offset-4">
          Contact
        </Link>
        <Link href="/assignments" className="hover:underline hover:underline-offset-4">
          Assignments
        </Link>
      </footer>
    </div>
  );
}
