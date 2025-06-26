import { ReactNode } from "react"

import NBWLogo from "@/assets/logo-invert.png";
import NBWTextLogo from "@/assets/logo-text-invert.gif";

interface TermsLayoutProps {
  children: ReactNode;
}

const TermsLayout: React.FC<TermsLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-10 p-8">
      <header className="flex flex-col md:flex-row gap-5 items-center justify-center">
        <img src={NBWLogo.src} className="w-52" alt="Nimble Bun Works logo" />
        <img
          src={NBWTextLogo.src}
          className="w-[400px]"
          alt="Nimble Bun Works logo"
        />
      </header>

      <article className="container prose text-nbw-primary-invert prose-a:text-nbw-gray prose-headings:text-nbw-primary-invert prose-hr:border-nbw-gray prose-strong:text-nbw-gray">
        {children}
      </article>
    </div>
  )
}

export default TermsLayout;
