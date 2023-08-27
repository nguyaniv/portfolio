import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm grid">
        <nav className="bg-transparent px-2 text-white rounded-2xl py-5 w-full grid place-items-start grid-cols-4">
          <Link className="" href={'/'}>
            About
          </Link>
          <Link className="" href={'/'}>
            Technologies
          </Link>
          <Link className="" href={'/'}>
            Portfolio
          </Link>
          <Link className="" href={'/'}>
            Contact
          </Link>
        </nav>
        <header className="grid mt-10 w-[60rem]">
          <div className="top-header ">
            <div className=" grid ">
              <div className="name  text-5xl">Yaniv Shabi</div>
              <div className="text-3xl  !font-mono font-light">
                Fullstack Developer
              </div>
            </div>
            <div className="resume"></div>
          </div>
          <div className="header-bg mt-10 rounded-3xl"></div>
        </header>

        <section></section>
      </div>
    </main>
  );
}
