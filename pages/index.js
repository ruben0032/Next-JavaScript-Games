import { createContext, useEffect, useState } from "react";
import GameCard from "@components/GameCard/GameCard";
import Pagination from "@components/Pagination/Pagination";
import Link from "next/link";

const INITIAL_PAGE = 1;
const GAMES_RANGE = 6;
const gamePageContext = createContext();

const Home = () => {
    const [gameList, setGameList] = useState([]);
    const [gameListLenght, setGameListLenght] = useState(0);
    const [firstGame, setFirstGame] = useState(0);
    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/game');
                const { data, length } = await response.json();
                setGameList(data);
                setGameListLenght(length);
                console.log("paso por fetch useEffect");
            } catch (error) {
                setGameList([]);
            }   
        };
        fetchData(); 
    }, []);

    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 xl:gap-12 py-10 mx-4">
            {gameList.slice(firstGame, (firstGame + GAMES_RANGE)).map((game) => (
                <Link key={game.id} href={`game/${game.id}`}>
                <GameCard title={game.title} urlImage={game.urlImage} studio={game.studio} />
                </Link>
            ))}
            </div>
            <div className="flex items-center justify-center h-12 bg-secondary-100 shadow-md rounded-md mb-6 mx-6">
                <gamePageContext.Provider value={{firstGame, setFirstGame}}>
                    <Pagination initialPage={INITIAL_PAGE} context={gamePageContext} range={GAMES_RANGE} lenght={gameListLenght} />
                </gamePageContext.Provider> 
            </div>
        </div>
    )
}

export default Home;