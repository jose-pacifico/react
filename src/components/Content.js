import Cards from "./Cards";

const Content = (props) => {
  const { produtos, addProduto, rmProduto, listaCarrinho } = props;
  const cols = produtos.map((produto) => {
    return (
      <div className="col-sm-4">
        <Cards produto = {produto} addProduto = {addProduto}/>
      </div>
    );
  });

  return <div className="row"> {cols} </div>;
};

export default Content;