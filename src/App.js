import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { Component } from 'react'
import Table from './Table'
import Navbar from './Navbar'
import Cards from './Cards'

class App extends Component {
    render() {
        return (
            <div className="container text-center">
                <Navbar/>
                <div class="row">
                    <div class="col">
                        <Cards/>
                    </div>
                    <div class="col">
                        <Cards/>
                    </div>
                    <div class="col">
                        <Cards/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Cards/>
                    </div>
                    <div class="col">
                        <Cards/>
                    </div>
                    <div class="col">
                        <Cards/>
                    </div>
                </div>
              </div>
        )
    }
}
export default App