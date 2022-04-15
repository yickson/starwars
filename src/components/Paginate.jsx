import List from "./List";
import ListPagination from "./ListPagination";


const Paginate = (props) => {

    const {currentPage, people, count} = props;
    const totalPag = Math.ceil(count / 10);

    const handlePrevClick = () => {
        props.onPrevClick();
    }

    const handleNextClick = () => {
        props.onNextClick();
    }

    const handlePageClick = (id) => {
        props.onPageChange(id);
    }

    const pagesRaw = [...Array(totalPag + 1).keys()];
    pagesRaw.shift()
    const pagesNumber = pagesRaw.map(page => {
        return (
            <ListPagination page={page} currentPage={currentPage} handlePageClick={handlePageClick}/>
        )
    })

    const renderCharacter = (people) => {
        return (
            <ul>
                {people.map(p => (
                    <List people = {p} />
                ))}
            </ul>
        )
    }


    return (
        <div className="main">
            <div className="mainData">
                {renderCharacter(people)}
            </div>
            <ul className="pagination">
                <li>
                    <button className="button-li" onClick={handlePrevClick} disabled={currentPage === pagesRaw[0]}>Prev</button>
                </li>
                {pagesNumber}
                <li>
                    <button className="button-li" onClick={handleNextClick} disabled={currentPage === pagesRaw[pagesRaw.length - 1]}>Next</button>
                </li>
            </ul>
        </div>
    )
}

export default Paginate;
