const Item = ({title , url , point , id , removeHandle}) => {
  return (
    <li>
      <span>{title} </span>
      <span>{url} </span>
      <span>{point} </span>

      <button onClick={() => removeHandle(id)}>Delete</button>
    </li>
  )
}
export default Item
