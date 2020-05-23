import React from "react"


class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return (
                <tbody>
                    <table key={this.props.movie.id}>
                        <div className="card bg-dark mb-3 ">
                            <div className="row">
                                <div className="col-md-3">
                                    <img alt="poster" width="250"src={this.props.movie.poster_path} className="card-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">{this.props.movie.title} ({this.props.movie.vote_average})</h3>
                                        <hr></hr>
                                        <p className="card-text">{this.props.movie.overview}</p>
                                        <button type="button" class="btn btn-primary" onClick={this.viewMovie.bind(this)} value="view" >View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </table>
                </tbody>
        )
    }
}

export default MovieRow