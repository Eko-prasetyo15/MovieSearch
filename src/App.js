import React, { Component } from 'react';
import './App.css';
import MovieRow from "./component/MovieRow.js"
import Navbar from "./component/Navbar.js"
import Footer from "./component/Footer.js"


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


    this.perfomSearch("")


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
          <Navbar />
          <div>
            <div className="container">
              <div className="row col-md-12">
                <h1>TMDB Movie Search</h1>
                <hr></hr>
              </div>
              <div id="custom-search-input">
                <div className="input-group col-md-12">
                  <input type="text" className="search-query form-control" placeholder="Movie Search" onChange={this.searchChangeHandler.bind(this)} />
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
          <div className="pagination-wrap">
            <ul className="pagination pagination-v1">
              <li><a href="#">Previous</a></li>
              <li><a href="#">1</a></li>
              <li><a className="active" href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </div>
          {/* <Footer/> */}
        </header>
      </div>
    );
  }
}

export default App;
