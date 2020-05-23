import React from "react"


class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return (
            <div className="container">
                <table key={this.props.movie.id}>
                    <tbody>
                        <tr>
                            <td>
                                <img alt="poster" width="120" src={this.props.movie.poster_path} />
                            </td>
                            <div className="container">
                                <h1> {this.props.movie.title} </h1>
                            </div>
                            <div className="container">
                                <p>{this.props.movie.overview}</p>
                                <button type="button" class="btn btn-primary" onClick={this.viewMovie.bind(this)} value="view" >View</button>
                            </div>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MovieRow