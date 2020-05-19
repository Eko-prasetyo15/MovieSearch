import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Abushanum Movie</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div className="container">
            <div className="row col-md-12">
              <h2>IMDB Movie Search</h2>
              <hr></hr>
            </div>
            <div id="custom-search-input">
              <div className="input-group col-md-12">
                <input type="text" className="search-query form-control" placeholder="Movie Search" />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="button">
                    <span className=" glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
