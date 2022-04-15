
const ListPagination = (props) => {
    const { page, currentPage } = props

    const paginationClick = (e) => {
        props.handlePageClick(Number(e.target.id))
    }

    return (
        <li key={page} id={page} onClick={paginationClick}
            className={currentPage === page ? 'active' : null}>
            {page}
        </li>
    )
}

export default ListPagination;
