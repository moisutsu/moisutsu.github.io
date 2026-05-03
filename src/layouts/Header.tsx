const Header = function () {
  return (
    <header className='sticky top-0 z-50 border-b border-stone-200 bg-white'>
      <div className='mx-auto flex max-w-5xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8'>
        <a className='text-lg font-semibold tracking-normal text-stone-950' href='#top'>
          Jun Hirako
        </a>
        <nav aria-label='Primary navigation'>
          <ul className='flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600'>
            <li>
              <a className='transition-colors hover:text-stone-950' href='#experience'>
                Experience
              </a>
            </li>
            <li>
              <a className='transition-colors hover:text-stone-950' href='#publications'>
                Publications
              </a>
            </li>
            <li>
              <a className='transition-colors hover:text-stone-950' href='#links'>
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
