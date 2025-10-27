const ListItem = (props) => {
  return (
    <li>
      <span>{props?.Listitem?.title} </span>
      <span>{props?.Listitem?.url} </span>
      <span>{props?.Listitem?.point} </span>
    </li>
  )
}
export default ListItem
