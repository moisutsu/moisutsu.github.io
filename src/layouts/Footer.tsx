import { FaGithub } from "react-icons/fa";

import { ExternalLink } from "@/components/ExternalLink";

const Footer = function () {
  return (
    <footer className='border-t border-stone-200 bg-white'>
      <div className='mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-6 text-sm text-stone-500 sm:px-8'>
        <span>&copy; Jun Hirako.</span>
        <ExternalLink
          href='https://github.com/moisutsu/moisutsu.github.io'
          ariaLabel='Portfolio source on GitHub'
          className='text-stone-500 transition-colors hover:text-stone-950'
        >
          <FaGithub aria-hidden='true' className='size-5' />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
