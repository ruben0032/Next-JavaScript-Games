import Image from 'next/image';

const GameCard = ({ title, urlImage, studio}) => {
  return (
    <div className="bg-secondary-100 flex flex-col items-center text-center p-2 shadow-lg rounded-lg hover:cursor-pointer">       
        <p className="text-xl min-h-[88px] font-semibold py-4" >{title}</p>
        <Image className=" max-h-[220px] rounded-lg" src={urlImage} alt="logo" width={220} height={220} />
        <p className="pt-4 min-h-[60px]" >{studio}</p>               
    </div>
  );
};

export default GameCard;