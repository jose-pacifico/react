import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Loja Virtual</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Produtos
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Adicionar</a></li>
                    <li><a className="dropdown-item" href="#">Editar</a></li>
                    <li><a className="dropdown-item" href="#">Deletar</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Signup</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        )
    }
}
export default Navbar