import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="txt1 p-b-25" style={{color:"white"}}>
                        Made by "Abushanum"
	                </span>
                    <ul className="social-icon animate pull-right">
                        <li><a href="#" title="facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" title="twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" title="google plus" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </footer>

        )
    }
}

export default Footer