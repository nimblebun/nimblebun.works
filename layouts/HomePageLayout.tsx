import { ReactNode } from 'react';

import NBWLogo from '@/assets/logo-invert.png';
import NBWTextLogo from '@/assets/logo-text-invert.gif';

interface HomePageLayoutProps {
  children: ReactNode;
};

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <main className="max-w-[980px] mx-auto px-5 lg:px-0">
      <header className="py-20 flex flex-col lg:flex-row items-center justify-around">
        <img src={NBWLogo.src} className="w-72" alt="Nimble Bun Works logo" />
        <img src={NBWTextLogo.src} className="w-[600px]" alt="Nimble Bun Works logo" />
      </header>

      <article className="text-center text-nbw-gray font-display text-3xl font-bold">
        {children}
      </article>

      <footer className="py-20 text-2xl flex flex-col lg:flex-row items-center justify-around gap-6 lg:gap-12">
        <a href="https://twitter.com/nimblebunworks" title="twitter" target="_blank" rel="noopener noreferrer">
          twitter
        </a>

        <a href="https://github.com/nimblebun" title="github" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </footer>
    </main>
  );
};

export default HomePageLayout;
