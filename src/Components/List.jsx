import Item from "./Item"

const List = ({list}) => {

    return (
        <ul>
            {list.map(item => <Item key={item.id} {...item} />)}
        </ul>

    )
}

export default List
