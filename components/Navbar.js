import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-20 px-4 py-2 h-20 flex items-center justify-between">
      <div className='flex items-center justify-between w-8/12 m-auto'>
      <div className="text-stone-900 text-4xl font-bold">WebVista</div>
      <div className="flex space-x-4 hidden sm:flex">
        <Link href="/about">
          <div className="text-xl text-stone-900 hover:text-stone-700">À propos</div>
        </Link>
        <Link href="/contact">
          <div className="text-xl text-stone-900 hover:text-stone-700">Contact</div>
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
