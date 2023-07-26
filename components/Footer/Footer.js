import Image from 'next/image';

const Footer = () => {
  return (
    <nav className="h-16 bg-primary-300 flex items-center justify-center mt-4">
      <div className="flex justify-center">
        <div className="inline-flex items-center"> 
            <Image className="" src="/images/logo.png" alt="logo" width={40} height={40} /> 
            <p className="pl-2" > UrGames Score</p>
            <p className="mx-8" >Todos los derechos reservados.</p> 
        </div>             
      </div>
    </nav>
  );
};

export default Footer;