import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            // Navigation
            <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="row">
                        <div className="col-sm-12">
                        <ul class="navbar-nav mr-auto">
                                <li><a href="https://reactjs.org/"><img src="https://revelry.co/wp-content/uploads/2019/05/react-native-UX-design.gif" width="250" height="100" /></a></li>
                                <li><a href="https://www.themoviedb.org/"><img src="https://pbs.twimg.com/profile_images/1215507879358124032/zCYTILe6_400x400.jpg" width="250" height="100" /></a></li>
                                <li><a href="https://21cineplex.com/"><img src="https://media3.giphy.com/media/FQkGpU34nbXrO/source.gif" width="250" height="100" /></a></li>
                                <li><a href="https://www.youtube.com/results?search_query=movie"><img src="https://phinemo.com/wp-content/uploads/2018/08/youtube.gif" width="250" height="100" /></a></li>
                                <li><a href="https://jquery.com/"><img src="https://www.duniailkom.com/wp-content/uploads/2015/12/jQuery-featured-duniailkom.png" width="250" height="100" /></a></li>

                            </ul>
                        </div>
                    </div>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="social-network">
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-github"></i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>

                    </div> */}
                </nav>
            </div>


        )
    }
}
export default Navbar