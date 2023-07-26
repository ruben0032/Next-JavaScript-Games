import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image';
import GameDescription from "@components/GameDescription/GameDescription";

const GameInfo = () => {
    const { query: { gameId },} = useRouter();

    const [game, setGame] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch(`../api/game/${gameId}`);
                const entry = await response.json();
                setGame(entry);
            } catch (error) {
                console.log(error);
            }   
        };
        if (gameId) fetchData();
        
    }, [gameId]);

    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center px-4 my-10">
                <div className="bg-secondary-100 flex flex-col items-center justify-center shadow-lg rounded-lg p-4">
                    <h2 className="text-2xl text-center pb-6">{game.title}</h2>
                    <Image className="rounded-lg" src={game.urlImage} alt="Videojuego" width={384} height={384} />
                    <div className="flex flex-col pt-4">
                        <p>Fecha lanzamiento: {game.publicDate}</p>
                        <p>Estudio: {game.studio}</p>
                    </div> 
                </div>
            </div>
            <div>
                <GameDescription description={game.description} />
            </div>
        </div>
    )
    
}

export default GameInfo;