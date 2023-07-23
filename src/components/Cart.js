const Cart = (props) =>{
    const {listaCarrinho, rmProduto} = props;

    //Verificação se carrinho vazio
    if(listaCarrinho.length == 0){
        return(
            <h2> Seu carrinho está vazio </h2>
        )
    }

    const carrinho = listaCarrinho.map((produto, index) => {
        return(
            <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                        src={produto.imagem}
                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4">
                        <p className="lead fw-normal mb-2">{produto.nome}</p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{produto.preco}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"  onClick={() => rmProduto(index)}></i></a>
                    </div>
                    </div>
                </div>
                    </div>
        )
    })


    return(
    <>
    <section className="h-100" /*style="background-color: #eee;"*/>
        <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                        <div>
                            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price 
                            <i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                    </div>

                    {carrinho}

                    <div className="card">
                    <div className="card-body">
                        <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>    
    )
}

export default Cart;