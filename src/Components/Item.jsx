const Item = (props) => {
  return (
    <li>
      <span>{props.item.title} </span>
      <span>{props.item.url} </span>
      <span>{props.item.point} </span>
    </li>
  )
}
export default Item
