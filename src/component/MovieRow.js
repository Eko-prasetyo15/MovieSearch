import React from "react"


class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.title
        window.location.href = url
    }
    render() {
        return (
            <table key={this.props.movie.id}>
                <tbody>
                    <tr>
                        <td>
                            <img alt="poster" width="120" src={this.props.movie.poster_path} />
                        </td>
                        <h1> {this.props.movie.title} </h1>
                        <hr></hr>
                        <p>{this.props.movie.overview}</p>
                        <input type="button" onClick={this.viewMovie.bind(this)} value="view"/>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        )


    }
}

export default MovieRow