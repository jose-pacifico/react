import React, { Component } from 'react'

class Cards extends Component {
    render() {
        return (
            <div className="card" style={{ marginBottom: '1em' }}>
              <img src='https://m.media-amazon.com/images/I/71O-Il088wL._AC_UF894,1000_QL80_.jpg' 
              className="card-img-top" 
              />
              <div classNameName="card-body">
                <h5 className="card-title">Boneco Grogu - The Mandalorian</h5>
                <p className="card-text">R$500,00</p>
              </div>
          </div>
        )
    }
}

export default Cards