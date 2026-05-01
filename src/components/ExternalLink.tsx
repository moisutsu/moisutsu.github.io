type Props = {
  href: string;
  children?: React.ReactNode | string;
  className?: string;
  ariaLabel?: string;
};

export const ExternalLink: React.FC<Props> = function ({ href, children, className, ariaLabel }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={ariaLabel ?? href}
      className={className}
    >
      {children}
    </a>
  );
};
