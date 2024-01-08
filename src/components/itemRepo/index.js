import { ItemContainer } from "./styles";

const ItemRepo = () => {
  return (
    <ItemContainer>
      <h3>
        Eduardo Santos
      </h3>
      <p>
        Biografia
      </p>
      <a href="http://www.google.com" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
