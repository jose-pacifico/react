const Cards = (props) => {
  const produto = props.produto;
  return (
    <div className="card" style={{ marginBottom: '1em' }}>
      <img src={produto.imagem} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{produto.nome}</h5>
        <p className="card-text">Preço: {produto.preco}</p>
        <button type="button" className="btn btn-success">
          Adicionar ao carrinho
        </button>
  
      </div>
    </div>
  );
};

export default Cards;