import Cards from "./Cards";
import Cart from "./Cart";

const Content = (props) => {
  const { produtos, addProduto, rmProduto, listaCarrinho, pagina } = props;
  
  switch (pagina) {
    case 'home':
      const cols = produtos.map((produto) => {
        return (
          <div className="col-sm-4">
            <Cards produto = {produto} addProduto = {addProduto}/>
          </div>
        );
      });
    
      return <div className="row"> {cols} </div>;
    
      case 'cart':
        return (
          <div className="col-sm-4">
            <Cart addProduto = {addProduto}/>
          </div>
        );
  }
};

export default Content;