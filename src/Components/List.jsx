import ListItem from "./ListItem"

const List = ({ list }) => {
    // props : برای انتقال اطلاعات از کامپوننت پرنت به کامپوننت فرزند استفاده می شود
    return (
        <ul>
            {list.map(item2 => <ListItem key={item2.id} Listitem={item2} />)}
        </ul>

    )
}

export default List
