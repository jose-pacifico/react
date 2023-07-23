import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Content from "./components/Content";

class App extends Component {

    state = {
        listaCarrinho: [],
      };

      addProduto = (produto) => {
        const { listaCarrinho } = this.state;
        console.log("Produto adicionado ao carrinho ", produto);
        this.setState({
            listaCarrinho: [...listaCarrinho, produto],
        });
        
      };
    
      rmProduto = (index) => {
        const { listaCarrinho } = this.state;
        this.setState({
            listaCarrinho: listaCarrinho.filter((produto, i) => {
            return i !== index;
          }),
        });
      };

    render() {
        const produtos = [
        {
            nome: "Boneco Grogu - The Mandalorian",
            preco: "R$500,00",
            imagem: "https://m.media-amazon.com/images/I/71O-Il088wL._AC_UF894,1000_QL80_.jpg"
        },
        {
            nome: "Boneco Grogu - The Mandalorian",
            preco: "R$500,00",
            imagem: "https://m.media-amazon.com/images/I/71O-Il088wL._AC_UF894,1000_QL80_.jpg"
        },
        {
            nome: "Boneco Grogu - The Mandalorian",
            preco: "R$500,00",
            imagem: "https://m.media-amazon.com/images/I/71O-Il088wL._AC_UF894,1000_QL80_.jpg"
        },
        {
            nome: "Boneco Grogu - The Mandalorian",
            preco: "R$500,00",
            imagem: "https://m.media-amazon.com/images/I/71O-Il088wL._AC_UF894,1000_QL80_.jpg"
        },
        {
            nome: "Boneco Grogu - The Mandalorian",
            preco: "R$500,00",
            imagem: "https://m.media-amazon.com/images/I/71O-Il088wL._AC_UF894,1000_QL80_.jpg"
        },
        {
            nome: "Boneco Grogu - The Mandalorian",
            preco: "R$500,00",
            imagem: "https://m.media-amazon.com/images/I/71O-Il088wL._AC_UF894,1000_QL80_.jpg"
        }
    ]
        return (
            <div className="container text-center">
                <Navbar/>
                <Content 
                produtos = {produtos} 
                addProduto={this.addProduto}
                rmProduto={this.rmProduto}
                listaCarrinho={this.state.listaCarrinho}
                />
            </div>
        )
    }
}
export default App