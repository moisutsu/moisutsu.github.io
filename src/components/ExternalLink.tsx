type Props = {
  href: string;
  children?: React.ReactNode | string;
  className?: string;
};

export const ExternalLink: React.FC<Props> = function ({ href, children, className }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={href}
      className={className}
    >
      {children}
    </a>
  );
};
