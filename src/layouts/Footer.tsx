import { FaGithub } from "react-icons/fa";

import { ExternalLink } from "@/components/ExternalLink";

const Footer = function () {
  return (
    <footer className="border-t">
      <div className="flex items-center justify-center">
        <span>&copy; 2023 Jun Hirako.</span>
        <ExternalLink href='https://github.com/moisutsu/moisutsu.github.io' className="flex items-center justify-center px-1">
          <FaGithub className='inline-block items-center justify-center' />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
