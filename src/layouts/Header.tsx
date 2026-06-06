const Header = function () {
  return (
    <header className='sticky top-0 z-50 border-b border-stone-200 bg-white'>
      <div className='mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8 sm:py-5'>
        <a
          className='shrink-0 text-base font-semibold tracking-normal text-stone-950 sm:text-lg'
          href='#top'
        >
          Jun Hirako
        </a>
        <nav aria-label='Primary navigation'>
          <ul className='flex flex-wrap justify-end gap-x-3 gap-y-1 text-xs text-stone-600 sm:gap-x-5 sm:gap-y-2 sm:text-sm'>
            <li>
              <a
                className='block py-1 transition-colors hover:text-stone-950 sm:py-0'
                href='#experience'
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className='block py-1 transition-colors hover:text-stone-950 sm:py-0'
                href='#publications'
              >
                Publications
              </a>
            </li>
            <li>
              <a
                className='block py-1 transition-colors hover:text-stone-950 sm:py-0'
                href='#links'
              >
                Links
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
