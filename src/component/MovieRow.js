import React from "react"
import '../../src/row.css'


class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return (
            <div>
                {/* <table key={this.props.movie.id}> */}
                <div className="movie-card">

                    <div className="containers">

                        <a href="#" onClick={this.viewMovie.bind(this)}><img src={this.props.movie.poster_path} height="300px" alt="cover" className="cover" /></a>

                        <div className="hero">

                            <div className="details">
                                <div className="title1">{this.props.movie.title} </div>

                                <div className="title2">{this.props.movie.original_title}</div>

                                <fieldset className="rating">
                                    <input type="radio" id="star5" name="rating" value="5" /><label className="full" for="star5" title="Awesome - 5 stars"></label>
                                    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                    <input type="radio" id="star4" name="rating" value="4" checked /><label className="full" for="star4" title="Pretty good - 4 stars"></label>
                                    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                                    <input type="radio" id="star3" name="rating" value="3" /><label className="full" for="star3" title="Meh - 3 stars"></label>
                                    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                    <input type="radio" id="star2" name="rating" value="2" /><label className="full" for="star2" title="Kinda bad - 2 stars"></label>
                                    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                                    <input type="radio" id="star1" name="rating" value="1" /><label className="full" for="star1" title="Sucks big time - 1 star"></label>
                                    <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                </fieldset>

                                <span className="likes">{this.props.movie.popularity} likes</span>

                            </div>

                        </div>

                        <div className="description">

                            <div className="column1">
                                <span className="tag">action</span>
                                <span className="tag">fantasy</span>
                                <span className="tag">adventure</span>
                            </div>

                            <div className="column2">

                                <p style={{color : 'black'}}>{this.props.movie.overview}<a href="#">read more</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <table key={this.props.movie.id}>
                        <div classNameNameNameNameNameNameNameName="card bg-dark mb-3 ">
                            <div classNameNameNameNameNameNameNameName="row">
                                <div classNameNameNameNameNameNameNameName="col-md-3">
                                    <img alt="poster" width="250"src={this.props.movie.poster_path} classNameNameNameNameNameNameNameName="card-img" />
                                </div>
                                <div classNameNameNameNameNameNameNameName="col-md-8">
                                    <div classNameNameNameNameNameNameNameName="card-body">
                                        <h3 classNameNameNameNameNameNameNameName="card-title">{this.props.movie.title} ({this.props.movie.vote_average})</h3>
                                        <hr></hr>
                                        <p classNameNameNameNameNameNameNameName="card-text">{this.props.movie.overview}</p>
                                        <button type="button" classNameNameNameNameNameNameName="btn btn-primary" onClick={this.viewMovie.bind(this)} value="view" >View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </table> */}
                {/* </table> */}
            </div>
        )
    }
}

export default MovieRow