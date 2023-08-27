import Link from 'next/link';
import Navbar from './components/Navbar';
import DownloadButton from './components/DownloadButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 pb-20 lg:p-16">
      <div className="z-10 md:max-w-4xl lg:max-w-5xl w-full items-center justify-between font-mono text-sm grid">
        <Navbar />
        <header className="grid mt-10 md:w-full lg:w-[60rem]">
          <div className="top-header ">
            <div className=" grid grid-cols-2 ">
              <div className="grid gap-y-1">
                <div className="name text-2xl sm:text-4xl lg:text-5xl">
                  Yaniv Shabi
                </div>
                <div className=" text-xl sm:text-2xl md:text-3xl  !font-mono font-light">
                  Fullstack Developer
                </div>
              </div>

              <DownloadButton />
            </div>
            <div className="resume"></div>
          </div>
          <div className="header-bg mt-10 rounded-3xl"></div>
        </header>

        <section className="grid gap-y-5 mt-10 lg:pr-14">
          <div className=" text-2xl md:text-3xl lg:text-4xl   about-me w-full">
            About me
          </div>
          <p className=" leading-9 text-xl">
            Balancing freelance work alongside my employment, I'm wholeheartedly
            committed to fostering effective teamwork and eagerly taking on
            extra responsibilities, fueled by my genuine passion for coding and
            unwavering dedication to personal growth.
            <span className="bg-yellow-300 text-black p-1">
              With 2 years at Onezero and an additional 2 years freelancing
              concurrently
            </span>
            , I bring a robust foundation to empower skilled engineering teams
            in crafting exceptional products.
          </p>
        </section>

        <section className="grid mt-10 lg:pr-14">
          <div className="text-2xl md:text-3xl lg:text-4xl pb-2 about-me w-full">
            Skills & Expertise
          </div>
          <div className="mt-10 border-slate-600 grid grid-cols-4 py-2  md:text-xl lg:text-2xl ">
            <div className="grid gap-y-1 md:gap-y-2">
              <div>Next.js</div>
              <div>React</div>
              <div>Typescript</div>
              <div>Redux</div>
              <div>Tailwind</div>
              <div>SCSS</div>
            </div>
            <div className="grid gap-y-1 md:gap-y-2 grid-rows-6">
              <div>Express</div>
              <div>MongoDB</div>
              <div>PostgressSQL</div>
              <div>Docker</div>
            </div>
            <div className="grid gap-y-1 md:gap-y-2 grid-rows-6">
              <div>AWS</div>
              <div>GCP</div>
            </div>
            <div className="grid gap-y-1 md:gap-y-2 grid-rows-6">
              <div>Github actions</div>
              <div>Cypress</div>
              <div>Jest</div>
            </div>
          </div>
        </section>

        <section className="grid gap-y-5 mt-10 lg:pr-14 ">
          <div className="text-4xl exeperience">Projects</div>

          <div className="grid md:grid-cols-2 gap-x-10 ">
            <div className="grid text-lg gap-y-3">
              <Link
                target="_blank"
                href="https://www.merkaz-hafacha.co.il"
                className="text-2xl text-blue-400"
              >
                merkaz-hafacha
              </Link>
              <img
                width={400}
                src="/hafacha.png"
                loading="lazy"
                alt="hafacha"
              />
            </div>
            <div className="mt-10 ">
              <div>Type: Freelance Project</div>
              <p>
                Freelance PWA Tailor-made CMS + e-commerce platform for small
                enterprise.
              </p>
              <p>For this project I used:</p>
              <ul>
                <li>- Next.js 13</li>
                <li>- MongoDB</li>
                <li>- AWS S3</li>
                <li>- Tailwind</li>
                <li>- Redux</li>
                <li>- Resend for emails</li>
                <li>- Google Analytics</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-y-2 md:grid-cols-2 gap-x-10">
            <div className="grid gap-y-3">
              <Link
                target="_blank"
                href="https://blocka.com"
                className="text-2xl text-blue-400"
              >
                blocka
              </Link>
              <img width={400} src="/blocka.png" loading="lazy" alt="blocka" />
            </div>
            <div className="mt-10">
              <div>Type: Front-end position at onezero</div>
              <p>
                I had the privilege of collaborating on a captivating project,
                working in tandem with a UI designer through the platform of
                Figma.
              </p>
              <p>For this project I used:</p>
              <ul>
                <li>- Next.js</li>
                <li>- Tailwind</li>
                <li>- SendGrid</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
