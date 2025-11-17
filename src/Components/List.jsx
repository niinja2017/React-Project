import Item from "./Item"

const List = ({list , removeHandle}) => {

    return (
        <ul>
            {list.map(item => <Item key={item.id} {...item} removeHandle={removeHandle}/>)}
        </ul>

    )
}

export default List
