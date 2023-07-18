import Cards from "./Cards";

const Content = (props) => {
  const cols = props.produtos.map((produto) => {
    return (
      <div className="col-sm-4">
        <Cards produto = {produto} />
      </div>
    );
  });

  return <div className="row"> {cols} </div>;
};

export default Content;