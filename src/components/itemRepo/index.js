import { ItemContainer } from "./styles";

const ItemRepo = ({repo}) => {
  return (
    <ItemContainer>
      <h3>
        {repo.name}
      </h3>
      <p>
        {repo.full_name}
      </p>
      <a href={repo.html_url} target="blank" className="remover">
        Acessar
      </a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
