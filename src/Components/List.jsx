import Item from "./Item"

const List = ({list , removeItem}) => {

    return (
        <ul>
            {list.map(item => <Item key={item.id} {...item} removeHandle={removeItem}/>)}
        </ul>

    )
}

export default List
