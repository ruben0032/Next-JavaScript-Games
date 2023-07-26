import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full bg-primary-300 h-16 flex items-center shadow-inner">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex items-center ml-6">
          <Link href="/"> 
            <Image className="" src="/images/logo.png" alt="logo" width={44} height={44} /> 
          </Link>
          <Link className="text-xl pl-2" href="/"> UrGames Score</Link>
        </ul>
        <ul className="mr-6">
          <Image className="hover:cursor-pointer" src="/images/user.png" alt="menu usuario" width={48} height={48} />        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;