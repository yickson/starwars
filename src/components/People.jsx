import {useEffect, useState} from "react";
import getPeople from "../services/people";
import Paginate from "./Paginate";


const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true)
        getPeople(currentPage).then(data => {
            setPeople(data.results);
            setCount(data.count);
            setLoading(false);
        })
    }, [currentPage])

    const onPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    const onPrevClick = () => {
        setCurrentPage(pag => pag - 1);
    }

    const onNextClick = () => {
        setCurrentPage(pag => pag + 1);
    }

    const dataPagination = {
        currentPage,
        people,
        count,
    }

    return (
        <div>
            <h3>Personajes</h3>
            {
                !loading ? <Paginate {...dataPagination}
                                     onPrevClick={onPrevClick}
                                     onNextClick={onNextClick}
                                     onPageChange={onPageChange}  />
                : <div>No hay emoción, hay paz...</div>
            }
        </div>
    )
}

export default People;
