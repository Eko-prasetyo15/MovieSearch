import React, { Component } from 'react';
import './App.css';
import MovieRow from "./component/MovieRow.js"
import $ from "jquery"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // const movies = [
    //   { id: "0", poster: "https://images-na.ssl-images-amazon.com/images/I/719SFBdxRtL._AC_SY879_.jpg", title: "Avenger", deskripsi: "wskjv skdjvnskjf skdfjkldv lskjdvm" },
    //   { id: "1", poster: "https://images-na.ssl-images-amazon.com/images/I/719SFBdxRtL._AC_SY879_.jpg", title: "Avenger", deskripsi: "wskjv skdjvnskjf skdfjkldv lskjdvm" },
    //   ,
    // ]


    this.perfomSearch("ant man")


  }
  perfomSearch(searchTerm) {
    console.log("ini performe seaarcch")
    const urlsearch = "https://api.themoviedb.org/3/search/movie?api_key=fb07bd7840b8c57af5696504bf028f10&query=" + searchTerm
    $.ajax({
      url: urlsearch,
      success: (searchResult) => {
        console.log("data sukses")
        // console.log(searchResult)
        const results = searchResult.results
        console.log(results[0])

        var movieRows = []
        results.forEach((movie) => {
          movie.poster_path = "https://image.tmdb.org/t/p/w500/" + movie.poster_path
          console.log(movie.poster_path)
          const movieRow = <MovieRow movie={movie} />
          movieRows.push(movieRow)
        })

        // var movieRows = []
        //     movies.forEach((movie) => {
        //       console.log(movie.title)
        //       const movieRow = <MovieRow movie={movie}/>

        //       movieRows.push(movieRow)
        //     })
            this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.log("eror bray")
      }
    })
  }

  searchChangeHandler(e) {
    console.log(e.target.value)
    const searchTerm = e.target.value
    this.perfomSearch(searchTerm)
  }
  render() {
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
                  <input type="text" className="search-query form-control" placeholder="Movie Search" onChange={this.searchChangeHandler.bind(this)}/>
                  <span className="input-group-btn">
                    <button className="btn btn-danger" type="button">
                      <span className=" glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {this.state.rows}

          </div>
        </header>
      </div>
    );
  }
}

export default App;
