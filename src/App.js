import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Content from "./components/Content";

class App extends Component {
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
                <Content produtos = {produtos} />
            </div>
        )
    }
}
export default App