const Item = ({title , url , point}) => {
  return (
    <li>
      <span>{title} </span>
      <span>{url} </span>
      <span>{point} </span>
    </li>
  )
}
export default Item
