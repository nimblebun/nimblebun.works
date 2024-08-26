import { ReactNode } from "react";

import NBWLogo from "@/assets/logo-invert.png";
import NBWTextLogo from "@/assets/logo-text-invert.gif";

interface HomePageLayoutProps {
  children: ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="noise z-0" />

      <main className="relative max-w-[980px] h-full mx-auto px-8 lg:px-0 flex flex-col items-center justify-center gap-8 z-20">
        <header className="flex flex-col gap-5 items-center justify-around">
          <img src={NBWLogo.src} className="w-72" alt="Nimble Bun Works logo" />
          <img
            src={NBWTextLogo.src}
            className="w-[600px]"
            alt="Nimble Bun Works logo"
          />
        </header>

        <article className="text-center text-nbw-primary-invert md:text-3xl font-bold">
          {children}
        </article>

        <div className="text-xl">
          <a href="mailto:contact@nimblebun.works">contact@nimblebun.works</a>
        </div>

        <div className="border-2 md:border-4 border-nbw-gray fixed top-12 right-14 md:top-24 md:right-28 border-l-0 border-b-0 md:border-l-0 md:border-b-0 w-12 h-12 md:w-24 md:h-24" />

        <div className="fixed bottom-12 left-14 md:bottom-24 md:left-28 text-nbw-gray tracking-widest text-sm md:text-2xl">
          WEBSITE #01
        </div>
        <div className="fixed bottom-12 right-14 md:bottom-24 md:right-28 text-nbw-gray tracking-widest text-sm md:text-2xl">
          / / /
        </div>
      </main>
    </>
  );
};

export default HomePageLayout;
