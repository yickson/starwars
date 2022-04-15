import '../App.css'

const List = ({ people }) => {
    return <li className="card-star" key={people.url}>
        {people.name}
    </li>
}

export default List;
