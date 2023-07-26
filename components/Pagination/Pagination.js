import { useContext, useState } from "react";

const Pagination = ({ initialPage, context, range, lenght }) => {
    const [page, setPage] = useState(initialPage);
    const {firstGame, setFirstGame} = useContext(context);

    const nextPage = () => {
        setPage(a => a + 1);
        setFirstGame(a => a + range);
        console.log(firstGame);
    };

    const previousPage = () => {
        setPage(page - 1);
        setFirstGame(a => a - range);
        console.log(firstGame);
    }

    return (
      <div className="flex items-center">
        <button className={`w-8 ${page === 1 ? 'invisible' : ''}`} onClick={previousPage} > {'<'} </button>       
        <p className="px-6">{page}</p>
        <button className={`w-8 ${page >= (lenght / range) ? 'invisible' : ''}`} onClick={nextPage}> {'>'} </button>            
      </div>
    );
  };
  
  export default Pagination;