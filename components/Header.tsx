import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-stone border-b border-ink/10">
      <div className="grid grid-cols-12 h-20">
        {/* Logo Area */}
        <div className="col-span-6 md:col-span-4 border-r border-ink/10 flex items-center px-8">
          <h1 className="font-sans font-bold tracking-widest text-lg flex items-center gap-2">
            MAISON
            <span className="w-2 h-2 bg-int-orange rounded-full"></span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex col-span-4 border-r border-ink/10 items-center justify-center gap-12">
          {['WORK', 'STUDIO', 'NEWS'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-sans text-xs tracking-[0.2em] hover:text-int-orange transition-colors duration-500 ease-out hover-trigger"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA / Contact */}
        <div className="col-span-6 md:col-span-4 flex items-center justify-end px-8">
          <button className="font-sans text-xs tracking-[0.2em] uppercase hover-trigger group flex items-center gap-2">
            Inquire
            <span className="block w-4 h-[1px] bg-ink group-hover:w-8 group-hover:bg-int-orange transition-all duration-700 ease-out"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;